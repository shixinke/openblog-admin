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
                      <img :src="avatar">
             </div>
              {{nickname}}<i class="el-icon-caret-bottom el-icon--right"></i>
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

    <el-dialog title="个人资料" :visible.sync="profileDialogVisible" :append-to-body="true" width="25%">
      <el-form :model="profileForm" ref="profileForm" label-width="100px" size="small">
        <el-form-item label="">

          <el-upload
            :with-credentials=withCookie
            :action="uploadAvatarUrl"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            :on-remove="handleAvatarRemove">
            <div class="el-avatar el-avatar-border el-avatar-mlarge profile-avatar">
              <div class="avatar-mask"> <i class="el-icon-edit"></i> 修改头像</div>
              <img :src="tmpAvatar">
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="profileForm.email" prefix-icon="el-icon-blog-email">
          </el-input>
        </el-form-item>
        <el-form-item label="昵称"  prop="nickname">
          <el-input v-model="profileForm.nickname" prefix-icon="el-icon-blog-nickname"></el-input>
        </el-form-item>

      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="small" @click="saveProfile('profileForm')">确 定</el-button>
        <el-button size="small">取 消</el-button>
      </span>
    </el-dialog>

    <el-dialog title="修改密码" :visible.sync="passwordDialogVisible" :append-to-body="true" width="25%">
      <el-form :model="passwordForm" ref="passwordForm" label-width="100px" size="small">
        <el-form-item label="">
          <div class="el-avatar el-avatar-border el-avatar-mlarge profile-avatar">
            <img :src="tmpAvatar">
          </div>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="passwordForm.password" prefix-icon="el-icon-blog-password">
          </el-input>
        </el-form-item>
        <el-form-item label="确认密码"  prop="password">
          <el-input type="password" v-model="passwordForm.confirmPassword" prefix-icon="el-icon-blog-password"></el-input>
        </el-form-item>

      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="small" @click="savePassword('passwordForm')">确 定</el-button>
        <el-button size="small">取 消</el-button>
      </span>
    </el-dialog>
  </el-header>
</template>
<style lang="scss">
</style>
<script>
  import router from '../router'
  import http from '../utils/http'
  import userStore from '../store/user'

  export default {
    props: ['projectName'],
    data() {
      return {
        nickname: '未知',
        email: '',
        defaultAvatar: http.uploadPreviewUrl + '/uploads/images/avatar/1.jpg',
        avatar:'',
        tmpAvatar:'',
        withCookie: true,
        profileDialogVisible:false,
        passwordDialogVisible:false,
        profileForm:{
          nickname : '',
          email : '',
          avatar:''
        },
        avatarId: '',
        avatarToken: '',
        uploadAvatarUrl:http.apiBaseUrl + '/upload/avatar',
        passwordForm:{
          password:'',
          confirmPassword:''
        }
      }
    },
    components: {},
    computed:{},
    mounted() {
      let userInfo = userStore.get()
      if (userInfo) {
        this.nickname = userInfo.nickname
        this.avatar = userInfo.avatar || this.defaultAvatar
        this.tmpAvatar = this.avatar
        this.email = userInfo.email
        this.profileForm.nickname = userInfo.nickname
        this.profileForm.email = userInfo.email
      }
    },
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
        http.post('/profile/save', this.profileForm).then(response => {
          this.$message.success('个人资料保存成功')
          userStore.set(this.profileForm)
          this.profileDialogVisible = false
        })
      },
      savePassword() {
        http.post('/profile/password', this.passwordForm).then(response => {
          this.$message.success('个人密码修改成功,请重新登录')
          userStore.destroy()
          this.passwordDialogVisible = false
          router.push('/login')
        })
      },
      handleAvatarPreview(file) {
        console.log(file);
      },
      handleAvatarSuccess(res, file) {
        if (res && res.code == 200) {
          this.tmpAvatar = http.uploadPreviewUrl + res.data.url
          this.avatarId = res.data.fileId
          this.avatarToken = res.data.token
          this.profileForm.avatar = this.tmpAvatar
        } else {
          this.$message.error(res.message);
        }

      },
      beforeAvatarUpload(file) {
        const allowTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/bmp'];
        const maxSize = 2 * 1024 * 1024;

        if (allowTypes.indexOf(file.type) < 0) {
          this.$message.error('上传头像只能是图片!');
          return false;
        }
        if (file.size > maxSize) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
          return false;
        }
        return true;
      },
      handleAvatarRemove() {
        http.post('/upload/remove', {type : 'avatar', fileId : this.avatarId, token : this.avatarToken}).then(response => {
          this.tmpAvatar = this.avatar
          this.profileForm.avatar = ''
          this.$message.success('头像删除成功')
        })
      }
    }
  }
</script>
