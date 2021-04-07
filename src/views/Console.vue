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
          <i class="el-icon-box"></i>
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
      <el-header class="custom-header">
        <el-menu mode="horizontal">
          <el-menu-item>
            <i class="el-icon-folder-add" @click="collapse = !collapse"></i>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <div class="__custom-main">
          <router-view />
        </div>
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
.el-header {
  position: fixed;
  display: flex;
  width: 100%;
  left: 200px;
  height: 50px;
  line-height: 50px;
}
.el-aside {
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
}
.el-main {
  padding: 8px !important;
  position: fixed;
  left: 200px;
  right: 0;
  top: 60px;
  bottom: 0;
  background-color: #eeeeee !important;
  overflow-y: scroll;
}
.el-menu {
  border-right: none;
}
.__custom-main {
  margin-bottom: 50px !important;
  padding: 16px;
  background-color: #fff;
  border-radius: 4px;
}

.custom-header {
  border-bottom: 1px solid #eeeeee !important;
}
</style>
