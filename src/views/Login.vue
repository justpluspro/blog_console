<template>
  <div class="container">
      <form :model="loginForm">
        <input type="text" v-model="loginForm.username" /><br/>
        <input type="password" v-model="loginForm.password" /> <br/>
        <button type="button" @click="btnLogin">登录</button>
      </form>
  </div>
</template>

<script>
import { login } from '../api/login'
import { setToken } from '../util/cookie'
import router from '../router'

export default {
  name: 'login',
  data () {
    return {
      loading: false,
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    btnLogin () {
      login(this.loginForm.username, this.loginForm.password).then(res => {
        alert(JSON.stringify(res))
        setToken('x-auth-token', res)
        router.push('/console/articles')
      }).catch(error => {
        alert(error)
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
}
</style>
