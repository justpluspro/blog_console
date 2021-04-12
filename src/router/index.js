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

Vue.use(VueRouter)

const routes = [
  {
    path: '/console',
    component: Console,
    children: [
      {
        path: '/console/articles',
        name: 'Articles',
        component: Articles
      },
      {
        path: '/console/article/create',
        name: 'NewArticle',
        component: NewArticle
      },
      {
        path: '/console/tags',
        name: 'Tags',
        component: Tags
      },
      {
        path: '/console/moments',
        name: 'Moments',
        component: Moments
      },
      {
        path: '/console/comments',
        name: 'Comments',
        component: Comments
      },
      {
        path: '/console/moment/:id',
        name: 'Moment',
        component: Moment
      },
      {
        path: '/console/categories',
        name: 'Categories',
        component: Categories
      },
      {
        path: '/console/files',
        name: 'Files',
        component: Files
      },
      {
        path: '/console/blackips',
        name: 'BlackIps',
        component: BlackIps
      },
      {
        path: '/console/configs',
        name: 'Config',
        component: Config
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
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
// router.beforeEach((to, from, next) => {
//   console.log('router beforeEach: ' + to.path)
//   if (to.path === '/api/token' && !to.path.includes('/api')) {
//     const token = getToken('x-auth-token')
//     if (token === null || token === undefined || token === '') {
//       // 缺少 token 就跳转到 login
//       next('/login')
//     }
//   }
// })

export default router
