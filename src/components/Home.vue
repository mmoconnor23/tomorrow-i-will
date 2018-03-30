<template>
  Sign In
  <div class="hello">
    <div class="g-signin2" data-onsuccess="onSignIn"></div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Home',
  data() {
    return {
      tabs: [],
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
