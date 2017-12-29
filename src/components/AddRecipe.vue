<template>
  <div class="add-recipe-form">
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="contributor-group"
                    label="Contributor:"
                    label-for="contributor-form"
                    description="The person who originally created this recipe">
        <b-form-input id="contributor-form"
                      type="text"
                      v-model="form.contributor"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="title-group"
                    label="Title:"
                    label-for="title-form">
        <b-form-input id="title-form"
                      type="text"
                      v-model="form.title"
                      required
                      placeholder="Enter recipe name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Your Name:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="ingredients-group"
                    label="Ingredients:"
                    label-for="ingredients-form">
        <b-form-textarea id="ingredients-form"
                         v-model="form.ingredients"
                         placeholder="Enter the list of ingredients"
                         :rows="3"
                         :max-rows="10">
        </b-form-textarea>
      </b-form-group>
      <b-form-group id="steps-group"
                    label="Steps:"
                    label-for="steps-form">
        <b-form-textarea id="steps-form"
                         v-model="form.steps"
                         placeholder="Enter the list of steps"
                         :rows="3"
                         :max-rows="10">
        </b-form-textarea>
      </b-form-group>
      <b-form-group id="description-group"
                    label="Description:"
                    label-for="description-form">
        <b-form-textarea id="description-form"
                         v-model="form.description"
                         placeholder="Enter a description"
                         :rows="3"
                         :max-rows="10">
        </b-form-textarea>
      </b-form-group>
      <b-form-group id="category-group"
                    label="Category:"
                    label-for="category-form">
        <b-form-select multiple 
                       :select-size="4" 
                       v-model="form.categories" 
                       :options="categoryOptions" 
                       class="mb-3">
        </b-form-select>
      </b-form-group>
      <b-form-group id="vegetarian-group">
        <b-form-checkbox value="form.isVegetarian">Vegetarian?</b-form-checkbox>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import * as axios from 'axios';
import { recipeData } from '../services/recipeData';

const categoryOptions = recipeData.getCategories().map(category => category.display);

const startingForm = {
  categories: [],
};

export default {
  name: 'AddRecipe',
  data() {
    return {
      onSubmit: (e) => {
        e.preventDefault();

        // FIXME: close popover after submission
        // this.$refs['add-recipe-popover'].$emit('close');

        axios.post('https://vegapie-recipe-server.herokuapp.com/addRecipe', {
          params: this.form,
        })
        .then((response) => {
          this.$toasted.success(`success ${response.data}`, {
            theme: 'bubble',
            position: 'bottom-right',
            duration: 5000,
            action: {
              text: 'Dismiss',
              onClick: (evt, toastObject) => {
                toastObject.goAway(0);
              },
            },
          });
        })
        .catch((error) => {
          this.$toasted.error(`failure ${error}`, {
            theme: 'bubble',
            position: 'bottom-right',
            duration: 5000,
            action: {
              text: 'Dismiss',
              onClick: (evt, toastObject) => {
                toastObject.goAway(0);
              },
            },
          });
        });
      },
      onReset: (e) => {
        e.preventDefault();
        this.form = Object.assign({}, startingForm);
      },
      form: Object.assign({}, startingForm),
      categoryOptions,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*.add-recipe-form {
    width: 300px;
  }*/
</style>
