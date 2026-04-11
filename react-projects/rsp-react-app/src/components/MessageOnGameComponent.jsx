import { useGame } from "../hooks/useGame"
import { gameConfigs } from "../configs/gameConfigs.js"

export const MessageOnGameComponent = () => {
  const { state, dispatch } = useGame();
  const { game } = state;
  const { messageOnGame } = gameConfigs;

  const handlerClickPlayAgain = e => {
    dispatch({
      type: "PLAY_AGAIN",
      payload: false
    })
  }
  return (
    <div className="results__message-ongame">
      <p className="message__p-ongame">{messageOnGame[game.winnerRound]}</p>
      <button className="message__btn-ongame" onClick={handlerClickPlayAgain}>play again</button>
    </div>
  )
}

