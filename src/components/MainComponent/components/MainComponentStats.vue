<template>
  <div class="main_stats">
    <div class="stats_nav">
      <label :class="{active: stat_list==='all_bets'}">
        All Bets
        <input type="radio" value="all_bets" v-model="stat_list">
      </label>
      <label :class="{active: stat_list==='my_bets'}">
        My Bets
        <input type="radio" value="my_bets" v-model="stat_list">
      </label>
      <label :class="{active: stat_list==='high_rollers'}">
        High Rollers
        <input type="radio" value="high_rollers" v-model="stat_list">
      </label>
      <label :class="{active: stat_list==='jackpots'}">
        Jackpots
        <input type="radio" value="jackpots" v-model="stat_list">
      </label>
    </div>
    <table class="stats-table">
      <tr>
        <th>Bet ID</th>
        <th v-if="!mobile">Time</th>
        <th>Game</th>
        <th v-if="!mobile">Bet</th>
        <th v-if="!mobile">Chance</th>
        <th v-if="!mobile">Payout</th>
        <th>Profit</th>
      </tr>
      <tr v-if="stat_list==='all_bets' && id < 20" v-for="(stats, id) in stats_all">
        <td>{{stats.id}}</td>
        <td v-if="!mobile">{{stats.time}}</td>
        <td>{{stats.game}}</td>
        <td v-if="!mobile" class="stats_bet">{{stats.bet}}</td>
        <td v-if="!mobile">{{stats.chance}}</td>
        <td v-if="!mobile">{{stats.payout}}</td>
        <td class="stats_profit" :class="{plus: stats.profit.includes('+')}">{{stats.profit}}</td>
      </tr>
      <tr v-if="stat_list==='my_bets' && id < 20" v-for="(stats, id) in stats_my">
        <td>{{stats.id}}</td>
        <td v-if="!mobile">{{stats.time}}</td>
        <td>{{stats.game}}</td>
        <td v-if="!mobile" class="stats_bet">{{stats.bet}}</td>
        <td v-if="!mobile">{{stats.chance}}</td>
        <td v-if="!mobile">{{stats.payout}}</td>
        <td class="stats_profit" :class="{plus: stats.profit.includes('+')}">{{stats.profit}}</td>
      </tr>
      <tr v-if="stat_list==='high_rollers' && id < 20" v-for="(stats, id) in stats_high">
        <td>{{stats.id}}</td>
        <td v-if="!mobile">{{stats.time}}</td>
        <td>{{stats.game}}</td>
        <td v-if="!mobile" class="stats_bet">{{stats.bet}}</td>
        <td v-if="!mobile">{{stats.chance}}</td>
        <td v-if="!mobile">{{stats.payout}}</td>
        <td class="stats_profit" :class="{plus: stats.profit.includes('+')}">{{stats.profit}}</td>
      </tr>
      <tr v-if="stat_list==='jackpots' && id < 20" v-for="(stats, id) in stats_jackpots">
        <td>{{stats.id}}</td>
        <td v-if="!mobile">{{stats.time}}</td>
        <td>{{stats.game}}</td>
        <td v-if="!mobile" class="stats_bet">{{stats.bet}}</td>
        <td v-if="!mobile">{{stats.chance}}</td>
        <td v-if="!mobile">{{stats.payout}}</td>
        <td class="stats_profit" :class="{plus: stats.profit.includes('+')}">{{stats.profit}}</td>
      </tr>
    </table>
    <div class="stats_info">
      <div class="stats_info_item">
        <img src="../../../../static/img/provable_fair.svg" alt="Provable Fair Games">
        <h4>Secure and Provable Fair Games</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div class="learn_more">Learn More</div>
      </div>
      <div class="stats_info_item">
        <img src="../../../../static/img/fully_anonymous.svg" alt="Fully Anonymous">
        <h4>Fully Anonymous</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div class="learn_more">Learn More</div>
      </div>
      <div class="stats_info_item">
        <img src="../../../../static/img/house_edge.svg" alt="Lowest House Edge">
        <h4>Lowest House Edge with Only 1%</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div class="learn_more">Learn More</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MainComponentStats",
    data() {
      return {
        stat_list: 'all_bets',
        mobile: false,
        stats_all: [
          {
            id: 'e8dd372dd7',
            time: '11:08:08',
            game: 'Flip a coin',
            bet: '0.05 ETH',
            chance: '50%',
            payout: '1.96x',
            profit: '+0.098 ETH',
          },
          {
            id: 'e8dd372dd7',
            time: '11:08:08',
            game: 'Dice',
            bet: '0.05 ETH',
            chance: '50%',
            payout: '1.96x',
            profit: '-0.098 ETH',
          },
          {
            id: 'e8dd372dd7',
            time: '11:08:08',
            game: 'Dice',
            bet: '0.05 ETH',
            chance: '50%',
            payout: '1.96x',
            profit: '-0.098 ETH',
          },
          {
            id: 'e8dd372dd7',
            time: '11:08:08',
            game: 'Dice',
            bet: '0.05 ETH',
            chance: '50%',
            payout: '1.96x',
            profit: '+0.098 ETH',
          },
          {
            id: 'e8dd372dd7',
            time: '11:08:08',
            game: 'Flip a coin',
            bet: '0.05 ETH',
            chance: '50%',
            payout: '1.96x',
            profit: '+0.098 ETH',
          },
          {
            id: 'e8dd372dd7',
            time: '11:08:08',
            game: 'Dice',
            bet: '0.05 ETH',
            chance: '50%',
            payout: '1.96x',
            profit: '-0.098 ETH',
          },
          {
            id: 'e8dd372dd7',
            time: '11:08:08',
            game: 'Dice',
            bet: '0.05 ETH',
            chance: '50%',
            payout: '1.96x',
            profit: '-0.098 ETH',
          },
          {
            id: 'e8dd372dd7',
            time: '11:08:08',
            game: 'Dice',
            bet: '0.05 ETH',
            chance: '50%',
            payout: '1.96x',
            profit: '+0.098 ETH',
          },
          {
            id: 'e8dd372dd7',
            time: '11:08:08',
            game: 'Flip a coin',
            bet: '0.05 ETH',
            chance: '50%',
            payout: '1.96x',
            profit: '+0.098 ETH',
          },
          {
            id: 'e8dd372dd7',
            time: '11:08:08',
            game: 'Dice',
            bet: '0.05 ETH',
            chance: '50%',
            payout: '1.96x',
            profit: '-0.098 ETH',
          },
          {
            id: 'e8dd372dd7',
            time: '11:08:08',
            game: 'Dice',
            bet: '0.05 ETH',
            chance: '50%',
            payout: '1.96x',
            profit: '-0.098 ETH',
          },
          {
            id: 'e8dd372dd7',
            time: '11:08:08',
            game: 'Dice',
            bet: '0.05 ETH',
            chance: '50%',
            payout: '1.96x',
            profit: '+0.098 ETH',
          },
          {
            id: 'e8dd372dd7',
            time: '11:08:08',
            game: 'Flip a coin',
            bet: '0.05 ETH',
            chance: '50%',
            payout: '1.96x',
            profit: '+0.098 ETH',
          },
          {
            id: 'e8dd372dd7',
            time: '11:08:08',
            game: 'Dice',
            bet: '0.05 ETH',
            chance: '50%',
            payout: '1.96x',
            profit: '-0.098 ETH',
          },
          {
            id: 'e8dd372dd7',
            time: '11:08:08',
            game: 'Dice',
            bet: '0.05 ETH',
            chance: '50%',
            payout: '1.96x',
            profit: '-0.098 ETH',
          },
          {
            id: 'e8dd372dd7',
            time: '11:08:08',
            game: 'Dice',
            bet: '0.05 ETH',
            chance: '50%',
            payout: '1.96x',
            profit: '+0.098 ETH',
          },
          {
            id: 'e8dd372dd7',
            time: '11:08:08',
            game: 'Flip a coin',
            bet: '0.05 ETH',
            chance: '50%',
            payout: '1.96x',
            profit: '+0.098 ETH',
          },
          {
            id: 'e8dd372dd7',
            time: '11:08:08',
            game: 'Dice',
            bet: '0.05 ETH',
            chance: '50%',
            payout: '1.96x',
            profit: '-0.098 ETH',
          },
          {
            id: 'e8dd372dd7',
            time: '11:08:08',
            game: 'Dice',
            bet: '0.05 ETH',
            chance: '50%',
            payout: '1.96x',
            profit: '-0.098 ETH',
          },
          {
            id: 'e8dd372dd7',
            time: '11:08:08',
            game: 'Dice',
            bet: '0.05 ETH',
            chance: '50%',
            payout: '1.96x',
            profit: '+0.098 ETH',
          },
        ],
        stats_my: [
          {
            id: 'mye8dd372dd7',
            time: 'my11:08:08',
            game: 'myDice',
            bet: 'my0.05 ETH',
            chance: 'my50%',
            payout: 'my1.96x',
            profit: 'my+0.098 ETH',
          },
          {
            id: 'mye8dd372dd7',
            time: 'my11:08:08',
            game: 'myFlip a coin',
            bet: 'my0.05 ETH',
            chance: 'my50%',
            payout: 'my1.96x',
            profit: 'my-0.098 ETH',
          },
          {
            id: 'mye8dd372dd7',
            time: 'my11:08:08',
            game: 'myDice',
            bet: 'my0.05 ETH',
            chance: 'my50%',
            payout: 'my1.96x',
            profit: 'my-0.098 ETH',
          },
          {
            id: 'mye8dd372dd7',
            time: 'my11:08:08',
            game: 'myDice',
            bet: 'my0.05 ETH',
            chance: 'my50%',
            payout: 'my1.96x',
            profit: 'my+0.098 ETH',
          }
        ],
        stats_high: [
          {
            id: 'highe8dd372dd7',
            time: 'high11:08:08',
            game: 'highDice',
            bet: 'high0.05 ETH',
            chance: 'high50%',
            payout: 'high1.96x',
            profit: 'high+0.098 ETH',
          },
          {
            id: 'highe8dd372dd7',
            time: 'high11:08:08',
            game: 'highDice',
            bet: 'high0.05 ETH',
            chance: 'high50%',
            payout: 'high1.96x',
            profit: 'high-0.098 ETH',
          },
          {
            id: 'highe8dd372dd7',
            time: 'high11:08:08',
            game: 'highFlip a coin',
            bet: 'high0.05 ETH',
            chance: 'high50%',
            payout: 'high1.96x',
            profit: 'high-0.098 ETH',
          },
          {
            id: 'highe8dd372dd7',
            time: 'high11:08:08',
            game: 'highDice',
            bet: 'high0.05 ETH',
            chance: 'high50%',
            payout: 'high1.96x',
            profit: 'high+0.098 ETH',
          }
        ],
        stats_jackpots: [
          {
            id: 'jackpotse8dd372dd7',
            time: 'jackpots11:08:08',
            game: 'jackpotsDice',
            bet: 'jackpots0.05 ETH',
            chance: 'jackpots50%',
            payout: 'jackpots1.96x',
            profit: 'jackpots+0.098 ETH',
          },
          {
            id: 'jackpotse8dd372dd7',
            time: 'jackpots11:08:08',
            game: 'jackpotsDice',
            bet: 'jackpots0.05 ETH',
            chance: 'jackpots50%',
            payout: 'jackpots1.96x',
            profit: 'jackpots-0.098 ETH',
          },
          {
            id: 'jackpotse8dd372dd7',
            time: 'jackpots11:08:08',
            game: 'jackpotsDice',
            bet: 'jackpots0.05 ETH',
            chance: 'jackpots50%',
            payout: 'jackpots1.96x',
            profit: 'jackpots-0.098 ETH',
          },
          {
            id: 'jackpotse8dd372dd7',
            time: 'jackpots11:08:08',
            game: 'jackpotsFlip a coin',
            bet: 'jackpots0.05 ETH',
            chance: 'jackpots50%',
            payout: 'jackpots1.96x',
            profit: 'jackpots+0.098 ETH',
          }
        ]
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
