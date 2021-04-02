<template>
  <el-container>
    <el-aside style="width: 200px; height: 100vh; background-color: #2f4256">
      <el-menu default-active="/console/articles" class="el-menu-vertical-demo"
               :collapse="collapse"
               :router="true"
               :collapse-transition="true"
               background-color="#2f4256" text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="/console/articles">
          <i class="el-icon-setting"></i>
          <span slot="title">文章列表</span>
        </el-menu-item>
        <el-menu-item index="/console/moments">
          <i class="el-icon-setting"></i>
          <span slot="title">动态列表</span>
        </el-menu-item>
        <el-menu-item index="/console/files">
          <i class="el-icon-setting"></i>
          <span slot="title">文件管理</span>
        </el-menu-item>
        <el-menu-item index="/console/categories">
          <i class="el-icon-setting"></i>
          <span slot="title">分类管理</span>
        </el-menu-item>
        <el-menu-item index="/console/tags">
          <i class="el-icon-setting"></i>
          <span slot="title">标签管理</span>
        </el-menu-item>
        <el-menu-item index="/console/blackips">
          <i class="el-icon-setting"></i>
          <span slot="title">黑名单管理</span>
        </el-menu-item>
        <el-menu-item index="/console/configs">
          <i class="el-icon-setting"></i>
          <span slot="title">系统设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-menu class="el-menu-demo" mode="horizontal">
          <el-menu-item>
            <i class="el-icon-folder-add" @click="collapse = !collapse"></i>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Console',
  data () {
    return {
      collapse: false,
      back: '#dddddd'
    }
  }
}
</script>

<style scoped lang="scss">
.logo {
  height: 60px;
  width: 100%;
  line-height: 60px;
  font-size: 2rem;
  text-align: center;
}
.el-header {
  padding: 0 !important;
}
.el-main {
  padding: 16px;
}
.el-menu {
  border-right: none !important;
}
</style>
