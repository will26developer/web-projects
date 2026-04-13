import React from 'react'
import { useGame } from '../hooks/useGame'

export const FooterComponent = () => {
  const {dispatch} = useGame();

  const handlerClickRules = e => {
    dispatch({
      type: "TOGGLE_RULES",
      payload:""
    })
  }
  return (
    <footer className="footer">
        <button className="footer__btn" onClick={handlerClickRules}>rules</button>
    </footer>
  )
}
