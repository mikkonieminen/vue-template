<template>
  <div id="app">
    <navigation></navigation>
    <router-view class="container-fluid wrapper"></router-view>
  </div>
</template>


<script>
import Navigation from './components/Navigation';
import Home from './components/Home';

export default {
  name: 'app',
  components: {
    Navigation,
    Home,
  },
};
</script>

<style lang="scss">
  $icon-font-path: "../node_modules/bootstrap-sass/assets/fonts/bootstrap/";
  @import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap';

  .wrapper {
    margin-top: $navbar-height;
  }
</style>