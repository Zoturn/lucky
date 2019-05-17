<template>
  <div class="choose_game">
    <h1>
      Fair Online Games
    </h1>
    <p>
      Provably fair open source Ethereum games. Flat house edge of 1%.
      Start playing now, without deposits or signups.
    </p>
    <div class="secondary_button">
      Learn More
    </div>
    <div class="games_list">
      <router-link to="/flip_coin">
        <div class="game flip_a_coin">
          <span>Flip a Coin</span>
          <img src="../../../../static/img/game-flip-a-coin.svg" alt="Flip a Coin">
        </div>
      </router-link>
      <router-link to="/">
        <div class="game dice_roll">
          <span>Dice Roll</span>
          <img src="../../../../static/img/game-dice.svg" alt="Dice Roll">
        </div>
      </router-link>
      <router-link to="/">
        <div class="game big_wheel">
          <span>Big Wheel</span>
          <img src="../../../../static/img/game-big-wheel.svg" alt="Big Wheel">
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MainComponentChooseGame"
  }
</script>

<style scoped>

</style>
