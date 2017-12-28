<template>
  <div class="recipes-view">
    <div class="categories">
      <div v-for="category in categories"
           @click="filterByCategory">
          <label>
              <input type="checkbox" 
                     :v-model="selectedCategories[category.value]">
                {{category.display}}
          </label>
        </div>

        <!--TODO: put divider between other categories and vegetarian flag-->

        <label>
          <input type="checkbox" 
                 :v-model="isVegetarian"
                 @click="filterVegetarian">
          Vegetarian
        </label>
    </div>

    <div class="all-recipes">
      <input type="text"
             placeholder="Search..."
             v-model="searchText">
             <!--ng-change="ctrl.searchRecipes()">-->

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
import { recipeData } from '../services/recipeData';

export default {
  name: 'Recipes',
  data() {
    return {
      isHovering: false,
      setHovering: (id, isHovering) => {
        const hovered = this.recipes.find(recipe => recipe.id === id);
        hovered.isHovering = isHovering;
        this.isHovering = isHovering;
      },
      getIsHovering: (recipe) => {
        console.log(recipe.isHovering);
        return recipe.isHovering;
      },
      isVegetarian: false,
      searchText: '',
      categories: recipeData.getCategories(),
      recipes: recipeData.getRecipes(),
      selectedCategories: {},
      filterByCategory: () => {},
      filterVegetarian: () => {},
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .recipes-view {
    display: flex;
  }

  .recipes-view .categories {
    width: 20%;
    position: fixed;
    width: 150px;
  }

  .recipes-view .all-recipes {
    width: 80%;
    position: relative;
    left: 150px; /*same as categories width*/
  }

  .recipes-view .all-recipes input {
    width: 100%;
  }
</style>
