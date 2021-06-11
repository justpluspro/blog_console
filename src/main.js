import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './../node_modules/@tabler/core/dist/css/tabler.min.css'
import './../node_modules/@tabler/core/dist/js/tabler.min.js'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
