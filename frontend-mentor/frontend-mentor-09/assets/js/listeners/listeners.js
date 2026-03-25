import elements from "../elements/elements.js";
import handlerFunctions from "../services/handlerFunctions.js";


const listeners = () => {
    elements.pickChoices.addEventListener("click", e => handlerFunctions.handlerPickChoice(e)); 
    elements.btnPlayAgain.addEventListener("click",e => handlerFunctions.handlerBtnPlayAgain(e));
    elements.btnResetGame.addEventListener("click", e => handlerFunctions.handlerBtnResetGame(e));
    elements.btnRules.addEventListener("click",e => handlerFunctions.handlerBtnRules(e)); 
    elements.btnCloseRules.addEventListener("click",e => handlerFunctions.handlerBtnCloseRules(e)); 
}

export default listeners;