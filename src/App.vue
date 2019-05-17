<template>
  <div id="app">
    <header-component/>
    <router-view/>
    <footer-component/>
  </div>
</template>

<script>
  import HeaderComponent from "./components/HeaderComponent/index";
  import FooterComponent from "./components/FooterComponent/index";

  export default {
    name: 'App',
    components: {FooterComponent, HeaderComponent}
  }
</script>

<style lang="scss">
  @import "/styles/general";
</style>
