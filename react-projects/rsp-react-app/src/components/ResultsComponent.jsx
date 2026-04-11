import { useGame } from "../hooks/useGame";
import { MessageOnGameComponent } from "../components/MessageOnGameComponent.jsx";
import { MessageEndGameComponent } from "../components/MessageEndGameComponent.jsx";
import { gameConfigs } from "../configs/gameConfigs.js";

export const ResultsComponent = () => {
  const { state } = useGame();
  const { round, playerChoice, houseChoice } = state.game;
  const { imgStorage, renderStorage, maxRound } = gameConfigs;
  return (
    <section className="main__results">
      <div className={`results__picker ${renderStorage[playerChoice]}`}>
        <img src={imgStorage[playerChoice]} alt={`icon-${playerChoice}`} />
      </div>
      {round < maxRound ? <MessageOnGameComponent /> : <MessageEndGameComponent />}
      <div className={`results__picker ${renderStorage[houseChoice]}`}>
        <img src={imgStorage[houseChoice]} alt={`icon-${houseChoice}`} />
      </div>
    </section>
  )
}

