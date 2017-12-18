import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import Recipes from '@/components/Recipes';

Vue.use(Router);

export default new Router({
  base: __dirname,
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
    }, {
      path: '/about',
      name: 'About',
      component: About,
    }, {
      path: '/recipes',
      name: 'Recipes',
      component: Recipes,
    },
  ],
});
