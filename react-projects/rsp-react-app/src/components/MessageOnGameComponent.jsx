import React from 'react'
import { gameConfigs } from '../configs/gameConfigs'
import { useGame } from '../hooks/useGame';

export const MessageOnGameComponent = () => {
  const {state, dispatch} = useGame();
  const {messages} = gameConfigs;
  const {winnerRound} = state.game;

  const handlerClickPlayAgain = e => {
    dispatch({
      type:"PLAY_AGAIN",
      payload:""
    })
  }
  return (
    <div className="results__ongame">
        <p className="ongame__p">{messages.onGame[winnerRound]}</p>
        <button className="ongame__btn" onClick={handlerClickPlayAgain}>play again</button>
    </div>
  )
}
