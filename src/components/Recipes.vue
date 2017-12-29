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
          <b>{{recipe.title}}</b> - <i>{{recipe.contributor}} {{recipe.isHovering}}</i>
        </div>
        <div>
          <!--<img src="img/webicons-master/webicons/webicon-android.png">-->
          <span>{{recipe.description}}</span>
        </div>

        <b-button type="button"
                  :v-show="recipe.isHovering"
                  :to="{ name: 'Recipe', params: { recipeId: recipe.id } }">
          See Full Recipe
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import * as Fuse from 'fuse.js';
import { every, filter, sortBy } from 'lodash';
import { recipeData } from '../services/recipeData';

const searchOptions = {
  shouldSort: true,
  threshold: 0.5,
  minMatchCharLength: 1,
  keys: [
    'title',
    'description',
    'ingredients',
  ],
};

export default {
  name: 'Recipes',
  data() {
    return {
      isHovering: false,
      categories: recipeData.getCategories(),
    };
  },
  computed: {
    recipes() {
      return this.$store.default.state.recipes;
    },
    allRecipes() {
      return this.$store.default.state.allRecipes;
    },
    selectedCategories: {
      get() {
        return this.$store.default.state.selectedCategories;
      },
      set(newVal) {
        this.$store.default.commit('setSelectedCategories', newVal);
      },
    },
    searchText: {
      get() {
        return this.$store.default.state.searchText;
      },
      set(newVal) {
        this.$store.default.commit('setSearchText', newVal);
      },
    },
    isVegetarian: {
      get() {
        return this.$store.default.state.isVegetarian;
      },
      set(newVal) {
        this.$store.default.commit('setIsVegetarian', newVal);
      },
    },
  },
  methods: {
    setHovering(id, isHovering) {
      // TODO: try $set?
      const hovered = this.recipes.find(recipe => recipe.id === id);
      hovered.isHovering = isHovering;
      this.isHovering = isHovering;
    },
    getIsHovering(recipe) {
      return recipe.isHovering;
    },
    filterRecipes() {
      /* eslint-disable */
      let recipes = filter(this.allRecipes, (recipe) => {
        /* eslint-disable */
        return every(this.selectedCategories, (category) => {
          return recipe.categories.includes(category);
        });
      });

      if (this.isVegetarian) {
        recipes = filter(recipes, { isVegetarian: this.isVegetarian });
      }

      recipes = sortBy(recipes, 'title');

      this.$store.default.commit('setRecipes', recipes);
    },
    searchRecipes() {
      this.filterRecipes();
      const fuse = new Fuse(this.recipes, searchOptions);
      if (this.searchText.length) {
        this.$store.default.commit('setRecipes', fuse.search(this.searchText));
        // this.recipes = fuse.search(this.searchText);
      }
    },
    navigateTo(recipeId) {
      console.log(recipeId);
    }
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
    position: relative;
    left: 150px; /*same as categories width*/
    width: calc(100% - 150px);
  }

  .recipes-view .all-recipes input {
    width: 100%;
  }

  .recipe-preview {
    padding: 5px 0;
  }
</style>
