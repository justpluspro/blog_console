import Vue from 'vue'
import VueRouter from 'vue-router'
import Moments from '../views/moment/Moments'
import Moment from '../views/moment/Moment'
import Articles from '../views/article/Articles'
import Tags from '../views/tag/Tags'
import Categories from '../views/category/Categories'
import BlackIps from '../views/blackip/BlackIps'
import Login from '../views/Login.vue'
import Files from '../views/files/Files'
import Config from '../views/configs/Config'
import Console from '../views/Console'
import Error from '../views/404'
import NewArticle from '../views/article/NewArticle'
import Comments from '../views/comment/Comments'
import { getToken } from '../util/cookie'
import MomentEdit from '../views/moment/MomentEdit'

Vue.use(VueRouter)

const routes = [
  {
    path: '/console',
    component: Console,
    children: [
      {
        // 文章列表
        path: '/article/index',
        name: 'Articles',
        component: Articles
      },
      {
        // 创建文章
        path: '/article/create',
        name: 'NewArticle',
        component: NewArticle
      },
      {
        // 标签列表
        path: '/tag/index',
        name: 'Tags',
        component: Tags
      },
      {
        // 动态列表
        path: '/moment/index',
        name: 'Moments',
        component: Moments
      },
      {
        // 评论列表
        path: '/comment/index',
        name: 'Comments',
        component: Comments
      },
      {
        // 编辑动态
        path: '/moment/:id/edit',
        name: 'MomentEdit',
        component: MomentEdit
      },
      {
        // 创建动态
        path: '/moment/create',
        name: 'Moment',
        component: Moment
      },
      {
        // 分类列表
        path: '/category/index',
        name: 'Categories',
        component: Categories
      },
      {
        // 文件列表
        path: '/file/index',
        name: 'Files',
        component: Files
      },
      {
        // 黑名单列表
        path: '/blackip/index',
        name: 'BlackIps',
        component: BlackIps
      },
      {
        // 配置列表
        path: '/config/index',
        name: 'Config',
        component: Config
      }
    ]
  },
  {
    // 登录页面
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    // 其他页面
    path: '*',
    name: '404',
    component: Error,
    redirect: Login
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

/**
 * 路由守卫
 */
router.beforeEach((to, from, next) => {
  const requestUri = to.path
  if (requestUri !== '/login') {
    const token = getToken('x-auth-token')
    if (token == null || token === '') {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
