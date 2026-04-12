import { gameConfigs } from "../configs/gameConfigs"

export const getWinnerRound = (player,house) => {
    const {gamePlayerOptions} = gameConfigs;
    if (player === house) return "tie";
    return gamePlayerOptions[player] === house ? "player" : "house";
}