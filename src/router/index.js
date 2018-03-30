import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Day from '@/components/Day';

Vue.use(Router);

export default new Router({
  base: __dirname,
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
    }, {
      path: '/day/:date',
      name: 'Day',
      component: Day,
    }, {
      path: '*',
      redirect: '/home',
    },
  ],
});
