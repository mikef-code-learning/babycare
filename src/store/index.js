import Vue from 'vue'
import VueX from 'vuex'
import main from './modules/main.js'

Vue.use(VueX)

export default new VueX.store({
    modules: {
        main
    },
})