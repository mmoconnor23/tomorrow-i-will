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
// import RecipeData from '@services/recipeData';

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
      categories: [
        {
          display: 'Appetizer',
          value: 'appetizer',
        }, {
          display: 'Dessert',
          value: 'dessert',
        }, {
          display: 'Pasta',
          value: 'pasta',
        }, {
          display: 'Soup',
          value: 'soup',
        }, {
          display: 'Casserole',
          value: 'casserole',
        }, {
          display: 'Sandwich',
          value: 'sandwich',
        }, {
          display: 'Entree (other)',
          value: 'entree',
        },
      ],
      recipes: [{
        title: 'Sample Recipe Title 0',
        contributor: 'Melissa O\'Connor',
        steps: ['Step 1', 'Step 2', 'Step 3'],
        ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
        pictures: ['img1', 'img2'],
        categories: ['appetizer'],
        isVegetarian: true,
        id: '0',
        description: 'This is a sample recipe. I will use it to test the styling of the display page.',
      }, {
        title: 'Sample Recipe Title 1',
        contributor: 'Melissa O\'Connor',
        steps: ['Step 1', 'Step 2', 'Step 3'],
        ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
        pictures: ['img1', 'img2'],
        categories: ['dessert'],
        isVegetarian: true,
        id: '1',
        description: 'This is a sample recipe. I will use it to test the styling of the display page.',
      }, {
        title: 'Sample Recipe Title 2',
        contributor: 'Melissa O\'Connor',
        steps: ['Step 1', 'Step 2', 'Step 3'],
        ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
        pictures: ['img1', 'img2'],
        categories: ['entree', 'pasta'],
        isVegetarian: true,
        id: '2',
        description: 'This is a sample recipe. I will use it to test the styling of the display page.',
      }, {
        title: 'Sample Recipe Title 3',
        contributor: 'Melissa O\'Connor',
        steps: ['Step 1', 'Step 2', 'Step 3'],
        ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
        pictures: ['img1', 'img2'],
        categories: ['soup'],
        isVegetarian: false,
        id: '3',
        description: 'This is a sample recipe. I will use it to test the styling of the display page.',
      }, {
        title: 'Sample Recipe Title 4',
        contributor: 'Melissa O\'Connor',
        steps: ['Step 1', 'Step 2', 'Step 3'],
        ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
        pictures: ['img1', 'img2'],
        categories: ['entree', 'casserole'],
        isVegetarian: false,
        id: '4',
        description: 'This is a sample recipe. I will use it to test the styling of the display page.',
      }, {
        title: 'Sample Recipe Title 5',
        contributor: 'Melissa O\'Connor',
        steps: ['Step 1', 'Step 2', 'Step 3'],
        ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
        pictures: ['img1', 'img2'],
        categories: ['entree', 'sandwich'],
        isVegetarian: false,
        id: '5',
        description: 'This is a sample recipe. I will use it to test the styling of the display page.',
      }, {
        title: 'Sample Recipe Title 6',
        contributor: 'Melissa O\'Connor',
        steps: ['Step 1', 'Step 2', 'Step 3'],
        ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
        pictures: ['img1', 'img2'],
        categories: ['entree', 'sandwich'],
        isVegetarian: false,
        id: '6',
        description: 'This is a sample recipe. I will use it to test the styling of the display page.',
      }],
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
