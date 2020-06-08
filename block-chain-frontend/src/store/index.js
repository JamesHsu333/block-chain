import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
import user from './modules/user';
import record from './modules/record'
import patient from './modules/patient'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        record,
        user,
        patient
    },
    getters
})
export default store