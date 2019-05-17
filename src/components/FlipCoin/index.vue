<template>
  <div class="flip_a_coin">
    <h2>Flip a Coin</h2>
    <div class="coin_type">
      <label :class="{active: coin_type === 'heads'}">
        <img src="../../../static/img/coin-head.svg" alt="heads">
        HEADS
        <input type="radio" value="heads" v-model="coin_type">
      </label>
      <span>OR</span>
      <label :class="{active: coin_type === 'tails'}">
        <img src="../../../static/img/coin-tails.svg" alt="tails">
        TAILS
        <input type="radio" value="tails" v-model="coin_type">
      </label>
    </div>
    <div class="bet_info">

    </div>
  </div>
</template>

<script>
  export default {
    name: "FlipCoin",
    data () {
      return {
        coin_type: 'heads',
      }
    },
    created() {
      if (typeof window.ethereum !== 'undefined') {
        this.data = "!!!!!!!!!!!"
      }
    }
  }
</script>

<style scoped>

</style>
