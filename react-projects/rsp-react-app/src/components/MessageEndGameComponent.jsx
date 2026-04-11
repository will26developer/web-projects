import { useGame } from "../hooks/useGame.js";
import { gameConfigs } from "../configs/gameConfigs.js"

export const MessageEndGameComponent = () => {
  const { state, dispatch } = useGame();
  const { scores } = state;
  const { messageEndGame } = gameConfigs;

  const handleClickResetGame = e => {
    dispatch({
      type: "RESET",
      payload: ""
    })
  }
  return (
    <div className="results__message-endgame">
      <p className="message__p-endgame">{scores.player > scores.house ? messageEndGame["player"] : messageEndGame["house"]}</p>
      <button className="message__btnp-endgame" onClick={handleClickResetGame}>reset game</button>
    </div>
  )
}

