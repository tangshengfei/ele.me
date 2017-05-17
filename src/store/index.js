import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from "./action";
import * as getters from "./getters";
import * as mutations from "./mutations";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    strict:debug,
    mutations,
    actions
});
