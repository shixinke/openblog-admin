<template>
  <el-container>
    <topHeader></topHeader>
    <el-container class="content">
      <leftMenu></leftMenu>
      <el-main class="content-main">
        <div class="head-title head-title-border">添加文章</div>
        <div class="form-body">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"  size="small" class="demo-ruleForm">
            <el-row :gutter="25">
              <el-col :span="17">
                <el-form-item label="标题" prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="编辑模式" prop="name">
                  <el-radio-group v-model="editorType" size="small">
                    <el-radio-button label="简单模式"></el-radio-button>
                    <el-radio-button label="完整模式"></el-radio-button>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="关键词" prop="name">
                  <el-input ></el-input>
                </el-form-item>
                <el-form-item label="描述" prop="name">
                  <el-input type="textarea" :rows="5"></el-input>
                </el-form-item>
                <el-form-item label="导入文件" prop="name">
                  <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"

                    list-type="file">
                    <el-button size="small" type="success" round> <i class="el-icon-upload2"></i> 点击上传</el-button>
                  </el-upload>
                </el-form-item>
                <el-form-item>
                  <mavon-editor v-model="content"/>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">立即发表</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-col>
              <el-col :span="7">
                <el-card style="margin-bottom:15px;" class="sidebar-card">
                  <div slot="header" class="clearfix">
                    <span>发布</span>
                    <el-button type="primary" round style="float: right;"  @click="submitForm('ruleForm')" size="small">发布</el-button>
                  </div>
                  <div class="text item">
                    <el-form-item label="状态" prop="name" label-width="50px">
                      <el-radio-group v-model="radio5" size="small">
                        <el-radio-button label="公开"></el-radio-button>
                        <el-radio-button label="草稿"></el-radio-button>
                      </el-radio-group>
                    </el-form-item>
                    <el-form-item label="模板" prop="name" label-width="50px">
                      <el-select  clearable placeholder="请选择">
                        <el-option
                          :key="1"
                          :label="默认"
                          :value="detail">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="作者" prop="name" label-width="50px">
                      <el-select  clearable placeholder="请选择作者">
                        <el-option
                          :key="1"
                          :label="默认"
                          :value="detail">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="别名" prop="name" label-width="50px">
                      <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="状态" prop="name" label-width="50px">
                      <el-date-picker
                        type="datetime"
                        placeholder="选择日期时间">
                      </el-date-picker>
                    </el-form-item>
                  </div>
                </el-card>

                <el-card style="margin-bottom:15px;">
                  <div slot="header" class="clearfix">
                    <span>分类</span>
                    <el-button style="float: right; padding: 3px 0" type="text">发布</el-button>
                  </div>
                  <div class="text item">
                    <el-select v-model="value4" clearable placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                </el-card>

                <el-card>
                  <div slot="header" class="clearfix">
                    <span>标签</span>
                    <el-button style="float: right; padding: 3px 0" type="text">发布</el-button>
                  </div>
                  <div class="text item">
                    <el-select
                      v-model="value10"
                      multiple
                      filterable
                      allow-create
                      default-first-option
                      placeholder="请选择文章标签">
                      <el-option
                        v-for="item in options5"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="scss" scope>
  .sidebar-card {}

</style>
<script>
  import topHeader from '../../components/header.vue'
  import leftMenu from '../../components/menu.vue'
  import router from '../../router'


  export default {
    data() {
      return {
        editorType:'HTML',
        content:'',
        radio5: '上海',
        value:'',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value4: '',
        options5: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        value10: [],
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
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
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
