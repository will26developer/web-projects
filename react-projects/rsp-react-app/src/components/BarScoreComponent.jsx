import Logo from "../assets/img/images/logo.svg";
import { useGame } from "../hooks/useGame.js";

export const BarScoreComponent = () => {
  const { state } = useGame();
  const { scores } = state;
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="logo-rock-scissors-paper" className="logo__bg" />
      </div>
      <section className="header__score">
        <div className="scores__container">
          <span className="<container__title">player's score</span>
          <p className="container__p" id="">{scores.player}</p>
        </div>
        <div className="scores__container">
          <span className="container__title">house's score</span>
          <p className="container__p">{scores.house}</p>
        </div>
      </section>
    </header>
  )
}

