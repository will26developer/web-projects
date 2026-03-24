import state from "../state/state.js";



const stateFunctions = {
    getState: () => state,
    setDefaultState: () => {
        if (!localStorage.getItem("gameState")) {
            localStorage.setItem("gameState",JSON.stringify({player:0,house:0,rounds:0}));
        }
    },
    loadState: () => {
        const stateRef = stateFunctions.getState();
        let stored = localStorage.getItem("gameState");
        if (!stored) return;

        stored = JSON.parse(stored);
        stateRef.scores.player = stored.player;
        stateRef.scores.house = stored.house;
        stateRef.rounds = stored.rounds;
    },
    saveState: () => {
        const stateRef = stateFunctions.getState();
        localStorage.setItem("gameState",JSON.stringify({
            player:stateRef.scores.player,
            house:stateRef.scores.house,
            rounds:stateRef.rounds
        }));
    },
    updateState: (player,house,winner) => {
        const stateRef = stateFunctions.getState(); 
        winner === "player" && stateRef.scores.player++;
        winner === "house" && stateRef.scores.house++;
        stateRef.playerChoice = player;
        stateRef.houseChoice = house;
        stateRef.rounds++;
        stateRef.winnerRound = winner;
        stateFunctions.saveState();
        return stateRef;
    }, 
    resetState:() => {
        stateFunctions.setDefaultState();
        const stateRef = stateFunctions.getState();
        stateRef.scores.player = 0;
        stateRef.scores.house = 0;
        stateRef.rounds = 0;
        stateRef.playerChoice = "";
        stateRef.houseChoice = "";
        stateRef.winnerRound = "";
    }
}

export default stateFunctions;