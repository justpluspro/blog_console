<template>
  <div class="container">
      <el-form :model="loginForm" :rules="rules" ref="loginForm">
        <h1 style="text-align: center; color: white; margin-bottom: 48px;">用户登录</h1>
        <el-form-item prop="username">
          <el-input type="text" v-model="loginForm.username" placeholder="用户名" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="display: inline-block" @click="submitForm('loginForm')">提交</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
import { login } from '../api/login'
import { setToken } from '../util/cookie'

export default {
  name: 'login',
  data () {
    return {
      loading: false,
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 16, message: '长度在 3 到 16 个字符之间', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符之间', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('验证成功')
          login(this.loginForm.username, this.loginForm.password).then((res) => {
            this.$message.success('登录成功')
            setToken('x-auth-token', res.data)
            this.$router.push('/console/articles')
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center; // 水平居中
  align-items: center; // 垂直居中
  height: 100vh;
  background-color: #2f4256;

  .el-input__inner {
    background-color: transparent;
    height: 47px !important;
    line-height: 47px !important;
    padding: 32px;
  }
}

.el-form {
  min-width: 500px;
}

</style>
