import { initialState } from "../state/initialState";
import { getHouseChoice } from "../utils/getHouseChoice";
import { getWinnerRound } from "../utils/getWinnerRound"; 


export const rspReducer = (state,action) => {
    switch (action.type) {
        case "PLAY": {
            const player = action.payload;
            const house = getHouseChoice();
            const winner = getWinnerRound(player,house);        
            return {
                ...state,
                scores: {
                    ...state.scores,
                    player: winner === "player" ? state.scores.player + 1 : state.scores.player,
                    house: winner === "house" ? state.scores.house + 1 : state.scores.house
                },
                game: {
                    ...state.game,
                    round: state.game.round + 1,
                    playerChoice: player,
                    houseChoice: house, 
                    winnerRound: winner
                },
                ui: {
                    ...state.ui,
                    showResults:true
                }
            }
        }
        case "PLAY_AGAIN": {
            return {
                ...state,
                ui: {
                    ...state.ui,
                    showResults: false
                }
            }
        }
        case "RESET_GAME": {
            return {
                ...initialState
            }
        }
        case "TOGGLE_RULES": {
            return {
                ...state,
                ui: {
                    ...state.ui,
                    showRules:!state.ui.showRules
                }
            }
        }
        default:
            return state
    }
}