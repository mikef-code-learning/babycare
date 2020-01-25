import Vue from 'vue'
import VueX from 'vuex'
import VueRouter from 'vue-router'
import Swal from 'vue-sweetalert2'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueX)
Vue.use(VueRouter)
Vue.use(Swal)

new Vue({
  render: h => h(App),
}).$mount('#app')
