import React from 'react'
import { useGame } from '../hooks/useGame'
import { gameConfigs } from '../configs/gameConfigs';
import { MessageOnGameComponent } from "./MessageOnGameComponent";
import { MessageEndGameComponent } from "./MessageEndGameComponent";

export const ResultsComponent = () => {
  const {state} = useGame();
  const {round,playerChoice,houseChoice} = state.game;
  const {imgStorage, classStorage, maxRound} = gameConfigs;
  return (
    <section className={`results__pick ${classStorage[playerChoice]}`}>
        <div className="results__pick">
            <img src={imgStorage[playerChoice]} alt="pick-player" className="pick__img" />
        </div>
        {round <= maxRound ? <MessageOnGameComponent/> : <MessageEndGameComponent/>}
        <div className={`results__pick ${classStorage[houseChoice]}`}>
            <img src={imgStorage[houseChoice]} alt="pick-house" className="pick__img" />
        </div>
    </section>
  )
}
