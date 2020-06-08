<template lang="pug">
    .login-container
        .title-container
            h3.title
             | 社區照護中心區塊鏈平台
            h5.subtitle
             | 病歷資料請求
        el-form(ref="loginForm" :model="loginForm" class="login-form" label-position="left")
            h4.input-title
             | 病患姓名
            el-form-item(prop="patient")
                el-input(ref="patient" v-model="loginForm.patient" placeholder="使用者" name="patient" type="text" tabindex="1")
                span.button-container
                    el-button.read-button(slot="append" :type="type" round @click="readSmartCard")
                     | {{instruction}}
            h4.input-title
             | 醫院名稱
            el-form-item(prop="hospital")
              el-select(v-model="loginForm.hospital" filterable placeholder="醫院名稱")
                el-option(v-for="item in options" :key="item.value" :label="item.label" :value="item.value")
            
            el-button(:loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click="getRecord(patient)" :disabled="isDisable")
             | 送出請求
</template>
<script>
import { Message } from "element-ui";

export default {
  data() {
    return {
      patient: {},
      loginForm: {
        patient: "",
        hospital: ""
      },
      options: [
        {
          value: "a",
          label: "台大醫院"
        },
        {
          value: "b",
          label: "成大醫院"
        },
        {
          value: "c",
          label: "長庚醫院"
        }
      ],
      instruction: "讀取",
      type: "warning",
      isDisable: true
    };
  },
  methods: {
    async readSmartCard() {
      try {
        this.$store.dispatch("getPatient");
        this.patient = this.$store.getters.patient;
        this.loginForm.patient = this.patient.name;
        this.type = "success";
        this.instruction = "讀取成功";
        this.isDisable = false;
        Message.success("讀取成功");
      } catch (err) {
        console.log(err);
      }
    },
    async getRecord({ ID, privateKey }) {
      try {
        await this.$store.dispatch("getRecord", {
          ID: ID,
          privateKey: privateKey
        });
        this.$router.push({ path: "./medicalrecord" });
      } catch (err) {
        console.log(err);
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

  .el-select {
    display: inline-block;
    height: 47px;
    width: 100%;
    .el-input {
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
  }
  .el-option {
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
    padding: 15px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  .title-container {
    position: relative;
    padding-top: 80px;
    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
    }
    .subtitle {
      font-size: 18px;
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