<template>
  <div class="header">
    <div class="logo_menu_lang">
      <router-link to="/">
        <img v-if="!mobile || open" src="../../../static/img/the-lucky-roll-logo.svg" alt="TheLuckyRoll logo">
        <img v-if="mobile && !open" src="../../../static/img/the-lucky-roll-logo-375.svg" alt="TheLuckyRoll logo"></router-link>

      <div :class="{open: open}" class="menu_lang">
        <div v-if="mobile" class="menu_button" @click="open=!open">
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div :class="{mobile: mobile}" class="menu">
          <a class="menu_item" href="">About</a>
          <a class="menu_item" href="">Stats</a>
          <a class="menu_item" href="">FAQ</a>
          <a class="menu_item" href="">Smart Contract</a>
        </div>
        <div class="lang">
          <label :class="{active: lang==='eng'}">
            EN
            <input type="radio" value="eng" v-model="lang">
          </label>
          <label :class="{active: lang==='cn'}">
            CN
            <input value="cn" type="radio" v-model="lang">
          </label>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "HeaderComponent",
    data () {
      return {
        lang: 'eng',
        mobile: false,
        open: false,
      }
    },
    mounted () {
      if (screen.width < 768){
        this.mobile = true
      }
    }
  }
</script>

<style scoped>

</style>
