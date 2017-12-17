import Vue from 'vue';
import Router from 'vue-router';
import VegapieHome from '@/components/VegapieHome';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VegapieHome',
      component: VegapieHome,
    },
  ],
});
