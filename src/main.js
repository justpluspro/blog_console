import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './../node_modules/bootstrap-icons/font/bootstrap-icons.css'
// import Swal from 'sweetalert2'
Vue.config.productionTip = false
// Vue.use(Swal)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
