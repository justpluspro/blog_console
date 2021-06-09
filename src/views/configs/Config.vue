<template>
  <div class="page-wrapper">
    <div class="container-xl">
      <div class="page-header d-print-none">
        <div class="row align-items-center">
          <div class="col">
            <h2 class="page-title">设置</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="page-body">
      <div class="container-xl">
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">基本设置</h3>
              </div>
              <div class="card-body">
                <form onsubmit="return false">
                  <div class="form-group mb-3 row">
                    <label class="form-label col-3 col-form-label">登录名</label>
                    <div class="col">
                      <input type="text" v-model="basicConfig.loginName" class="form-control" placeholder="登录名称">
                    </div>
                  </div>
                  <div class="form-group mb-3 row">
                    <label class="form-label col-3 col-form-label">昵称</label>
                    <div class="col">
                      <input type="text" v-model="basicConfig.nickname" class="form-control" placeholder="昵称">
                    </div>
                  </div>
                  <div class="form-group mb-3 row">
                    <label class="form-label col-3 col-form-label">邮箱</label>
                    <div class="col">
                      <input type="email" v-model="basicConfig.email" class="form-control" placeholder="邮箱">
                    </div>
                  </div>
                  <div class="form-group mb-3 row">
                    <label class="form-label col-3 col-form-label">头像</label>
                    <div class="col">
                      <input type="text" v-model="basicConfig.avatar" class="form-control" placeholder="avatar">
                    </div>
                  </div>
                  <div class="form-footer">
                    <button type="button" @click="updateBasicConfig" class="btn btn-primary">保存修改</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">其他设置</h3>
              </div>
              <div class="card-body">
                <form onsubmit="return false;">
                  <div class="form-group mb-3 row">
                    <label class="form-label col-3 col-form-label">默认头像</label>
                    <div class="col">
                      <input type="text" v-model="extraConfig.defaultAvatar" class="form-control" placeholder="avatar">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="form-label col-3 col-form-label pt-0">评论策略</label>
                    <div class="col">
                      <label class="form-check">
                        <input v-model="extraConfig.commentStrategy" name="commentStrategy" v-bind:checked="extraConfig.commentStrategy === 'EACH'" class="form-check-input" type="radio">
                        <span class="form-check-label">每次</span>
                      </label>
                      <label class="form-check">
                        <input v-model="extraConfig.commentStrategy" name="commentStrategy" v-bind:checked="extraConfig.commentStrategy === 'FIRST'" class="form-check-input" type="radio">
                        <span class="form-check-label">第一次</span>
                      </label>
                      <label class="form-check">
                        <input v-model="extraConfig.commentStrategy" name="commentStrategy" v-bind:checked="extraConfig.commentStrategy === 'NEVER'" class="form-check-input" type="radio">
                        <span class="form-check-label">从不</span>
                      </label>
                    </div>
                  </div>
                  <div class="form-footer">
                    <button type="button" @click="updateExtraConfig" class="btn btn-primary">保存修改</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">修改密码</h3>
              </div>
              <div class="card-body">
                <form onsubmit="return false;">
                  <div class="form-group mb-3 row">
                    <label class="form-label col-3 col-form-label">原密码</label>
                    <div class="col">
                      <input type="text" class="form-control" placeholder="原密码">
                    </div>
                  </div>
                  <div class="form-group mb-3 row">
                    <label class="form-label col-3 col-form-label">新密码</label>
                    <div class="col">
                      <input type="text" class="form-control" placeholder="新密码">
                    </div>
                  </div>
                  <div class="form-group mb-3 row">
                    <label class="form-label col-3 col-form-label">确认密码</label>
                    <div class="col">
                      <input type="text" class="form-control" placeholder="确认密码">
                    </div>
                  </div>
                  <div class="form-footer">
                    <button type="button" class="btn btn-primary">保存修改</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { findAll, updateConfig } from '../../api/config'
export default {
  name: 'Config',
  mounted () {
    this.loadAllData()
  },
  data () {
    return {
      basicConfig: {
        email: '',
        avatar: '',
        loginName: '',
        nickname: ''
      },
      extraConfig: {
        commentStrategy: '',
        defaultAvatar: ''
      },
      passwordConfig: {
        password: '',
        newPassword: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    loadAllData () {
      findAll({}).then(res => {
        this.basicConfig.loginName = res.loginName
        this.basicConfig.avatar = res.avatar
        this.basicConfig.email = res.email
        this.basicConfig.nickname = res.nickname
        this.extraConfig.commentStrategy = res.commentStrategy
        this.extraConfig.defaultAvatar = res.defaultAvatar
      }).catch(error => {
        console.log(error)
      })
    },
    updateExtraConfig () {
      console.log('updateExtraConfig')
      this.extraConfig.loginName = this.basicConfig.loginName
      updateConfig(this.extraConfig).then(res => {

      }).then(error => {
        alert('修改失败!' + error)
      })
    },
    updateBasicConfig () {
      updateConfig(this.basicConfig).then(res => {
        console.log('修改成功')
      }).catch(error => {
        alert('修改失败' + error)
      })
    }
  }
}
</script>
