<template>
  <div>
    <b-button type="button"
              to="/recipes"
              variant="primary">
      Back to All Recipes
    </b-button>
    <h2>{{recipe.title}}</h2>
    <h4>{{recipe.description}}</h4>

    <b-button v-for="category in recipe.categories"
              :key="category"
              size="sm"
              class="btn-category">
      <!--TODO: link these to a search by that category-->
      {{category}}
    </b-button>

    <div class="ingredients">
      Ingredients
      <ol>
        <li v-for="ingredient in recipe.ingredients">
          {{ingredient}}
        </li>
      </ol>
    </div>

    <div class="steps">
      Steps
      <ol>
        <li v-for="step in recipe.steps">
          {{step}}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import { find } from 'lodash';
import { recipeData } from '../services/recipeData';

export default {
  name: 'Recipe',
  data() {
    recipeData.getRecipes().then((recipes) => {
      this.recipes = recipes;
      this.recipe = find(this.recipes, { id: this.$route.params.recipeId });
    });

    return {
      recipe: {},
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-category {
  margin-right: 10px;
}
</style>
