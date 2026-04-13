import { gameConfigs } from "../configs/gameConfigs";
import { useGame } from "../hooks/useGame";

export const HeaderComponent = () => {
    const {imgStorage} = gameConfigs;
    const {state} = useGame();
    const playerScore = state.scores.player;
    const houseScore = state.scores.house;
    return (
        <header className="header">
            <div className="header__logo">
                <img src={imgStorage.logo} alt="logo-rock-scissors-paper"  className="logo__img"/>
            </div>
            <section className="header__panel">
                <div className="panel__score">
                    <span className="score__span">player's score</span>
                    <p className="score__p">{playerScore}</p>
                </div>
                <div className="panel__score">
                    <span className="score__span">house's score</span>
                    <p className="score__p">{houseScore}</p>
                </div>
            </section>
        </header>
    )
}