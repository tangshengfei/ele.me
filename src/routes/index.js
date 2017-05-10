import Vue from 'vue';
import Home from '@/page/Home.vue';
import App from '@/App';

export default [{
  path: '/',
  component: App,
  children: [
    {
      path: '',
      redirect: '/home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    }
  ]
}];
