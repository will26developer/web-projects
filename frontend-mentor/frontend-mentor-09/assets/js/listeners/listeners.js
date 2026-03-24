import elements from "../elements/elements.js";
import handlerFunctions from "../services/handlerFunctions.js";

const listeners = () => {
    elements.pickChoices.addEventListener("click",handlerFunctions.handlePickChoice);
    elements.btnPlayAgain.addEventListener("click",handlerFunctions.handlePlayAgain);
    elements.btnResetGame.addEventListener("click",handlerFunctions.handleResetGame);
}

export default listeners;
