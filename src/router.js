import Vue from 'vue';
import Router from 'vue-router';

import Login from './pages/Login.vue';
import Home from './pages/Home.vue';

Vue.use(Router);

const routes = [
  {
    path: '*',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
];

export default new Router({
  routes
});
