<template>
  <div>
     <router-link to="/game" class="start">
      <button class="basicBtn startBtn" @click="btnClicked(1,3)">Start game</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ComputerMode",
  data() {
    return {
      choice: null
    }
  },
  methods: {
    btnClicked(min, max) {
      var computerChoice = Math.round(Math.random() * (max - min) + min);
      if (computerChoice == 1) {
        computerChoice = "paper";
      } else if (computerChoice == 2) {
        computerChoice = "rock";
      } else if (computerChoice == 3) {
        computerChoice = "scissors";
      } 
      this.choice= computerChoice;
      this.$emit('choice', this.choice);
    }

  }

};
</script>