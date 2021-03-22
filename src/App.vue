<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router @select="handleSelect">
          <el-menu-item index="/console/articles">文章管理</el-menu-item>
          <el-menu-item index="/console/moments">动态管理</el-menu-item>
          <el-menu-item index="/console/files">文件管理</el-menu-item>
          <el-menu-item index="/console/categories">分类管理</el-menu-item>
          <el-menu-item index="/console/tags">标签管理</el-menu-item>
          <el-menu-item index="/console/blackips">黑名单管理</el-menu-item>
          <el-menu-item index="/console/configs">系统设置</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
        <div class="line"></div>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect () {
      console.log('选中了')
    }
  }
}
</script>

<style lang="scss">

* {
  padding: 0;
  margin: 0;
}

#app {
  padding: 0;
  margin: 0;
}

</style>
