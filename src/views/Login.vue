<template>
  <el-form
    label-width="70px"
    class="login-container"
    :model="form"
    :rules="rules"
  >
    <h3 class="login_title">系统登录</h3>
    <el-form-item label="用户名" prop="username">
      <el-input v-model="form.username" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        type="password"
        v-model="form.password"
        placeholder="请输入密码"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        @click="submit"
        style="margin-left: 70px; margin-top: 10px"
        type="primary"
        >登录</el-button
      >
    </el-form-item>
  </el-form>
</template>
<script>
import Mock from "mockjs";
import Cookie from "js-cookie";
const axios = require("axios");
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, trigger: "blur", message: "请输入用户名" },
        ],
        password: [{ required: true, trigger: "blur", message: "请输入密码" }],
      },
      id:"2"
    };
  },
  methods: {
    //登录
    submit() {
      //用Mock假设这里后端返回token信息
      // const token = Mock.Random.guid();
      //这里选择存在插件js-cookie用于不同页面间的通信（也可以存在浏览器）
      // Cookie.set("token", token);
      // this.$router.push("/home");

      //模拟apifox请求
      axios.get(`/user/${this.id}`
      ).then(function (res) {
        console.log(res.data);
      }).catch(function(err){
        console.log(err);
      })
    },
  },
};
</script>
<style lang="less" scoped>
.login-container {
  width: 350px;
  border: 1px solid #eaeaea;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 25px #cac6c6;
  .login_title {
    text-align: center;
    margin-bottom: 40px;
    color: #505458;
  }
  .el-input {
    width: 230px;
  }
}
</style>