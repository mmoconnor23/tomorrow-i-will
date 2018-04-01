<template>
  <div>
    Hello, {{userInfo.username}}!
  </div>
</template>

<script>
import { appState } from '../services/appState';

/* eslint-disable */
export default {
  name: 'Profile',
  data() {
    const userInfo = appState.getUserInfo();

    return {
      userInfo
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
