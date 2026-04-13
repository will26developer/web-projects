import Logo from "../assets/img/images/logo.svg";
import Rules from "../assets/img/images/image-rules.svg";
import Paper from "../assets/img/images/icon-paper.svg";
import Scissors from "../assets/img/images/icon-scissors.svg";
import Rock from "../assets/img/images/icon-rock.svg";
import Close from "../assets/img/images/icon-close.svg";

export const gameConfigs = {
    options:["paper","scissors","rock"],
    gamePlayerOptions:{
        paper: "rock",
        scissors: "paper",
        rock: "scissors"
    },
    imgStorage: {
        paper:Paper,
        scissors:Scissors,
        rock:Rock, 
        logo:Logo,
        rules:Rules,
        close: Close
    },
    classStorage: {
        paper: "wrap__blue", 
        scissors: "wrap__yellow",
        rock: "wrap__red"
    },
    messages:{
        onGame:{
            player: "player win",
            house: "house win",
            tie: "it's a tie"
        },
        endGame: {
            player:"player win the game",
            house: "house win the game"
        }
    },
    maxRound: 13
}