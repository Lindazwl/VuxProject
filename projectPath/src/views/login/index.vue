<template>
  <div class="login-container">
    <div class="login-bg" ></div>
    <div class="login-header">
      <img class="login-logo" src="../../assets/image/logo.png">
      <p class="login-title">公寓运营服务云平台</p>
    </div>
    <div class="login-form">
      <input
        type="text"
        placeholder="请输入手机号"
        :maxlength="20"
        class="login-input"
        v-model="username"
      >
      <input
        type="password"
        placeholder="请输入密码"
        :maxlength="20"
        class="login-input"
        v-model="password"
      >
      <x-button type="primary" :show-loading="isLoading"
                class="login-btn"
                :style=textStyle
                @click.native="login">登录</x-button>
    </div>
  </div>
</template>

<script>
  import { login } from '@/api/login'
  import { getAllEnumData } from '@/api/system'
  import { localStorage } from '@/utils/storage'
  export default {
    components: {
    },
    data() {
      return {
        isLoading: false,
        username: '',
        password: '',
        textStyle: {
          color: '#389ef2'
        }
      }
    },
    computed: {
      // loginBgStyle() {
      //   return {
      //     height: this.getPageHeight() + 'px'
      //   }
      // },
      isLogOut() {
        return this.$route.query.isLogOut
      }
    },
    methods: {
      // Login(userinfo) {
      //   const username = userinfo.username.trim()
      //   return new Promise((resolve, reject) => {
      //     login(username, userinfo.password).then(res => {
      //       const data = res.Data
      //       localStorage.set('userinfo', data)
      //       debugger
      //       localStorage.set('token', data.Token)
      //       resolve()
      //     })
      //       .catch((err) => {
      //         reject(err)
      //       })
      //   })
      // },
      login() {
        this.isLoading = true
        this.$store.dispatch('Login', { username: this.username, password: this.password })
          .then(() => {
            getAllEnumData({}).then(res => {
              const data = JSON.parse(res.Data)
              localStorage.set('enumList', data)
              if(this.isLogOut){
                this.$router.push('/')
              }else{
                this.$router.back('/login')
              }
            }).catch(() => {
              this.isLoading = false
            })
          })
          .catch(() => {
            this.isLoading = false
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    width:750px;
    background-color: #31bbff;
  }
  .login-bg{
    position: absolute;
    width:750px;
    height: 100%;
    background-image: url('../../assets/image/login-bg.png');
    background-repeat: no-repeat;
    background-size:100% 100%;
  }
  .login-header{
    width: 750px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 250px;
    margin-bottom: 150px;
  }
  .login-logo{
    width: 270px;
    height: 80px;
    margin-bottom: 30px;
  }
  .login-title{
    color: #fff;
    font-size: 30px;
    letter-spacing: 10px;
  }
  .login-form{
    z-index: 9999;
    .login-input {
      width: 688px;
      height: 90px;
      color:#fff;
      font-size: 30px;
      padding-left: 30px;
      border-radius: 10px;
      margin-left: 15px;
      border: none;
      outline:none;
      margin-bottom: 50px;
      background-color: rgba(255,255,255,0.2);
    }
  }
  .login-input::-webkit-input-placeholder {
    color: white;
  }
  .login-btn{
    width: 688px;
    height: 90px;
    margin-top: 80px;
    border-radius: 10px;
  }

</style>
