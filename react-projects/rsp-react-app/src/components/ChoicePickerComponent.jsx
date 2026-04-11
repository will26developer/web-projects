import Paper from '../assets/img/images/icon-paper.svg';
import Scissors from '../assets/img/images/icon-scissors.svg';
import Rock from '../assets/img/images/icon-rock.svg';
import { useGame } from '../hooks/useGame.js';

export const ChoicePickerComponent = () => {
  const { dispatch } = useGame();
  const handlerClickChoice = e => {
    const element = e.target.closest("[data-choice]");
    if (!element) return;
    const player = element.dataset.choice;

    dispatch({
      type: "PLAY",
      payload: player
    })

  }
  return (
    <section className="main__choice" onClick={handlerClickChoice}>
      <button className="choice__btn" data-choice="paper">
        <img src={Paper} alt="icon-paper" className="btn__pick-logo" />
      </button>
      <button className="choice__btn" data-choice="scissors">
        <img src={Scissors} alt="icon-scissors" className="btn__pick-logo" />
      </button>
      <button className="choice__btn" data-choice="rock">
        <img src={Rock} alt="icon-rock" className="btn__pick-logo" />
      </button>
    </section>
  )
}

