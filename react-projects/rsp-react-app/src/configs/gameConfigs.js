import Paper from "../assets/img/images/icon-paper.svg";
import Scissors from "../assets/img/images/icon-scissors.svg";
import Rock from "../assets/img/images/icon-rock.svg";


export const gameConfigs = {
  options: ["paper", "scissors", "rock"],
  imgStorage: {
    paper: Paper,
    scissors: Scissors,
    rock: Rock
  },
  renderStorage: {
    paper: "wrap__blue",
    scissors: "wrap__yellow",
    rock: "wrap__red",
  },
  messageOnGame: {
    player: "player's win",
    house: "house's win",
    tie: "it's a tie"
  },
  messageEndGame: {
    player: "player win the game",
    house: "house win the game"
  },
  maxRound: 13
}
