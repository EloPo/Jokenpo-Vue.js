import Vue from 'vue'
// import Vuex from 'vuex'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Escolha from '@/components/page/Escolha'
import Resultado from '@/components/page/Resultado'

Vue.use(Router)
// Vue.use(Vuex)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/escolha',
      name: 'Escolha',
      component: Escolha
    },
    {
      path: '/resultado/:name',
      name: 'Resultado',
      component: Resultado
    }
  ]
})
