<template>
  <el-container>
    <topHeader></topHeader>
    <el-container class="content">
      <leftMenu></leftMenu>
      <el-main class="content-main">
        <div class="head-title head-title-border">标签列表</div>
        <div class="search-form">
            <el-tag
              v-for="tag in tags"
              :key="tag.name"
              closable
              :type="tag.type">
              {{tag.name}}
              <el-popover
                placement="bottom-start"
                trigger="click">
                <el-form :inline="true"  size="small" >
                  <el-form-item label="标签名称">
                    <el-input  placeholder="标签名称" model="selectedTag.name"></el-input>
                  </el-form-item>
                  <el-form-item label="标签别名">
                    <el-input  placeholder="标签别名" model="selectedTag.name"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary">保存</el-button>
                  </el-form-item>
                </el-form>
                <i class="el-icon-edit" @click="handleSelect(tag)" slot="reference"></i>
              </el-popover>

            </el-tag>
            <el-button size="small"><i class="el-icon-plus"></i> 新建</el-button>
            <div class="add-tag-form">
              <el-row>
              <el-form :inline="true"  size="small" >
                <el-form-item label="标签名称">
                  <el-input  placeholder="标签名称" model="selectedTag.name"></el-input>
                </el-form-item>
                <el-form-item label="标签别名">
                  <el-input  placeholder="标签别名" model="selectedTag.name"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary">添加</el-button>
                  <el-button type="info">取消</el-button>
                </el-form-item>
              </el-form>
              </el-row>
            </div>

        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="scss" scope>
.el-tag{margin:0 5px;
  .el-icon-edit{margin-left:5px;cursor:pointer;
     &:hover{
       opacity:0.7;
       font-size:14px;
     }
  }
}
.add-tag-form{
  margin-top:15px;
  padding-top:15px;
  border-top:1px dashed #ccc;
}
</style>
<script>
  import topHeader from '../../components/header.vue'
  import leftMenu from '../../components/menu.vue'
  import router from '../../router'

  export default {
    data() {
      return {
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ],
        selectedTag: {

        }
      }
    },
    components: {
      topHeader,
      leftMenu
    },
    mounted() {
      this.initData()
    },
    created: function () {

    },
    methods: {
      initData() {

      },
      handleSelect(tag) {
        this.selectedTag = tag;
      },
      handleEditTag() {

      }
    }
  }
</script>
