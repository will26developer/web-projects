
window.addEventListener("DOMContentLoaded",() => {
  const scorePlayer = document.getElementById("score-player");
  const scoreHouse = document.getElementById("score-house");
  const mainSelect = document.getElementById("select-option");
  const mainShow = document.getElementById("show-results");
  const pickedPlayer = document.getElementById("player-picked");
  const pickedHouse = document.getElementById("house-picked");
  const winnerMessage = document.getElementById("message");
  const btnAgain = document.getElementById("btn-again");
  const btnResetGame = document.getElementById("btn-reset");
  const showRules = document.getElementById("show-rules");
  const btnClose = document.getElementById("btn-close");
  const btnRules = document.getElementById("btn-rules");
  let playerScoreState = 0;
  let houseScoreState = 0;
  const arrOptions = ["paper","scissors","rock"];

  const housePlayer = () => arrOptions[Math.floor(Math.random() * arrOptions.length,2)];

  const deliverWiner = (player,house) => {
    if (player === "paper" && house === "rock") {
      return "player"
    }
    if (player === "scissors" && house === "paper") {
      return "player"
    }
    if (player === "rock" && house === "scissors") {
      return "player"
    }
    if (player === house) {
      return "tie"
    }
    return "house";
  }

  const resetGame = () => {
    localStorage.removeItem("scores");
    playerScoreState = 0;
    houseScoreState = 0;
    scorePlayer.textContent = playerScoreState;
    scoreHouse.textContent = houseScoreState;
    btnResetGame.classList.add("hidden");
    btnAgain.classList.remove("hidden");
    mainShow.classList.add("hidden");
    mainSelect.classList.remove("hidden");
  }

  const endGame = winner  => {
    if (playerScoreState >= 13 || houseScoreState >= 13) {
      winnerMessage.textContent = `${winner} win the game!!`
      btnAgain.classList.add("hidden");
      btnResetGame.classList.remove("hidden");
    }
  }

  const playAgain = () => {
    mainShow.classList.add("hidden");
    mainSelect.classList.remove("hidden");
  }

  const initScore = () => localStorage.setItem("scores",JSON.stringify({player:playerScoreState,house:houseScoreState}))

  const addScore = winner => {
    winner === "player" && playerScoreState++;
    winner === "house" && houseScoreState++;
    localStorage.setItem("scores",JSON.stringify({player:playerScoreState,house:houseScoreState}))
  }

  const updateScore = () => {
    let scoreStorage = JSON.parse(localStorage.getItem("scores"));
    scorePlayer.textContent = scoreStorage.player;
    scoreHouse.textContent = scoreStorage.house;
  }

  const showMessage = (winner,pickPlayer,pickHouse) => {
    mainSelect.classList.add("hidden");
    mainShow.classList.remove("hidden");
    pickedPlayer.src = `./assets/img/images/icon-${pickPlayer}.svg`;
    pickedHouse.src = `./assets/img/images/icon-${pickHouse}.svg`;
    winnerMessage.textContent = winner === "player" ? "player's win":
                                winner === "house" ? "house's win":
                                winner === "tie" && "it's a tie"
  }

  mainSelect.addEventListener("click",e => {
    let playerSelect = e.target.closest(".select__wrap").id;
    let houseSelect = housePlayer()
    let winner = deliverWiner(playerSelect,houseSelect);
    addScore(winner)
    updateScore()
    showMessage(winner,playerSelect,houseSelect)
    endGame(winner)
  })

  btnAgain.addEventListener("click",playAgain);

  btnResetGame.addEventListener("click",resetGame);

  initScore()
})
