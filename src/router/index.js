import Vue from 'vue'
import Router from 'vue-router'
import MainComponent from '@/components/MainComponent/index'
import FlipCoin from '@/components/FlipCoin/index'
import MainComponentChooseGame from '@/components/MainComponent/components/MainComponentChooseGame'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainComponent,
      children: [
        {
          path: '/',
          name: 'MainComponentChooseGame',
          component: MainComponentChooseGame,
        },
        {
          path: '/flip_coin',
          name: 'FlipCoin',
          component: FlipCoin,
        },
      ]
    }
  ]
})
