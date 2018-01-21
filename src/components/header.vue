<template>
  <el-header class="header">
    <div class="logo">
      <span @click="goHome">
        <span>诗心客博客</span>
      </span>
    </div>
    <div class="header-menu">
      <div class="header-tools">
        <div class="item"><i class="el-icon-blog-fold"></i></div>
      </div>
      <!--头部右边设置-->
      <div class="setting">
        <div class="item" title="首页">
          <i class="el-icon-blog-home"></i>
        </div>
        <div class="item" title="全屏">
          <i class="el-icon-blog-full-screen"></i>
        </div>
        <div class="item" @click="readMsg">
          <el-badge :value="99">
            <i class="el-icon-bell"></i>
          </el-badge>
        </div>
        <div class="item">
          <el-dropdown @command="handleCommand">
          <span class="mine">
            <div class="el-avatar" style="background:#fff;">
                      <img src="../assets/images/avatar/1.jpg">
             </div>
              {{name}}<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="myInfo"><i class="el-icon-blog-profile"></i> 我的信息</el-dropdown-item>
              <el-dropdown-item command="myInfo"><i class="el-icon-blog-password"></i> 修改密码</el-dropdown-item>
              <el-dropdown-item command="logout" divided> <i class="el-icon-blog-logout"></i> 退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </el-header>
</template>
<style lang="scss">
</style>
<script>
  import router from '../router'

  export default {
    props: ['projectName'],
    data() {
      return {
        name: '诗心客'
      }
    },
    components: {},
    methods: {
      handleCommand(command) {
        if (command == 'logout') {
          this.$confirm('是否确定退出', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            store.clear();
            this.$message({
              type: 'success',
              message: '退出成功!'
            });
            router.push('/login')
          }).catch(() => {
            this.$message('已取消退出');
          });
        } else if (command == 'myInfo') {
          this.$message('功能正在开发中');
        }
      },
      goHome() {
        router.push('/')
      },
      readMsg() {
        this.$message('功能正在开发中');
      }
    }
  }
</script>
