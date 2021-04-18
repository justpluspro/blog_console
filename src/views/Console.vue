<template>
    <el-container>
      <el-header style="border-bottom: 1px solid #eeeeee;">
        <el-row :gutter="24">
          <el-col :span="18" :offset="3">
            <el-menu :default-active="defaultActive" mode="horizontal" router>
              <el-menu-item index="/console/dashboard" style="font-weight: bold; color: black">Dashboard</el-menu-item>
              <el-menu-item index="/console/articles">
                <i class="el-icon-setting"></i>
                <span slot="title">文章</span>
              </el-menu-item>
              <el-menu-item index="/console/moments">
                <i class="el-icon-setting"></i>
                <span slot="title">动态</span>
              </el-menu-item>
              <el-menu-item index="/console/comments">
                <i class="el-icon-location"></i>
                <span slot="title">评论</span>
              </el-menu-item>
              <el-menu-item index="/console/files">
                <i class="el-icon-setting"></i>
                <span slot="title">文件</span>
              </el-menu-item>
              <el-menu-item index="/console/categories">
                <i class="el-icon-setting"></i>
                <span slot="title">分类</span>
              </el-menu-item>
              <el-menu-item index="/console/tags">
                <i class="el-icon-setting"></i>
                <span slot="title">标签</span>
              </el-menu-item>
              <el-menu-item index="/console/blackips">
                <i class="el-icon-setting"></i>
                <span slot="title">黑名单</span>
              </el-menu-item>
              <el-menu-item index="/console/config">
                <i class="el-icon-setting"></i>
                <span slot="title">设置</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-header>
      <el-main style="background-color:#eeeeee;">
        <el-col :span="18" :offset="3">
          <router-view />
        </el-col>
      </el-main>
    </el-container>
</template>

<script>
export default {
  name: 'Console',
  data () {
    return {
      defaultActive: '/console/articles',
      collapse: false,
      back: '#dddddd'
    }
  }
}
</script>

<style lang="scss">
.__main_container {
  padding: 16px;
  background-color: #fff;
  margin: 0 20px;
}
.el-main {
  height: calc(100% - 80px);
}
</style>
