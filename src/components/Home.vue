<template>
  <div class="hello">
    <!--Sign In-->
    <!--<div class="g-signin2" data-onsuccess="onSignIn"></div>-->
    <input id="task-input"
           v-model="userName"
           placeholder="username"
           @keyup.enter="logIn">
    <b-button @click="logIn"
              to="day">
      Log In
    </b-button>
  </div>
</template>

<script>
import router from '../router';
import { appState } from '../services/appState';

/* eslint-disable */
export default {
  name: 'Home',
  data() {
    return {
      tabs: [],
      userName: '',
      logIn: () => {
        appState.onLogIn({username: this.userName});
        router.push('day');
      },
      onSignIn: (googleUser) => {
        const profile = googleUser.getBasicProfile();
        console.log(`ID: ${profile.getId()}`); // Do not send to your backend! Use an ID token instead.
        console.log(`Name: ${profile.getName()}`);
        console.log(`Image URL: ${profile.getImageUrl()}`);
        console.log(`Email: ${profile.getEmail()}`); // This is null if the 'email' scope is not present.
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
