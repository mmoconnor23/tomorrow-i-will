<template>
  <div id="app">
    <b-navbar class="app-navbar"
              toggleable="md"
              type="dark"
              variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand to="/home">My Family Recipe</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item v-for="tab in tabs"
                      :key="tab.route"
                      :to="tab.route">
            {{tab.title}}
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <!--<b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>-->
            <!--<b-button size="sm" class="my-2 my-sm-0" type="submit">Add Recipe</b-button>-->
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view class="app-content"/>

    <!--<b-btn id="add-popover" variant="primary">+</b-btn>
    <b-popover ref="add-recipe-popover" style="width: 300px" target="add-popover">
        <template slot="title">Add a Recipe</template>
        <add-recipe></add-recipe>
    </b-popover>-->
  </div>
</template>

<script>
import AddRecipe from '@/components/AddRecipe';

export default {
  name: 'app',
  components: { AddRecipe },
  data() {
    return {
      tabs: [
        {
          title: 'Home',
          route: '/home',
        }, {
          title: 'Recipes',
          route: '/recipes',
        }, {
          title: 'About',
          route: '/about',
        }, {
          title: 'Add Recipe',
          route: '/addRecipe',
        },
      ],
    };
  },
};
</script>

<style>
body {
  background: lightcyan;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.app-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.app-content {
  position: absolute;
  top: 56px;
  left: 0;
  right: 0;
  margin: 10px;
}
</style>
