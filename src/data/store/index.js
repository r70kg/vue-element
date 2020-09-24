import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

Vue.use(Vuex)

import getters from './getters'
import modules from './modules/index'

const store = new Vuex.Store({
    modules:{
        ...modules
    },
    getters,
    plugins: [vuexLocal.plugin]
})

export default store