<template>
  <div class="main">
    <main-component-header/>
    <router-view class="main_content"/>
    <main-component-stats/>
  </div>
</template>

<script>
    import MainComponentHeader from "./components/MainComponentHeader";
    import MainComponentStats from "./components/MainComponentStats";
    export default {
        name: "MainComponent",
      components: {MainComponentStats, MainComponentHeader}
    }
</script>

<style scoped>

</style>
