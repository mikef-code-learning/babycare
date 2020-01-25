const state = {
    authed: false,
}

const getters = {
    authed: state => state.authed
}

const mutations = {
    authed(bool) {
        state.authed = bool
    }
}

const actions = {

}

export let main = {
    namespaced: false,
    state,
    getters,
    mutations,
    actions
}