<template>
  <div class="container">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <div class="login-title">用户登录</div>
      <el-form-item label="" prop="username">
        <el-input prefix-icon="el-icon-date" size="large" type="username" v-model="ruleForm.username" placeholder="用户名" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="" prop="password">
        <el-input prefix-icon="el-icon-date" size="large" show-password="true" type="password" v-model="ruleForm.password" placeholder="密码" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    const validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        if (this.ruleForm.username !== '') {
          this.$ref.ruleForm.validateField('username')
        }
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.password !== '') {
          this.$ref.ruleForm.validateField('password')
        }
        callback()
      }
    }
    return {
      loading: false,
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { validator: validateName, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      console.log('登录')
      // this.loading = !this.loading
      // this.$store.dispatch()
      this.$message.error('错误消息')
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #242f42;
  .login-title {
    text-align: center;
    font-size: 2rem;
    color: #ffffff;
    margin-bottom: 32px;
  }
  .demo-ruleForm {
    width: 400px !important;
    min-width: 400px !important;
  }
}

.el-button {
  width: 100%;
}
</style>
