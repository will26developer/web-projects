import React from 'react'
import { useGame } from '../hooks/useGame';
import { gameConfigs } from '../configs/gameConfigs';

export const MessageEndGameComponent = () => {
  const {state, dispatch} = useGame();
  const {messages} = gameConfigs;
  const playerScore = state.scores.player;
  const houseScore = state.scores.house;

  const handlerClickResetGame = e => {
    dispatch({
      type:"RESET_GAME",
      payload:""
    })
  }
  return (
    <div className='results__endgame'>
        <p className="endgame__p">{playerScore > houseScore ? messages.endGame["player"] : messages.endGame["house"]}</p>
        <button className="endgame__btn" onClick={handlerClickResetGame}>reset game</button>
    </div>
  )
}
