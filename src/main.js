import  Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router';
import VuePageTransition from 'vue-page-transition';
import ChooseGameMode from './components/ChooseGameMode.vue';
import PlayerMode from './components/PlayerMode.vue';
import ComputerMode from './components/ComputerMode.vue';
import GameComp from './components/GameComp.vue';
import store from './store.js';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VuePageTransition);


const routes = [
  {path: '/', name:'', component: ChooseGameMode},
  {path: '/playermode', name:'playermode', component: PlayerMode},
  {path: '/computermode', name:'computermode', component: ComputerMode},
  {path: '/game', name:'game', component: GameComp}
 ];

const router = new VueRouter({
  routes,
  mode: 'history'
});


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
