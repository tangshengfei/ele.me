import Vue from 'vue';
import App from "./App";

import routes from './routes';
import VueRouter from "vue-router";

import Vuex from "vuex";
import store from "./store";

import FastClick from "fastclick";
Vue.config.productionTip = false;

document.addEventListener("DOMContentLoaded", function(event) {
  new FastClick(document.body);
});

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  routes,
  // mode:'history'
});

window.app = new Vue({
  el: "#app",
	router,
  store,
  render: (h) => h(App),
  watch: {
      '$route' (to, from){
          this.transitionName = to.path.split('/').length < from.path.split('/').length ? 'slide-right' : 'slide-left';
      }
  }
});
