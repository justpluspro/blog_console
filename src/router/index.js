import Vue from 'vue'
import VueRouter from 'vue-router'
import Console from '../views/Console'
import Error from '../views/404'
import { getToken } from '../util/cookie'

Vue.use(VueRouter)

const routes = [
  {
    path: '/console',
    component: Console,
    redirect: '/article/index',
    children: [
      {
        // 文章列表
        path: '/article/index',
        name: 'Articles',
        component: () => import('../views/article/Articles')
      },
      {
        // 创建文章
        path: '/article/create',
        name: 'Article',
        component: () => import('../views/article/Article')
      },
      {
        // 修改文章
        path: '/article/:id/edit',
        name: 'Article',
        component: () => import('../views/article/Article')
      },
      {
        // 标签列表
        path: '/tag/index',
        name: 'Tags',
        component: () => import('../views/tag/Tags')
      },
      {
        // 动态列表
        path: '/moment/index',
        name: 'Moments',
        component: () => import('../views/moment/Moments')
      },
      {
        // 评论列表
        path: '/comment/index',
        name: 'Comments',
        component: () => import('../views/comment/Comments')
      },
      {
        // 编辑动态
        path: '/moment/:id/edit',
        name: 'Moment',
        component: () => import('../views/moment/Moment')
      },
      {
        // 创建动态
        path: '/moment/create',
        name: 'Moment',
        component: () => import('../views/moment/Moment')
      },
      {
        // 分类列表
        path: '/category/index',
        name: 'Categories',
        component: () => import('../views/category/Categories')
      },
      {
        // 文件列表
        path: '/file/index',
        name: 'Files',
        component: () => import('../views/files/Files')
      },
      {
        // 黑名单列表
        path: '/blackip/index',
        name: 'BlackIps',
        component: () => import('../views/blackip/BlackIps')
      },
      {
        // 配置列表
        path: '/config/index',
        name: 'Config',
        component: () => import('../views/configs/Config')
      },
      {
        // 配置列表
        path: '/template/index',
        name: 'Template',
        component: () => import('../views/template/Template')
      }
    ]
  },
  {
    // 登录页面
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    // 其他页面
    path: '*',
    name: '404',
    component: Error
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
