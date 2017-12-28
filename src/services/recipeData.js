class RecipeData {
  constructor() {
    this.categories = [
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
    ];

    // TODO: add familyId
    this.recipes = [
      {
        title: 'Spinach and Artichoke Dip',
        contributor: 'Melissa O\'Connor',
        steps: ['Step 1', 'Step 2', 'Step 3'],
        ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
        pictures: ['img1', 'img2'],
        categories: ['appetizer'],
        isVegetarian: true,
        id: '0',
        description: 'This is a sample recipe. I will use it to test the styling of the display page.',
      }, {
        title: 'Cupcakes',
        contributor: 'Melissa O\'Connor',
        steps: ['Step 1', 'Step 2', 'Step 3'],
        ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
        pictures: ['img1', 'img2'],
        categories: ['dessert'],
        isVegetarian: true,
        id: '1',
        description: 'This is a sample recipe. I will use it to test the styling of the display page.',
      }, {
        title: 'Green (Creamed Spinach) Noodles',
        contributor: 'Melissa O\'Connor',
        steps: ['Step 1', 'Step 2', 'Step 3'],
        ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
        pictures: ['img1', 'img2'],
        categories: ['entree', 'pasta'],
        isVegetarian: true,
        id: '2',
        description: 'This is a sample recipe. I will use it to test the styling of the display page.',
      }, {
        title: 'Cauliflower Soup',
        contributor: 'Melissa O\'Connor',
        steps: ['Step 1', 'Step 2', 'Step 3'],
        ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
        pictures: ['img1', 'img2'],
        categories: ['soup'],
        isVegetarian: false,
        id: '3',
        description: 'This is a sample recipe. I will use it to test the styling of the display page.',
      }, {
        title: 'Mexican-Style Zucchini Casserole',
        contributor: 'Melissa O\'Connor',
        steps: ['Step 1', 'Step 2', 'Step 3'],
        ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
        pictures: ['img1', 'img2'],
        categories: ['entree', 'casserole'],
        isVegetarian: false,
        id: '4',
        description: 'This is a sample recipe. I will use it to test the styling of the display page.',
      }, {
        title: 'Tomato, Mozzarella & Pesto Sandwich',
        contributor: 'Melissa O\'Connor',
        steps: ['Step 1', 'Step 2', 'Step 3'],
        ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
        pictures: ['img1', 'img2'],
        categories: ['entree', 'sandwich'],
        isVegetarian: false,
        id: '5',
        description: 'This is a sample recipe. I will use it to test the styling of the display page.',
      }, {
        title: 'Grilled Cheese Sandwich',
        contributor: 'Melissa O\'Connor',
        steps: ['Step 1', 'Step 2', 'Step 3'],
        ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
        pictures: ['img1', 'img2'],
        categories: ['entree', 'sandwich'],
        isVegetarian: false,
        id: '6',
        description: 'This is a sample recipe. I will use it to test the styling of the display page.',
      },
    ];
  }

  getCategories() {
    return this.categories;
  }

  getRecipes() {
    return Promise.resolve(this.recipes);
  }
}

/* eslint-disable */
export let recipeData = new RecipeData();
