<template>
  <div>
    <el-input placeholder="请选择图标" class="icon-input" :readonly=true  v-model="className">
      <template slot="prepend"><i :class="className"></i></template>
      <template slot="append"><i class="el-icon-search" @click="handleShow()"></i></template>
    </el-input>
    <el-dialog title="选择图标" :visible.sync="iconDialogVisible"  :append-to-body="true" width="30%">
      <div id="icon-list-tpl">
        <div id="choose-icon">
          <div>
            <form onsubmit="return false;">
              <el-input placeholder="搜索图标" class="search-input" v-model="keywords" @input="handleSearch()">
                <template slot="prepend">搜索图标</template>
              </el-input>
            </form>
          </div>
          <div class="icon-list-box">
            <ul class="list-inline" id="icon-list-inline">
              <li v-for="(icon, index) in iconList" :class="{active:index == selected}"  :title="icon.name"
                  @click="handleSelected(index)"><i :class="icon.class"></i></li>
            </ul>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="small" @click="handleSubmit()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<style scoped>
  .icon-input{width:280px;}
  .search-input{width:350px;}
  .icon-input .el-icon-search{cursor:pointer;}
  #icon-list-tpl,.clearfix {
    width:100%;
    clear:both;
  }
  #choose-icon{
    margin:10px;
  }
  #choose-icon ul{
    margin:5px 0 0 0;
    padding-left:0;
  }
  .icon-list-box{
    clear:both;
  }
  #choose-icon ul li{
    list-style:none;
    width:30px;height:30px;
    line-height:30px;
    border:1px solid #ddd;
    font-size:20px;
    padding:1px;
    margin:1px;
    text-align: center;
    position:relative;
    float:left;
  }
  .avatar-list-ul li {
    width:52px;
    height:52px;
    line-height:48px;
  }
  #choose-icon ul li:hover{
    border:1px solid #2c3e50;
    cursor:pointer;
  }
  #choose-icon ul li.active{border:1px solid #e74c3c;}
  #choose-icon ul li.active i{color:#1296db;}
</style>
<script>
  import http from '../utils/http'
  export default {
    data() {
      return {
        iconDialogVisible : false,
        className:'',
        icons:[],
        iconList:[],
        keywords:'',
        selected:-1
      }
    },
    components: {

    },
    props: {
        url:{
          type:String,
          required:true
        },
        value:String,
        eventName:{
          type:String,
          required:true
        }
    },
    mounted() {
      this.className = this.value
      this.initData()
    },
    created: function () {

    },
    methods: {
      initData() {
        http.post(this.url).then(response =>{
          this.icons = response.data
          this.iconList = response.data
        })
      },
      handleShow() {
        this.iconDialogVisible = true
      },
      handleSelected(index) {
        this.selected = index
      },
      handleSearch() {
        if (this.keywords == '') {
          this.iconList = Object.assign({}, this.icons)
        } else {
          let arr = []
          for (let i=0; i< this.icons.length; i++) {
            if (this.icons[i].class.indexOf(this.keywords)　>=0 || this.icons[i].name.indexOf(this.keywords) >= 0) {
              arr.push(Object.assign({}, this.icons[i]))
            }
          }
          this.iconList = arr
        }
      },
      handleSubmit() {
        if (this.selected < 0) {
          this.$message.error("请选择图标")
          return false
        }
        this.className = this.icons[this.selected].class
        this.$emit(this.eventName, this.className)
        this.iconDialogVisible = false
      }
    }
  }
</script>

