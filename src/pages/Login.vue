<template>
  <div class="login-wrap">
    <div class="login">
      <div class="title">
        诗心客博客
      </div>
      <el-form :model="user" :rules="rules" ref="userForm" style="width:100%">
        <el-form-item prop="name">
          <el-input v-model="user.account" placeholder="请输入账号">
            <span slot="prefix">
               &nbsp;<i class="el-icon-blog-user"></i>
            </span>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="user.password" type="password" placeholder="请输入密码">
            <span slot="prefix">
               &nbsp;<i class="el-icon-blog-password"></i>
            </span>
            <span slot="suffix">
               &nbsp;<i class="el-icon-blog-eye"></i>
            </span>
          </el-input>
        </el-form-item>

      </el-form>
      <el-button type="primary"  @click="login('userForm')" style="width:100%">登录
      </el-button>

    </div>
  </div>
</template>
<style lang="scss">
  .login-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: fixed;
  }

  .login {
    width: 380px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    color: #303133;
    border-radius: 4px;
    overflow: hidden;
    background: rgba(255, 255, 255, .8);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 30px;
    box-sizing: border-box;
  .title {
    font-size: 22px;
    font-weight: bold;
    padding-bottom: 30px;
    color: #303133;
  }
  .regist-tip {
    text-align: center;
    font-size: 14px;
    padding: 15px 0;
  a {
    color: #409EFF;
  }
  }
  }
</style>
<script>
  import router from '../router'
  import http from '../utils/http'
  import userStore from '../store/user'

  export default {
    data() {
      return {
        user: {
          account: '',
          password: ''
        },
        rules: {
          account: [
            {required: true, message: '请输入帐号', trigger: 'blur'},
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur'}
          ]
        }
      }
    },
    mounted() {
      this.initData()
    },
    methods: {
      initData() {

      },
      login(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.user)
            http.post('/passport/checklogin', this.user).then(response => {
              console.log(response.data)
              userStore.set(response.data)
              this.$message.success('登录成功')
              router.push('/')
            })
          } else {
            return false
          }
        });
      }
    }
  }
</script>
