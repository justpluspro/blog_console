<template>
    <div>
      <div class="header">
        <router-link to="/console/articles" tag="a">文章列表</router-link>
        <router-link to="/console/moments" tag="a">动态列表</router-link>
        <router-link to="/console/comments" tag="a">评论管理</router-link>
        <router-link to="/console/files" tag="a">文件管理</router-link>
        <router-link to="/console/categories" tag="a">分类</router-link>
        <router-link to="/console/tags" tag="a">标签</router-link>
        <router-link to="/console/configs" tag="a">设置</router-link>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
</template>

<script>
export default {
  name: 'Console',
  data () {
    return {
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
