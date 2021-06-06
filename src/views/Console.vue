<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link tag="a" class="nav-link" to="/article/index">文章</router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class="nav-link" to="/moment/index">动态</router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class="nav-link" to="/comment/index">评论</router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class="nav-link" to="/comment/index">文件</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                模板
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link tag="a" class="nav-link" to="/category/index">分类</router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class="nav-link" to="/tag/index">标签</router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class="nav-link" to="/blackip/index">黑名单</router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class="nav-link" to="/config/index">设置</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Console',
  data () {
    return {
      activeIndex: '/article/index'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.activeIndex = keyPath
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu-item {
  margin-right: 16px !important;
  padding: 0 !important;
}
.el-menu {
  border-bottom: none !important;
}
</style>
