<template>
  <el-container>
    <topHeader></topHeader>
    <el-container class="content">
      <leftMenu></leftMenu>
      <el-main class="content-main">
        <div class="head-title head-title-border">模块管理</div>
        <el-row :gutter="10" class="module-layout">
          <el-col :span="11">
            <el-row>
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>系统内置模块</span>
                  <el-button style="float: right; padding: 3px 0" type="text"><i class="el-icon-setting"></i></el-button>
                </div>
                <div class="text item module-list">
                  <el-row :gutter="20">
                    <el-col :span="7"  justify="center" align="middle"><div class="grid-content bg-purple-dark"></div></el-col>
                    <el-col :span="7"  justify="center" align="middle"><div class="grid-content bg-purple-dark"></div></el-col>
                    <el-col :span="7"  justify="center" align="middle"><div class="grid-content bg-purple-dark"></div></el-col>
                    <el-col :span="7"  justify="center" align="middle"><div class="grid-content bg-purple-dark"></div></el-col>
                    <el-col :span="7"  justify="center" align="middle"><div class="grid-content bg-purple-dark"></div></el-col>
                  </el-row>
                </div>
              </el-card>
            </el-row>
            <el-row>
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>用户自定义模块</span>
                  <el-button style="float: right; padding: 3px 0" type="text"><i class="el-icon-setting"></i></el-button>
                </div>
                <div class="text item module-list">
                  <el-row :gutter="20">
                    <el-col :span="7"  justify="center" align="middle"><div class="grid-content bg-purple-dark"></div></el-col>
                    <el-col :span="7"  justify="center" align="middle"><div class="grid-content bg-purple-dark"></div></el-col>
                    <el-col :span="7"  justify="center" align="middle"><div class="grid-content bg-purple-dark"></div></el-col>
                    <el-col :span="7"  justify="center" align="middle"><div class="grid-content bg-purple-dark"></div></el-col>
                    <el-col :span="7"  justify="center" align="middle"><div class="grid-content bg-purple-dark"></div></el-col>
                  </el-row>
                </div>
              </el-card>
            </el-row>
            <el-row>
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>主题模块</span>
                  <el-button style="float: right; padding: 3px 0" type="text"><i class="el-icon-setting"></i></el-button>
                </div>
                <div class="text item module-list">
                  <el-row :gutter="20">
                    <el-col :span="7"  justify="center" align="middle"><div class="grid-content bg-purple-dark"></div></el-col>
                    <el-col :span="7"  justify="center" align="middle"><div class="grid-content bg-purple-dark"></div></el-col>
                    <el-col :span="7"  justify="center" align="middle"><div class="grid-content bg-purple-dark"></div></el-col>
                    <el-col :span="7"  justify="center" align="middle"><div class="grid-content bg-purple-dark"></div></el-col>
                    <el-col :span="7"  justify="center" align="middle"><div class="grid-content bg-purple-dark"></div></el-col>
                  </el-row>
                </div>
              </el-card>
            </el-row>
            <el-row>
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>插件模块</span>
                  <el-button style="float: right; padding: 3px 0" type="text"><i class="el-icon-setting"></i></el-button>
                </div>
                <div class="text item module-list">
                  <el-row :gutter="20">
                    <el-col :span="7"  justify="center" align="middle"><div class="grid-content bg-purple-dark"></div></el-col>
                    <el-col :span="7"  justify="center" align="middle"><div class="grid-content bg-purple-dark"></div></el-col>
                    <el-col :span="7"  justify="center" align="middle"><div class="grid-content bg-purple-dark"></div></el-col>
                    <el-col :span="7"  justify="center" align="middle"><div class="grid-content bg-purple-dark"></div></el-col>
                    <el-col :span="7"  justify="center" align="middle"><div class="grid-content bg-purple-dark"></div></el-col>
                  </el-row>
                </div>
              </el-card>
            </el-row>
          </el-col>
          <el-col :span="1">
            <div class="module-hr-line">&nbsp;</div>
          </el-col>
          <el-col :span="12">
            <el-container>
              <el-header style="height:90px;margin-bottom:20px;">
                <el-row :gutter="20">
                  <el-col :span="8" justify="center" align="middle" class="el-header-logo"><div class="grid-content bg-purple ">LOGO</div></el-col>
                  <el-col :span="16">
                    <el-row>
                      <el-col :span="24"  justify="center" align="middle"><div class="grid-content bg-purple">顶部栏</div></el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="24"  justify="center" align="middle"><div class="grid-content bg-purple">导航栏</div></el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-header>
              <el-container style="margin-bottom:20px;padding:0 10px;">
                <el-col :span="24">
                <el-col :span="16">
                  <el-row class="el-main-body">
                    <el-col :span="24"  justify="center" align="middle"><div class="grid-content bg-purple el-main-content">主内容区</div></el-col>
                  </el-row>
                </el-col>
                <el-col :span="8">
                  <el-card class="box-card">
                    <div slot="header" class="clearfix">
                      <span>侧边栏</span>
                      <el-button style="float: right; padding: 3px 0" type="text"><i class="el-icon-setting"></i></el-button>
                    </div>
                    <div class="text item">
                      <el-row>
                        <el-col :span="24"  justify="center" align="middle"><div class="grid-content bg-purple-dark"></div></el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="24"  justify="center" align="middle"><div class="grid-content bg-purple-dark"></div></el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="24"  justify="center" align="middle"><div class="grid-content bg-purple-dark"></div></el-col>
                      </el-row>
                      <el-row >
                        <el-col :span="24" justify="center" align="middle"><div class="grid-content bg-purple-dark"></div></el-col>
                      </el-row>
                    </div>
                  </el-card>
                </el-col>
                </el-col>
              </el-container>
              <el-footer>
                <el-row>
                  <el-col :span="24" justify="center" align="middle"><div class="grid-content bg-purple-dark">自由内容</div></el-col>
                </el-row>
              </el-footer>
              <el-footer>
                <el-row>
                  <el-col :span="24" justify="center" align="middle"><div class="grid-content bg-purple">底部栏</div></el-col>
                </el-row>
              </el-footer>
            </el-container>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="scss" scope>
.module-layout {
.module-list {
  .el-col {
    margin-bottom:20px;
  }
}
.module-hr-line{
  border-right:1px dotted #ccc;
}
.el-row {
  margin-bottom: 20px;
&:last-child {
   margin-bottom: 0;
 }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
  color:#fff;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.bg-gray-light{
  background:#F2F6FC;

}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  line-height:36px;
}
.el-header {
  height:90px;
.el-header-logo{

.grid-content {
  min-height:90px;
  line-height:90px;
}
}

}
.el-aside{padding-right:20px;}
.el-main-body{
.grid-content {
  min-height:300px;
  line-height: 300px;
}
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
}
</style>
<script>
  import topHeader from '../../components/header.vue'
  import leftMenu from '../../components/menu.vue'
  import router from '../../router'


  export default {
    data() {
      return {

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

      }
    }
  }
</script>
