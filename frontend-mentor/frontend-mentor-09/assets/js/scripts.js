window.addEventListener("DOMContentLoaded", () => { 
    const playerScore = document.getElementById("player-score");
    const houseScore = document.getElementById("house-score");
    const pickerContainer = document.getElementById("select-container");
    const resultsContainer = document.getElementById("show-results");
    const message = document.getElementById("message");
    const resultsWrapCollection = document.querySelectorAll(".results__wrap");
    const btnAgain = document.getElementById("btn-again");
    const btnReset = document.getElementById("btn-reset");
    const pickedPlayer = document.getElementById("select-picked-player");
    const pickedHouse = document.getElementById("select-picked-house"); 
    const pickedWrapPlayer = document.getElementById("picked-wrap-player"); 
    const pickedWrapHouse = document.getElementById("picked-wrap-house");
    const rulesContainer = document.getElementById("show-rules");
    const btnClose = document.getElementById("btn-close");
    const btnRules = document.getElementById("btn-rules");
    let playerScoreState = 0;
    let houseScoreState = 0;
    const arrOption = ["paper","scissors","rock"];

    const deliveOptions = {
        "paper":"rock",
        "scissors":"paper",
        "rock":"scissors" 
    }
    const messages = {
        "player":"player wins",
        "house":"house wins", 
        "tie":"it's a tie"
    }
    const renderStorage = {
        "paper":"wrap__blue", 
        "scissors":"wrap__yellow",
        "rock":"wrap__red" 
    }

    const initScoreStorage = () => localStorage.setItem("scores",JSON.stringify({player:0,house:0}))

    const resetGame = () => {
        localStorage.removeItem("scores");
        playerScoreState = 0;
        houseScoreState = 0;
        playerScore.textContent = playerScoreState;
        houseScore.textContent = houseScoreState;
        btnReset.classList.add("hidden");
        btnAgain.classList.remove("hidden");
        resultsContainer.classList.add("hidden");
        pickerContainer.classList.remove("hidden");
    }

    const announceWinner = () => {
        if (playerScoreState >= 13 || houseScoreState >= 13) {
            btnAgain.classList.add("hidden");
            btnReset.classList.remove("hidden");
            message.textContent = playerScoreState >= 13 ? "Player win the game!" : "House win the game!";
        }
    }


    const showRules = () => rulesContainer.classList.remove("hidden");

    const hideRules = () => rulesContainer.classList.add("hidden");

    const returnBack = () => {
        resultsContainer.classList.add("hidden");
        pickerContainer.classList.remove("hidden");
    }

    const botPlayer = () => arrOption[Math.floor(Math.random() * arrOption.length)];
    
    const deliverWinner = (player,house) => {
        if (player === house) return "tie";
        return deliveOptions[player] === house ? "player":"house"
    }

    const sumPointAtWinner = winner => {
        winner === "player" && playerScoreState++;
        winner === "house" && houseScoreState++;
        localStorage.setItem("scores",JSON.stringify({player:playerScoreState,house:houseScoreState}));
    }

    const renderWinnerMessage = (winner,player,house) => {
        pickerContainer.classList.add("hidden");
        resultsContainer.classList.remove("hidden");
        resultsWrapCollection.forEach(wrap => wrap.classList.remove("wrap__blue","wrap__yellow","wrap__red"));
        message.textContent = messages[winner];
        pickedPlayer.src = `./assets/img/images/icon-${player}.svg`;
        pickedHouse.src = `./assets/img/images/icon-${house}.svg`;
        pickedPlayer.alt = `icon-${player}`;
        pickedHouse.alt = `icon-${house}`;
        pickedWrapPlayer.classList.add(renderStorage[player]);
        pickedWrapHouse.classList.add(renderStorage[house])
    }

    const renderCounters = winner => {
        sumPointAtWinner(winner);
        let scoreStorage = JSON.parse(localStorage.getItem("scores"))
        playerScore.textContent = scoreStorage.player;
        houseScore.textContent = scoreStorage.house;         
    }

    initScoreStorage();

    pickerContainer.addEventListener("click",e => {
        let pickPlayer = e.target.closest(".select__wrap");
        if (!pickPlayer) return;
        let  pickHouse = botPlayer();
        let winner = deliverWinner(pickPlayer.id,pickHouse);
        renderWinnerMessage(winner,pickPlayer.id,pickHouse)
        renderCounters(winner)
        announceWinner();   
    })

    btnReset.addEventListener("click",resetGame);

    btnAgain.addEventListener("click",returnBack)

    btnRules.addEventListener("click",showRules);

    btnClose.addEventListener("click",hideRules);

});
