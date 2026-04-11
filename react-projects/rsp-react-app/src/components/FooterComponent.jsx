import { useGame } from "../hooks/useGame.js";



export const FooterComponent = () => {
  const { dispatch } = useGame();
  const handleClickShowRules = e => {
    dispatch({
      type: "TOGGLE_RULES",
      payload: ""
    })
  }
  return (
    <footer className="footer">
      <button className="footer__btn" onClick={handleClickShowRules}>rules</button>
    </footer>
  )
}

