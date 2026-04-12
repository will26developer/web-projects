import React from 'react'
import { gameConfigs } from '../configs/gameConfigs';

export const ChoicesComponent = () => {
  const {imgStorage, classStorage} = gameConfigs;
  return (
    <section className="main__choices">
        <button className={`choice__btn ${classStorage.paper}`} data-choices="paper">
            <img src={imgStorage.paper} alt="paper-picker" className="btn__icon" />
        </button>
        <button className={`choice__btn ${classStorage.scissors}`} data-choices="scissors">
            <img src={imgStorage.scissors} alt="scissors-picker" className="btn__icon" />
        </button><button className={`choice__btn ${classStorage.rock}`} data-choices="rock">
            <img src={imgStorage.rock} alt="rock-picker" className="btn__icon" />
        </button>
    </section>
  )
}
