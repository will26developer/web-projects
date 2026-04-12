import React, { useEffect } from 'react';
import { icons } from '../icons/icons';
import { useRestApiCountries } from "../hooks/useRestApiCountries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeaderComponent = () => {
  const {state, dispatch} = useRestApiCountries();

  const handleClickBtnTheme = e => {
    dispatch({
        type:"TOGGLE_THEME"
    })
  }

  const isLight = state.ui.theme;

  useEffect(() => {
    document.body.classList.remove("light-mode","dark-mode");
    document.body.classList.add(isLight ? "light-mode" : "dark-mode")
  },[isLight])


  return (
    <header className="header">
        <h1 className="header__title">Where in the world?</h1>
        <button className="header__btn" onClick={handleClickBtnTheme}><FontAwesomeIcon icon={isLight ? icons.moon : icons.sun}/>
          {isLight ? "Dark Mode" : "Light Mode"}
        </button>
    </header>
  )
}
