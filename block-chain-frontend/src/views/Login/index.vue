<template lang="pug">
    .login-container
        smart-card
        .title-container
            h3.title
             | 異質區塊鏈平台以健康照護中心與醫療院所為情境
        el-form(ref="loginForm" :model="loginForm" class="login-form" label-position="left")
            h4.input-title
             | Smart Card卡讀取
            el-form-item(prop="username")
                el-input(ref="username" v-model="loginForm.username" :placeholder="loginForm.username" name="username" type="text" tabindex="1")
                span.button-container
                    el-button.read-button(slot="append" :type="type" round @click="readSmartCard")
                     | {{instruction}}
            h4.input-title
             | 密碼
            el-form-item(prop="password")
                el-input(ref="password" v-model="loginForm.password" show-password placeholder="請輸入密碼" name="password" tabindex="2")
            
            el-button(:loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="login" :disabled="isDisable")
             | 登入
        .logo-downward-container
          img(src="./../../assets/logo.png" style="width:100%; padding: 20px;")
</template>
<script>
import {
    Message
} from 'element-ui'
export default {
  data() {
    return {
      loginForm: {
        username: "使用者",
        password: ""
      },
      user:{

      },
      type: "warning",
      instruction: "讀取",
      isDisable: true
    };
  },
  methods: {
    async readSmartCard() {
      try {
        this.$store.dispatch('getUser')
        this.user = this.$store.getters.user
        this.loginForm.username = this.user.name
        this.type = "success"
        this.instruction = "讀取成功"
        this.isDisable = false
        Message.success("讀取成功")
      } catch(err) {
        console.log(err)
      }
    },
    login() {
      if(this.user.PIN === this.loginForm.password && this.loginForm.password){
        Message.success("成功驗證身份")
        this.$router.push("/")
      } else {
        Message.error("PIN碼錯誤 驗證身份失敗")
      }
    }
  }
};
</script>
<style lang="scss">
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;
@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}
/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 100%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>
<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: rgb(46, 42, 42);
.login-container {
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 420px;
    max-width: 100%;
    padding: 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  .title-container {
    position: relative;
    padding-top: 160px;
    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
    }
  }
  .input-title {
    font-size: 18px;
    color: $light_gray;
    margin: 0px auto 10px auto;
    text-align: left;
  }
  .button-container {
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }
  .read-button {
    position: absolute;
    right: 10px;
    top: 5px;
    font-size: 8px;
  }
}
</style>