import Vue from 'vue'
import VueRouter from 'vue-router'
import Moments from '../views/moment/Moments'
import Articles from '../views/article/Articles'
import Tags from '../views/tag/Tags'
import Categories from '../views/category/Categories'
import BlackIps from '../views/blackip/BlackIps'
import Login from '../views/Login.vue'
import Files from '../views/files/Files'
import Config from '../views/configs/Config'

Vue.use(VueRouter)

const routes = [
  {
    path: '/console/articles',
    name: 'Articles',
    component: Articles
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
  },
  {
    path: '*',
    redirect: '/console/articles'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
