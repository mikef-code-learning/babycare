import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

export default new VueX.Store({
    state: {
        authed: false,
    },
    getters: {
        authed: state => state.authed
    },
    mutations: {
        authed(state, bool) {
            state.authed = bool
        }
    },
    actions: {}
})