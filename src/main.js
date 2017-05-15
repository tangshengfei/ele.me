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

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode:'history'
});

new Vue({
  el: "#app",
	router,
  render: (h) => h(App),
  watch: {
      '$route' (to, from){
          this.transitionName = to.path.split('/').length < from.path.split('/').length ? 'slide-right' : 'slide-left';
      }
  }
});
