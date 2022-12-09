import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        counter: 0,
        counterComputer: 0,
        computerModeCounter: 0,
        computerMode: false,
    },
    plugins: [createPersistedState()],
    mutations:{
        SCOREPLUS: (state) => {
            state.counter=0;
            state.counterComputer=0;
            state.computerModeCounter=0;
            if(!state.computerMode && state.counterComputer>0){
                state.counter++;
                state.counterComputer--;
            } else if (!state.computerMode && state.counterComputer==0) {
                state.counter++;
                state.counterComputer=0;
            }
             else if(state.computerMode && state.counterComputer>0){
                state.computerModeCounter++;
                state.counterComputer--;
            } else if (state.computerMode && state.counterComputer==0){
                state.computerModeCounter++;
                state.counterComputer=0;
            }
        },
        SCOREMINUS: (state) => {
            state.counter=0;
            state.counterComputer=0;
            state.computerModeCounter=0;
            if (state.counter > 0){
                state.counter--;
                state.counterComputer++;
            } 
            if (state.computerModeCounter > 0){
                state.computerModeCounter--;
                state.counterComputer++;                
            } else {
                state.computerModeCounter=0;
                state.counterComputer++;
            }
        },
        CHANGEMODE: (state) => {
            if (state.computerMode){
                state.computerMode=false;
            } else {
                state.computerMode=true;
            }
             state.counter=0;
             state.counterComputer=0;
             state.computerModeCounter=0;
    }
}
})