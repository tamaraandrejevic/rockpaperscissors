<template>
  <div id="playerGame">
    <router-link to="/game" style="display:flex;">
      <div class="flex-row-item">
      <div class="btn paperBtn" @click="btnClicked('paper')">
        <img src="../assets/images/paper.png" />
      </div>
    </div>
    <div class="flex-row-item">
      <div class="btn rockBtn" @click="btnClicked('rock')">
        <img src="../assets/images/stone.png" />
      </div>
    </div>
    <div class="flex-row-item">
      <div class="btn scissorsBtn" @click="btnClicked('scissors')">
        <img src="../assets/images/scissors.png" />
      </div>
    </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PlayerMode",
  data(){
    return {
      choice: null,
    }    
  },
  methods: {
    btnClicked(choice) {
      this.choice = choice;
      this.$emit('choice', this.choice);
    },
  }
}
</script>