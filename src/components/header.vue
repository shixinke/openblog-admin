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
              <el-dropdown-item command="profile"><i class="el-icon-blog-profile"></i> 我的信息</el-dropdown-item>
              <el-dropdown-item command="password"><i class="el-icon-blog-password"></i> 修改密码</el-dropdown-item>
              <el-dropdown-item command="logout" divided> <i class="el-icon-blog-logout"></i> 退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>

    <el-dialog title="个人资料" :visible.sync="profileDialogVisible" :append-to-body="true">
      <el-form :model="profileForm" ref="profileForm" label-width="100px" size="small">
        <el-form-item label="">

          <el-upload
            action=""
            :on-preview="handleAvatarPreview"
            :on-remove="handleAvatarRemove">
            <div class="el-avatar el-avatar-border el-avatar-mlarge profile-avatar">
              <div class="avatar-mask"> <i class="el-icon-edit"></i> 修改头像</div>
              <img :src="avatar">
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="profileForm.email"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickname">
          <el-input v-model="profileForm.nickname"></el-input>
        </el-form-item>

      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="small" @click="saveProfile('profileForm')">确 定</el-button>
        <el-button size="small">取 消</el-button>
      </span>
    </el-dialog>

    <el-dialog title="修改密码" :visible.sync="passwordDialogVisible" :append-to-body="true">

    </el-dialog>
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
        name: '诗心客',
        avatar:'../assets/images/avatar/1.jpg',
        profileDialogVisible:false,
        passwordDialogVisible:false,
        profileForm:{
          nickname : '',
          email : ''
        },
        passwordForm:{}
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

            this.$message({
              type: 'success',
              message: '退出成功!'
            });
            router.push('/login')
          }).catch(() => {
            this.$message('已取消退出');
          });
        } else if (command == 'profile') {
          this.profileDialogVisible = true
        } else if (command == 'password') {
          this.passwordDialogVisible = true
        }
      },
      goHome() {
        router.push('/')
      },
      readMsg() {
        this.$message('功能正在开发中');
      },
      saveProfile() {

      },
      handleAvatarPreview(file) {
        console.log(file);
      },
      handleAvatarRemove() {

      }
    }
  }
</script>
