import configs from "../configs/configs.js";
import stateFunctions from "./stateFunctions.js";
import uiFunctions from "./uiFunctions.js";

const utilFunctions = { 
    getHouseChoice: () => configs.options[Math.floor(Math.random() * configs.options.length)],
    getResults: (player,house) => {
        if (player === house) return "tie";
        return configs.rules[player] === house ? "player":"house";
    },
    updateAndRender: player => {
        const house = utilFunctions.getHouseChoice()
        const winner = utilFunctions.getResults(player,house);
        const stateRef = stateFunctions.updateState(player,house,winner);
        uiFunctions.renderResults(stateRef);
    },
    observerGame:state => {
        if (state.rounds < 13) {
            uiFunctions.setMessageGameContainer("on-game")
            uiFunctions.renderOnGameMessage(state);
        } else {
            uiFunctions.setMessageGameContainer("end-game");
            uiFunctions.renderEndGameMessage(state);
        }
    }
}

export default utilFunctions;