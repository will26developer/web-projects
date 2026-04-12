import Paper from "../assets/img/images/icon-paper.svg";
import Scissors from "../assets/img/images/icon-scissors.svg";
import Rock from "../assets/img/images/icon-rock.svg";
import Logo from "../assets/img/images/logo.svg";
import Rules from "../assets/img/images/image-rules.svg";

export const gameConfigs = {
    options:["paper","scissors","rock"],
    imgStorage: {
        paper: Paper,
        scissors: Scissors,
        rock: Rock,
        logo: Logo,
        rules: Rules
    },
    gamePlayerOptions: {
        paper: "rock",
        scissors: "paper",
        rock: "scissors"
    },
    classStorage: {
        paper: "wrap__blue",
        scissors: "wrap__yellow",
        rock: "wrap__red"        
    },
    message: {
        onGame:{
            player: "player win",
            house: "house win",
            tie: "tie"
        },
        endGame: {
            player: "player win the game",
            house: "house win the game"
        }
    },
    maxRound: 13
}