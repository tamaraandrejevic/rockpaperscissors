<template>
  <header id="header">
    <div class="title">
      ROCK, PAPER, SCISSORS
    </div>
    <div class="scoreDiv">
    <div><img width="50px" src="../assets/images/flag.png" /></div>
    <div id="scoreBox">
      <span class="scoreResult">Score</span>
      <span v-if="!$store.state.computerMode" id="score" class="playerScore">{{
        $store.state.counter +':'+ $store.state.counterComputer}}</span>
      <span v-else id="score" class="computerScore">{{
        $store.state.computerModeCounter +':'+ $store.state.counterComputer}}</span>
    </div>
  </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComp",
}
</script>