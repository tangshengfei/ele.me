import Vue from 'vue';
import App from "./App";
import routes from './routes';
import VueRouter from "vue-router";
import FastClick from "fastclick";
import './plugins/meta';
Vue.config.productionTip = false;

document.addEventListener("DOMContentLoaded", function(event) {
  new FastClick(document.body);
});

// console.log(fix);

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode:'history'
});

new Vue({
  el: "#app",
	router,
  render: (h) => h(App)
});

