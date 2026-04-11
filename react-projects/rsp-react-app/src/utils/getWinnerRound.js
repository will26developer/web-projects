


export const getWinnerRound = (player, house) => {
  const rules = {
    paper: "rock",
    scissors: "paper",
    rock: "scissors"
  };

  if (player === house) return "tie";

  return rules[player] === house ? "player" : "house";
}
