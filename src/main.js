import Vue from 'vue';
import routes from './routes';
import './plugins/rem';
import VueRouter from "vue-router";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode:'hash'
});
new Vue({
	router
}).$mount("#app");

