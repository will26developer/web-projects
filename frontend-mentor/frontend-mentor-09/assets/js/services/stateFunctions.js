import state from "../state/state.js";


const stateFunctions = {
    getState: () => state,
    setDefaultState: () => {
        localStorage.setItem("gameState",JSON.stringify({player:0,house:0,rounds:0}));
    },
    loadState: () => {
        const stateRef = stateFunctions.getState();
        let stored = localStorage.getItem("gameState");
        if (!stored) return;

        stored = JSON.parse(stored);
        stateRef.scores.player = stored.player;
        stateRef.scores.player = stored.house;
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
        stateRef.playerChoice = player;
        stateRef.houseChoice = house;
        stateRef.winnerRound = winner;
        stateRef.rounds++;
        
        winner === "player" && stateRef.scores.player++;
        winner === "house" && stateRef.scores.house++;

        stateFunctions.saveState();
    }
}

export default stateFunctions;