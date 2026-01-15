window.addEventListener("DOMContentLoaded", () => {
  const playerScore = document.querySelector("#player-score");
  const houseScore = document.querySelector("#house-score");
  const optionContainer = document.querySelector("#option-container")
  const showResults = document.querySelector("#show-results");
  const showRules = document.querySelector("#show-rules");
  const btnRules = document.querySelector("#btn-rules");
  const arrOptions = ["paper","scissors","rock"];

  const housePlayer = () => {
    return arrOptions[Math.floor(Math.random() * arrOptions.length,2)]
  }

  const deliverWinner = (player,house) => {
    if (player === "rock" && house === "scissors") {
      return true;
    }
    if (player === "scissors" && house === "paper") {
      return true;
    }

    if (player === "paper" && house === "rock") {
      return true
    }

    if (player === house) {
      return;
    }
    return false;
  }

  const getWinner = playerPulse => {
    let house = housePlayer();
    let player = playerPulse;
    return deliverWinner(player,house);
  }

  optionContainer.addEventListener("click", (e) => {
    let pulsedElement = e.target.closest(".wrap__img");
    console.log(getWinner(pulsedElement.id));
  });
});
