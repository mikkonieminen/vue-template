// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import Home from 'components/Home';
import App from './App';

window.jQuery = require('jquery');
require('bootstrap-sass');

Vue.use(VueRouter);
Vue.use(VueResource);

// Replace with your actual api base url and uncomment
// Vue.http.options.root = 'http://localhost:3000/api/v1';

const routes = [
  {
    path: '/',
    component: Home,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
