<template>
  <div id="login">
  
    <div class="login_bj animate__animated animate__fadeInDown">
      <div style="height:32px;">
        <h3>个人博客</h3>
      </div>

      <el-form label-position="left" label-width="80px" :model="form">
        <el-form-item></el-form-item>
        <el-input placeholder="请输入账号" @keyup.enter.native="loginClick()" v-model="form.name" suffix-icon="el-icon-user">
        </el-input>
        <el-form-item></el-form-item>
        <el-input placeholder="请输入密码" @keyup.enter.native="loginClick()" v-model="form.password" :type="typeInput">
          <i slot="suffix" @click="bgClick" :class="{'el-icon-view':true,'el_click':bg_click_password}"
            style="cursor: pointer;"></i>
        </el-input>
        <el-form-item></el-form-item>

        <el-row :gutter="24">
          <el-col :span="18">
            <el-input placeholder="请输入正确的验证码"  id="Txtidcode" v-model="form.verify">
            </el-input>
          </el-col>
          <el-col :span="6" id="idcode"></el-col>
        </el-row>

        <el-form-item></el-form-item>
        <el-form-item></el-form-item>

        <el-button type="primary" id="btns" size="medium" style="width:100%;" @click="loginClick()">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { logins } from "@/api/login/login.js";
  import { domButton, isBoolean } from "../assets/js/jquery.idcode";
  import { admin_login } from "@/static/axios/index.js";
  import { User } from "@/assets/js/user.js";
  export default {
    data() {
      return {
        form: {
          name: "",
          password: "",
          verify: ""
        },
        bg_click_password: false,
        typeInput: "password"
      };
    },
    mounted() {
      domButton("idcode");
    },
    methods: {
      //点击登录
      loginClick() {
        setTimeout(() => {
          console.log(isBoolean);
          if (!isBoolean) return this.$message.error("请输入正确的验证码");
          let { name, password } = this.form;
          if (!name || !password) this.$message.error("请输入正确的账户");
          admin_login("admin_login", { name, password }).then(({ data }) => {
            User.setUser(data.data);
            if (data.data) this.$router.push({ path: "/index" })
          })
        }, 888);
      },
      //点击小眼睛
      bgClick() {
        this.bg_click_password = !this.bg_click_password;
        if (this.bg_click_password) return (this.typeInput = "text");
        this.typeInput = "password";
      }
    }
  };
</script>

<style lang="less">
  @import url("../assets/css/login.less");
</style>