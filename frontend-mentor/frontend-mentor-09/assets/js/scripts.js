window.addEventListener("DOMContentLoaded", () => {
  const scorePlayer = document.getElementById("score-player");
  const wrapPlayer = document.getElementById("wrap-player");
  const wrapHouse = document.getElementById("wrap-house");
  const wrapCollection = document.querySelectorAll(".wrap__picked");
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

  const renderStorage = {
    paper: "wrap__blue",
    scissors: "wrap__yellow",
    rock: "wrap__red",
  };

  const messages = {
    player: "player's win",
    house: "house's win",
    tie: "it's a tie",
  };

  const rules = {
    paper: "rock",
    scissors: "paper",
    rock: "scissors",
  };

  let playerScoreState = 0;
  let houseScoreState = 0;
  const arrOptions = ["paper", "scissors", "rock"];

  const housePlayer = () =>
    arrOptions[Math.floor(Math.random() * arrOptions.length)];

  const deliverWinner = (player, house) => {
    if (player === house) return "tie";
    return rules[player] === house ? "player" : "house";
  };

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
  };

  const endGame = () => {
    if (playerScoreState >= 13 || houseScoreState >= 13) {
      playerScoreState >= 13 && houseScoreState < 13
        ? (winnerMessage.textContent = "Player win the game!!")
        : (winnerMessage.textContent = "House win the game!!");
      btnAgain.classList.add("hidden");
      btnResetGame.classList.remove("hidden");
    }
  };

  const playAgain = () => {
    mainShow.classList.add("hidden");
    mainSelect.classList.remove("hidden");
  };

  const initScore = () =>
    localStorage.setItem(
      "scores",
      JSON.stringify({ player: playerScoreState, house: houseScoreState })
    );

  const addScore = (winner) => {
    winner === "player" && playerScoreState++;
    winner === "house" && houseScoreState++;
    localStorage.setItem(
      "scores",
      JSON.stringify({ player: playerScoreState, house: houseScoreState })
    );
  };

  const updateScore = () => {
    let scoreStorage = JSON.parse(localStorage.getItem("scores"));
    scorePlayer.textContent = scoreStorage.player;
    scoreHouse.textContent = scoreStorage.house;
  };

  const renderPick = (optionPlayer, optionHouse) => {
    wrapCollection.forEach((wrap) => {
      wrap.classList.remove("wrap__blue", "wrap__yellow", "wrap__red");
    });
    wrapPlayer.classList.add(renderStorage[optionPlayer]);
    wrapHouse.classList.add(renderStorage[optionHouse]);
  };

  const showMessage = (winner, pickPlayer, pickHouse) => {
    mainSelect.classList.add("hidden");
    mainShow.classList.remove("hidden");
    pickedPlayer.src = `./assets/img/images/icon-${pickPlayer}.svg`;
    pickedHouse.src = `./assets/img/images/icon-${pickHouse}.svg`;
    renderPick(pickPlayer, pickHouse);
    winnerMessage.textContent = messages[winner];
  };

  mainSelect.addEventListener("click", (e) => {
    let playerSelect = e.target.closest(".select__wrap").id;
    if (!playerSelect) return;
    let houseSelect = housePlayer();
    let winner = deliverWinner(playerSelect, houseSelect);
    addScore(winner);
    updateScore();
    showMessage(winner, playerSelect, houseSelect);
    endGame();
  });

  btnAgain.addEventListener("click", playAgain);

  btnResetGame.addEventListener("click", resetGame);

  initScore();
});
