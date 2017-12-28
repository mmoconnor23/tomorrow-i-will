<template>
  <div class="recipes-view">
    <div class="categories">
      <div v-for="category in categories">
        <label>
            <input type="checkbox"
                   :value="category.value"
                   v-model="selectedCategories"
                   @change="filterRecipes">
              {{category.display}}
        </label>
      </div>
      <hr/>
      <label>
        <input type="checkbox"
                v-model="isVegetarian"
                @change="filterRecipes">
        Vegetarian?
      </label>
    </div>

    <div class="all-recipes">
      <input type="text"
             placeholder="Search..."
             v-model="searchText"
             @keyup="searchRecipes">

      <div class="recipe-preview"
           v-for="recipe in recipes"
           @mouseenter="setHovering(recipe.id, true)"
           @mouseleave="setHovering(recipe.id, false)">
        <div>
          <b>{{recipe.title}}</b> - <i>{{recipe.contributor}}</i>
        </div>
        <div>
          <!--<img src="img/webicons-master/webicons/webicon-android.png">-->
          <span>{{recipe.description}}</span>
        </div>

        <button type="button"
                :v-show="isHovering"
                class="btn btn-primary">
                <!--@click="switchViewTo(recipe.id)">-->
          See Full Recipe
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { cloneDeep, every, filter, sortBy } from 'lodash';
import { recipeData } from '../services/recipeData';

let myRecipes = [];
let allRecipes = [];

recipeData.getRecipes().then((recipes) => {
  allRecipes = cloneDeep(recipes);
  myRecipes = allRecipes;
  this.recipes = allRecipes; // FIXME: figure out an elegant way to do this
});

export default {
  name: 'Recipes',
  data() {
    return {
      isHovering: false,
      isVegetarian: false,
      searchText: '',
      categories: recipeData.getCategories(),
      recipes: myRecipes,
      selectedCategories: [],
    };
  },
  methods: {
    setHovering(id, isHovering) {
      const hovered = this.recipes.find(recipe => recipe.id === id);
      hovered.isHovering = isHovering;
      this.isHovering = isHovering;
    },
    getIsHovering(recipe) {
      return recipe.isHovering;
    },
    filterRecipes() {
      /* eslint-disable */
      this.recipes = filter(allRecipes, (recipe) => {
        /* eslint-disable */
        return every(this.selectedCategories, (category) => {
          return recipe.categories.includes(category);
        });
      });

      if (this.isVegetarian) {
        this.recipes = filter(this.recipes, { isVegetarian: this.isVegetarian });
      }

      this.recipes = sortBy(this.recipes, 'title');
    },
    searchRecipes() {
      this.filterRecipes();
      if (this.searchText.length) {
        this.recipes = _.filter(this.recipes, (recipe) => {
          return recipe.title.toLowerCase().includes(this.searchText.toLowerCase());
        });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .recipes-view {
    display: flex;
  }

  .recipes-view .categories {
    position: fixed;
    width: 150px;
    padding-right: 10px;
  }

  .recipes-view .all-recipes {
    position: absolute;
    left: 150px; /*same as categories width*/
    right: 10px;
  }

  .recipes-view .all-recipes input {
    width: 100%;
  }
</style>
