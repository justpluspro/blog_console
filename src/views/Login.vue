<template>
  <div class="page page-center">
    <div class="container-tight py-4">
      <div class="card card-md">
        <form class="card card-md" action="." onsubmit="return false;" method="get" autocomplete="off">
          <div class="card-body">
            <h2 class="card-title text-center mb-4">用户登录</h2>
            <div class="mb-3">
              <label class="form-label">用户名</label>
              <input type="text" v-model="loginForm.username" class="form-control" placeholder="Enter email">
            </div>
            <div class="mb-2">
              <label class="form-label">
                密码
              </label>
              <div class="input-group input-group-flat">
                <input type="password" v-model="loginForm.password" class="form-control"  placeholder="Password"  autocomplete="off">
                <span class="input-group-text">
                  <a href="#" class="link-secondary" title="Show password" data-bs-toggle="tooltip"><!-- Download SVG icon from http://tabler-icons.io/i/eye -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="2" /><path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" /></svg>
                  </a>
                </span>
              </div>
            </div>
            <div class="mb-2">
              <label class="form-check">
                <input type="checkbox" class="form-check-input"/>
                <span class="form-check-label">Remember me on this device</span>
              </label>
            </div>
            <div class="form-footer">
              <button type="button" @click="btnLogin" class="btn btn-primary w-100">登录</button>
            </div>
          </div>
        </form>
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
