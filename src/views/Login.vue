<template>
  <div class="login-panel">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 offset-md-4">
          <form onsubmit="return false;">
            <div class="card">
              <div class="card-header">
                用户登录
              </div>
              <div class="card-body">
                <div class="form-group">
                  <input type="text" class="form-control" v-model="loginForm.username" placeholder="Username">
                </div>
                <div class="form-group mt-3">
                  <input type="password" class="form-control" v-model="loginForm.password" placeholder="Password">
                </div>
                <div class="checkbox mt-3">
                  <label>
                    <input type="checkbox" value="remember-me"> 记住我
                  </label>
                </div>
                <div class="mt-3">
                  <button @click="btnLogin" class="w-100 btn d-block btn-primary" type="button">登录</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
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
        router.push('/article/index')
      }).catch(error => {
        alert(error)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.login-panel {
  display: flex;
  justify-content: center; // 水平居中
  align-items: center; // 垂直居中
  height: 100vh;
}
</style>
