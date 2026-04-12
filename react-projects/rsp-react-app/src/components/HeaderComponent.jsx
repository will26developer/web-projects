import React from 'react'
import { gameConfigs } from '../configs/gameConfigs';

export const HeaderComponent = () => {
  const { imgStorage } = gameConfigs;
  return (
    <header className="header">
        <div className="header__logo">
            <img src={imgStorage.logo} alt="logo-rock-scissors-paper" className="logo__img" />
        </div>
        <section className="header__panel">
            <div className="panel__score">
                <span className="score__span">player's scores</span>
                <p className="score__p">0</p>
            </div>
            <div className="panel__score">
                <span className="score__span">house's scores</span>
                <p className="score__p">0</p>
            </div>
        </section>
    </header>
  )
}
