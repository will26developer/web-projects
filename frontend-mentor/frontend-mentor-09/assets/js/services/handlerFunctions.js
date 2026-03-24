import uiFunctions from "./uiFunctions.js";
import utilFunctions from "./utilFunctions.js";


const handlerFunctions = {
    handlePickChoice: e => {
        const element = e.target.closest(".choices__btn");
        if (!element) return;
        const player = element.dataset.choice;
        utilFunctions.updateAndRender(player);
    },
    handlePlayAgain: e => {
        uiFunctions.playAgain();
    },
    handleResetGame: e => {
        uiFunctions.resetGame();
    }
}

export default handlerFunctions;