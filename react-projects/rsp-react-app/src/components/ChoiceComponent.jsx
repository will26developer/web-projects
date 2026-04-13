import React from 'react'
import { gameConfigs } from '../configs/gameConfigs';
import { useGame } from "../hooks/useGame";
export const ChoiceComponent = () => {
  const {imgStorage, classStorage} = gameConfigs;
  const {dispatch} = useGame();

  const handlerClickChoicePicker = e => {
    const element = e.target.closest("[data-choice]");
    if (!element) return;
    const player = element.dataset.choice;
    
    dispatch({
        type:"PLAY",
        payload:player
    })
  }
  return (
    <section className="main__choices" onClick={handlerClickChoicePicker}>
        <button className={`choice__btn ${classStorage.paper}`} data-choice="paper">
            <img src={imgStorage.paper} alt="icon-paper" className="btn__img" />
        </button>
        <button className={`choice__btn ${classStorage.scissors}`} data-choice="scissors">
            <img src={imgStorage.scissors} alt="icon-scissor" className="btn__img" />
        </button>
        <button className={`choice__btn ${classStorage.rock}`} data-choice="rock">
            <img src={imgStorage.rock} alt="icon-rock" className="btn__img" />
        </button>
    </section>
  )
}
