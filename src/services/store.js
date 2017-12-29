import Vue from 'vue';
import Vuex from 'vuex';
import { recipeData } from './recipeData';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recipes: [],
    allRecipes: [],
    selectedCategories: [],
    searchText: '',
    isVegetarian: false,
  },
  mutations: {
    FETCH_RECIPES(state, recipes) {
      state.recipes = recipes;
      state.allRecipes = recipes;
    },
    addRecipe(state, recipe) {
      state.allRecipes.push(recipe);
    },
    setRecipes(state, recipes) {
      state.recipes = recipes;
    },
    setSelectedCategories(state, selectedCategories) {
      state.selectedCategories = selectedCategories;
    },
    setSearchText(state, searchText) {
      state.searchText = searchText;
    },
    setIsVegetarian(state, isVegetarian) {
      state.isVegetarian = isVegetarian;
    },
  },
});

recipeData.getRecipes().then((recipes) => {
  store.commit('FETCH_RECIPES', recipes);
});

export default store;
