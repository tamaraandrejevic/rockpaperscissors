<template>
<div>
  <header id="header" style="justify-content:center;">
    <div class="title">
      ROCK, PAPER, SCISSORS
    </div>
  </header>
  <div class="chooseGameText">CHOOSE GAME MODE</div>
  <div class="chooseModeDiv">
    <router-link to="/playermode">
      <button class="basicBtn modeBtn" @click="goToMode('player')">Player Mode</button>
    </router-link>
    <router-link to="/computermode">
      <button class="basicBtn modeBtn" @click="goToMode('computer')">Computer Mode</button>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: "ChooseGameMode",
methods: {
  goToMode(mode) {
    if(mode=='computer'){
      this.$store.state.computerMode=true;
    } else {
      this.$store.state.computerMode=false;
    }
    this.$store.state.counter=0;
    this.$store.state.counterComputer=0;
    this.$store.state.computerModeCounter=0;
  }
}
}
</script>