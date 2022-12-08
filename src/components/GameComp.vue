<template>
  <div id="game">
    <div id="playersChoice">
      <h4 v-if="!$store.state.computerMode">PLAYER</h4>
      <h4 v-else>COMPUTER 1</h4>
      <div class="playersChoices">
        <div
          class="btn paperBtn btnChosen"
          v-if="playerSelection == 'paper'"
        >
          <img src="../assets/images/paper.png" />
        </div>

        <div
          class="btn rockBtn btnChosen"
          v-if="playerSelection == 'rock'"
        >
          <img src="../assets/images/stone.png" />
        </div>

        <div
          class="btn scissorsBtn btnChosen"
          v-if="playerSelection == 'scissors'"
        >
          <img src="../assets/images/scissors.png" />
        </div>
        <div class="winImgLeft">  
      <img class="imgWin" width="40px" v-if="result =='Computer wins'" src="../assets/images/sad.png" />
      <img class="imgWin" width="40px" v-if="result =='Player wins'" src="../assets/images/rating.png" />
      </div>
      </div>
    </div>

    <div id="result">
      <span >
        <h1>{{ result }}</h1>
        <router-link to="/playermode" v-if="!$store.state.computerMode">
          <div @click="restartGame()"><img width="200px" src="../assets/images/restart.png" /></div>
        </router-link>
        <router-link to="/computermode" v-if="$store.state.computerMode">
           <div  @click="restartGame()"><img width="200px" src="../assets/images/restart.png" /></div>
        </router-link>
      </span>
    </div>

    <div id="computerChoice">
      <h4 v-if="!$store.state.computerMode">COMPUTER</h4>
      <h4 v-else>COMPUTER 2</h4>
      <div class="computerChoices">
        <div
          class="btn paperBtn computerBtnChosen"
          v-if="computerSelection == 'paper'"
        >
          <img src="../assets/images/paper.png" />
        </div>

        <div
          class="btn rockBtn computerBtnChosen"
          v-if="computerSelection == 'rock'"
        >
          <img src="../assets/images/stone.png" />
        </div>

        <div
          class="btn scissorsBtn computerBtnChosen"
          v-if="computerSelection == 'scissors'"
        >
          <img src="../assets/images/scissors.png" />
        </div>
        <div class="winImgRight">  
      <img class="imgWin" width="40px" v-if="result =='Computer wins'" src="../assets/images/rating.png" />
      <img class="imgWin" width="40px" v-if="result =='Player wins'" src="../assets/images/sad.png" />
      </div>   
      </div> 
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import gsap from "gsap";

export default {
  name: "GameComp",
  props: ["playerChoice","computerChoice"],
  data() {
    return {
      playerSelection: this.playerChoice,
      computerSelection: this.computerChoice,
      result: null,
    }
  },
  methods: {
    restartGame() {
      this.computerSelection=null;
      this.$store.state.counter=0; 
      this.$store.state.computerModeCounter=0;
      this.$store.state.counterComputer=0;
      
    },
    randomComputer(min, max) {
      if(this.computerSelection==null){
      var computerPick = Math.round(Math.random() * (max - min) + min);
      if (computerPick == 1) {
        computerPick = "paper";
      } else if (computerPick == 2) {
        computerPick = "rock";
      } else if (computerPick == 3) {
        computerPick = "scissors";
      } 
      this.computerSelection = computerPick;
      this.$emit('computerChoice', this.computerSelection); 
    }
    },

    playerModeWinner(you, computerPick) {
      //this.$store.state.counter=0;
      //this.$store.state.counterComputer=0;
      if (you == computerPick) {
        this.result = "Draw";
      } else if (you == null) {
        this.result = "Error";
      } else if (
        (you == "paper" && computerPick == "rock") ||
        (you == "rock" && computerPick == "scissors") ||
        (you == "scissors" && computerPick == "paper")
      ) {
        this.result = "Player wins";
        this.$store.commit("SCOREPLUS");
      } else {
        this.result = "Computer wins";
        this.$store.commit("SCOREMINUS");
      }
    },

    computerModeWinner(you, computerPick) {
      //this.$store.state.computerModeCounter=0;
      //this.$store.state.counterComputer=0;
      this.$emit('computerChoice', computerPick);
      if (you == computerPick) {
        this.result = "Draw";
      } else if (you == null) {
        this.result = "Error";
      } else if (
        (you == "scissors" && computerPick == "paper") ||
        (you == "paper" && computerPick == "rock") ||
        (you == "rock" && computerPick == "scissors"))
       {
        this.result = "Computer 1 wins";
        this.$store.commit("SCOREPLUS");
      } else {
        this.result = "Computer 2 wins";
        this.$store.commit("SCOREMINUS");
      }
    },

    animate() {
      const animationTime = gsap.timeline({ defaults: { duration: 1 } });
      
      if(screen.width > 670){
      animationTime
        .to("#playersChoice", { x: "-10vw", delay: 1.5, ease: "bounce" })
        .to("#computerChoice", { x: "10vw", delay: 1.5, ease: "bounce" }, 1)
        .from("#result", { opacity: 0, ease: "bounce" }, "<.1");
      } else {
      animationTime
        .to("#playersChoice", { scale:1.1, delay: 1.5, ease: "bounce" })
        .to("#computerChoice", { scale:1.1, delay: 1.5, ease: "bounce" }, 1)
        .from("#result", { opacity: 0, ease: "bounce" }, "<.1");
      }
    },
  },
  computed: {
    ...mapState(["counter"]),
  },
  mounted() {
    if (!this.$store.state.computerMode) {
      console.log(this.$store.state)
      setTimeout(() => {
        this.randomComputer(1, 3);
      }, 1000);
      setTimeout(() => {
        this.playerModeWinner(this.playerSelection, this.computerSelection);
      }, 1200);
    } else {
      setTimeout(() => {
        this.randomComputer(1, 3);
      }, 1000);
      setTimeout(() => {
        this.computerModeWinner(this.playerSelection, this.computerSelection);
      }, 1200);
    }
    this.animate();
  },
  updated(){
    //this.$emit('computerChoice', this.computerSelection); 
  }
};
</script>