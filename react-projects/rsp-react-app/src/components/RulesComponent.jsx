import React from 'react'
import { gameConfigs } from '../configs/gameConfigs'
import { useGame } from '../hooks/useGame';

export const RulesComponent = () => {
  const { imgStorage } = gameConfigs;
  const { dispatch } = useGame();
  const handlerClickCloseRules = e => {
    dispatch({
      type: "TOGGLE_RULES",
      payload: ""
    })
  }
  return (
    <div className='rules-container'>
      <div className="rules-modal">
        <div className="container-img">
          <img src={imgStorage.rules} alt="rules" className="img-rules" />
        </div>
        <button className="container-btn" onClick={handlerClickCloseRules}>
          <img src={imgStorage.close} alt="icon-close" className='btn__img' />
        </button>
      </div>
    </div>
  )
}
