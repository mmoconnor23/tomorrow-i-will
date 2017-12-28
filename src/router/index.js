import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import Recipes from '@/components/Recipes';
import Recipe from '@/components/Recipe';
import AddRecipe from '@/components/AddRecipe';

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
    }, {
      path: '/recipe/:recipeId',
      name: 'Recipe',
      component: Recipe,
    }, {
      path: '/addRecipe',
      name: 'Add Recipe',
      component: AddRecipe,
    }, {
      path: '*',
      redirect: '/home',
    },
  ],
});
