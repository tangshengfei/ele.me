import Vue from 'vue';
import App from "./App";

import routes from './routes';
import VueRouter from "vue-router";

import Vuex from "vuex";
import store from "./store";

import { routerMode } from "./common/env";
import "./plugins/svg";
import FastClick from "fastclick";
Vue.config.productionTip = false;

document.addEventListener("DOMContentLoaded", function(event) {
  new FastClick(document.body);
});

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  routes,
  mode:'hash'
});

window.app = new Vue({
  el: "#app",
	router,
  store,
  render: (h) => h(App)
});