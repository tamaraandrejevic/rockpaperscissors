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
      <button class="basicBtn modeBtn" @click="$store.state.counter=0;$store.state.counterComputer=0;$store.state.computerMode=false;">Player Mode</button>
    </router-link>
    <router-link to="/computermode">
      <button class="basicBtn modeBtn" @click="$store.state.counter=0;$store.state.computerModeCounter=0;$store.state.computerMode=true;">Computer Mode</button>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: "ChooseGameMode"  
}
</script>