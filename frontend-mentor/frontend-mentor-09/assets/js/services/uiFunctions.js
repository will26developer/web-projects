import elements from "../elements/elements.js";
import configs from "../configs/configs.js";
import utilFunctions from "./utilFunctions.js";
import stateFunctions from "./stateFunctions.js";

const uiFunctions = {
    setPickChoices: () => {
        elements.pickChoices.classList.remove("hidden");
        elements.gameResults.classList.add("hidden");
    },
    setGameResults: () => {
        elements.gameResults.classList.remove("hidden");
        elements.pickChoices.classList.add("hidden");
    },
    setMessageOnGameContainer: () => {
        elements.messageOnGameContainer.classList.remove("hidden");
        elements.messageEndGameContainer.classList.add("hidden"); 
    },
    setMessageEndGameContainer: () => {
        elements.messageEndGameContainer.classList.remove("hidden");
        elements.messageOnGameContainer.classList.add("hidden");
    },
    cleanElements: () => {
        elements.playerChoice.classList.remove("wrap__blue","wrap__yellow","wrap__red");
        elements.playerChoiceImg.src = "";
        elements.playerChoiceImg.alt = "";
        elements.houseChoice.classList.remove("wrap__blue","wrap__yellow","wrap__red");
        elements.houseChoiceImg.src = "";
        elements.houseChoiceImg.alt = "";
    },
    renderScores: state => {
        elements.playerScore.textContent = state.scores.player;
        elements.houseScore.textContent = state.scores.house;
    },
    renderMessageOnGame: state => elements.messageOnGame.textContent = configs.message.onGame[state.winnerRound],
    renderMessageEndGame: state => {
        uiFunctions.setMessageEndGameContainer();
        if (state.scores.player > state.scores.house) {
            elements.messageEndGame.textContent =  configs.message.offGame.player;
        }
        if (state.scores.house > state.scores.player) {
            elements.messageEndGame.textContent = configs.message.offGame.house; 
        }
    },
    renderPickers: state => {
        elements.playerChoice.classList.add(configs.renderOptions[state.playerChoice]);
        elements.playerChoiceImg.src = `./assets/img/images/icon-${state.playerChoice}.svg`;
        elements.playerChoiceImg.alt = `${state.playerChoice}`;
        elements.houseChoice.classList.add(configs.renderOptions[state.houseChoice]);
        elements.houseChoiceImg.src = `./assets/img/images/icon-${state.houseChoice}.svg`;
        elements.houseChoiceImg.alt = `${state.houseChoice}`;
    },
    renderResultsAndUpdate: player => {
        const stateRef = utilFunctions.renderAndUpdate(player);
        uiFunctions.setGameResults(); 
        uiFunctions.cleanElements();
        uiFunctions.renderScores(stateRef);
        uiFunctions.renderPickers(stateRef);
        uiFunctions.renderMessageOnGame(stateRef);
        utilFunctions.gameObserver(stateRef);
    },
    playAgain: () => {
        uiFunctions.cleanElements();
        uiFunctions.setPickChoices();
    },
    resetScore: () => {
        elements.playerScore.textContent = 0;
        elements.houseScore.textContent = 0;
    },
    resetGame: () => {
        uiFunctions.setMessageOnGameContainer();
        uiFunctions.cleanElements();
        uiFunctions.setPickChoices();
        uiFunctions.resetScore();
        stateFunctions.resetState();
    },
    openRules: () => {
        elements.rulesContainer.classList.add("show__rules");
        elements.overlay.classList.add("blur__bg");
    },
    closeRules: () => {
        elements.rulesContainer.classList.remove("show__rules");
        elements.overlay.classList.remove("blur__bg");
    }
 }

export default uiFunctions; 