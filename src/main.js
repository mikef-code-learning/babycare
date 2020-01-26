import Vue from 'vue'
import VueX from 'vuex'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import Swal from 'sweetalert2'
// import VueSwal from 'vue-sweetalert2'
import Axios from 'axios'
import App from './App.vue'
import store from './store/store.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(VueX)
Vue.use(VueRouter)
Vue.use(Axios)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// Vue.use(Swal)
// Vue.use(VueSwal)

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
