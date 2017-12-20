export default class RecipeData {
  constructor() {
  
  }

  getCategories() {
    return [
      {
        display: 'Appetizer',
        value: 'appetizer'
      }, {
        display: 'Dessert',
        value: 'dessert'
      }, {
        display: 'Pasta',
        value: 'pasta'
      }, {
        display: 'Soup',
        value: 'soup'
      }, {
        display: 'Casserole',
        value: 'casserole'
      }, {
        display: 'Sandwich',
        value: 'sandwich'
      }, {
        display: 'Entree (other)',
        value: 'entree'
      }
    ];
  }
}