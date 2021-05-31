<template>
    <div class="main-container">
      <div class="header">
        <router-link to="/console/articles" tag="a">文章列表</router-link>
        <router-link to="/console/moments" tag="a">动态列表</router-link>
        <router-link to="/console/comments" tag="a">评论管理</router-link>
        <router-link to="/console/files" tag="a">文件管理</router-link>
        <router-link to="/console/categories" tag="a">分类</router-link>
        <router-link to="/console/tags" tag="a">标签</router-link>
        <router-link to="/console/blackips" tag="a">黑名单</router-link>
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

<style lang="scss" scoped>
.main-container {
  max-width: 80%;
  width: 80%;
  margin: 0 auto;
  .header {
    height: 56px;
    border-bottom: 1px solid #eeeeee;
    line-height: 56px;
    a {
      padding: 4px;
      text-decoration: none;
      color: black;
    }
    a:hover {
      text-decoration: none;
      color: aqua;
    }
    a .active {
      color: aqua;
      text-decoration: none;
    }
  }
  .content {
    width: 100%;
  }
}
</style>
