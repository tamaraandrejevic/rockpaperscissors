<template>
  <div id="app">
    <header-comp v-if="$route.name !== ''"/>
    <vue-page-transition name="zoom">
      <router-view v-if="$store"
        @choice="choice=$event;$store.state.playerSelected=$event;"
        @computerChoice="$store.state.computerSelected=$event"
        :computerChoice="$store.state.computerSelected"
        :playerChoice="$store.state.playerSelected"
      />
    </vue-page-transition>
    <footer-comp v-if="$route.name !== ''"/>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/FooterComp.vue';


export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp,
  },
  data(){
    return {
      choice: null,
    }
  }
}
</script>

<style>
  @import "./assets/css/styles.css";
</style>
