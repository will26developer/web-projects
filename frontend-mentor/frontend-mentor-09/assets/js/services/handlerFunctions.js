import uiFunctions from "./uiFunctions.js";

const handlerFunctions = {
    handlerPickChoice: e => {
        let element = e.target.closest(".choice__btn");
        if (!element) return;
        let player = element.dataset.choice; 
        uiFunctions.renderResultsAndUpdate(player);
    },
    handlerBtnPlayAgain: e => {
        uiFunctions.playAgain();
    },
    handlerBtnResetGame: e => {
        uiFunctions.resetGame();
    },
    handlerBtnRules: e => {
        uiFunctions.openRules()
    },
    handlerBtnCloseRules: e => {
        uiFunctions.closeRules();
    }
}

export default handlerFunctions; 