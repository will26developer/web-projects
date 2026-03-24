import configs from "../configs/configs.js";
import elements from "../elements/elements.js";
import stateFunctions from "./stateFunctions.js";
import utilFunctions from "./utilFunctions.js";

const uiFunctions = {
    views: {
        choices: elements.pickChoices,
        results: elements.gameResults
    },
    setView: (view) => {
        Object.values(uiFunctions.views).forEach(v => v.hidden = true);
        uiFunctions.views[view].hidden = false;
    },
    setMessageGameContainer: type => {
        elements.messageOnGameContainer.hidden = type !== "on-game";
        elements.messageEndGameContainer.hidden = type !== "end-game";
    },
    cleanElements: () => {
        elements.playerChoice.classList.remove("wrap__blue", "wrap__yellow", "wrap__red");
        elements.playerChoiceImg.src = "";
        elements.playerChoiceImg.alt = "";
        elements.houseChoice.classList.remove("wrap__blue", "wrap__yellow", "wrap__red");
        elements.houseChoiceImg.src = "";
        elements.houseChoiceImg.alt = "";
    },
    renderScore: state => {
        elements.playerScore.textContent = state.scores.player;
        elements.houseScore.textContent = state.scores.house;
    },
    renderPickers: state => {
        elements.playerChoice.classList.add(configs.renderOptions[state.playerChoice]);
        elements.playerChoiceImg.src = `./assets/img/images/icon-${state.playerChoice}.svg`;
        elements.playerChoiceImg.alt = `${state.playerChoice}`;
        elements.houseChoice.classList.add(configs.renderOptions[state.houseChoice]);
        elements.houseChoiceImg.src = `./assets/img/images/icon-${state.houseChoice}.svg`;
        elements.houseChoiceImg.alt = `${state.houseChoice}`;
    },
    renderOnGameMessage: state => elements.messageOnGame.textContent = configs.messages.onGame[state.winnerRound],

    renderEndGameMessage: state => {
        const messages = configs.messages.offGame;

        if (state.scores.player > state.scores.house) {
            elements.messageEndGame.textContent = messages.player;
        } else {
            elements.messageEndGame.textContent = messages.house;
        }
    },
    renderResults: state => {
        uiFunctions.setView("results");
        uiFunctions.cleanElements();
        uiFunctions.renderScore(state);
        uiFunctions.renderPickers(state);
        utilFunctions.observerGame(state);
    },
    playAgain: () => {
        uiFunctions.setView("choices");
    },
    resetGame: () => {
        stateFunctions.resetState();
        uiFunctions.playAgain();
        elements.playerScore.textContent = 0;
        elements.houseScore.textContent = 0;
    }
}

export default uiFunctions;