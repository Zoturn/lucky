<template>
  <div class="header_stats">
    <div class="header_stats_item">
      Online
      <span>528</span>
    </div>
    <div class="header_stats_item">
      Rolls Today
      <span>2,689</span>
    </div>
    <div class="header_stats_item">
      Won Today
      <span>193.786034 ETH</span>
    </div>
    <div class="header_stats_item">
      Jackpot
      <span>10.088130 ETH</span>
    </div>
  </div>
</template>

<script>
  if (screen.width < 768) {
    $(document).ready(function () {
      $('.header_stats').slick({});
    });
  }

    export default {
        name: "MainComponentHeader"
    }
</script>

<style scoped>

</style>
