import RulesImg from '../assets/img/images/image-rules.svg';
import CloseIcon from '../assets/img/images/icon-close.svg';
import { useGame } from '../hooks/useGame.js';

export const RulesComponent = () => {
  const { dispatch } = useGame();
  const handlerClickCloseRules = e => {
    dispatch({
      type: "TOGGLE_RULES",
      payload: ""
    })
  }
  return (
    <div className="rules-container">
      <div className="container-bg">
        <img src={RulesImg} alt="rules-bg" className="bg__img" />
      </div>
      <button className="container-btn" onClick={handlerClickCloseRules}>
        <img src={CloseIcon} alt="icon-close" className="btn-img" />
      </button>
    </div>
  )
}

