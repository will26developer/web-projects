import configs from "../configs/configs.js";
import stateFunction from "./stateFunctions.js";
import uiFunctions from "./uiFunctions.js";

const utilFunctions = {
    getHouseChoice: () => configs.options[Math.floor(Math.random() * configs.options.length)],
    getWinner: (player,house) => {
        if (player === house) {
            return "tie";
        } 
        return configs.rules[player] === house ? "player" : "house";
    },
    renderAndUpdate: player => {
        const house = utilFunctions.getHouseChoice();
        const winner = utilFunctions.getWinner(player,house);
        const stateRef = stateFunction.updateState(player,house,winner);
        return stateRef;
    },
    gameObserver: state => {
        if (state.rounds === 13) {
            uiFunctions.setMessageEndGameContainer();
            uiFunctions.renderMessageEndGame(state);
        }
    }
}

export default utilFunctions;