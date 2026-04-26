import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect } from "react";
import { useRestApiCountries } from "../hooks/useRestApiCountries.js";

export const HeaderComponent = () => {
  const { state, dispatch } = useRestApiCountries();
  const { theme } = state.ui;

  const handlerBtnToggleMode = (e) => {
    dispatch({
      type: "TOGGLE_THEME",
    });
  };
  const themeClass = theme ? "light-mode" : "dark-mode";
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      dispatch({
        type: "SET_THEME",
        payload: savedTheme === "light-mode"
      });
    }
  }, []);

  useEffect(() => {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(themeClass);
    localStorage.setItem("theme", themeClass);
  }, [themeClass]);
  return (
    <header className="header">
      <h1 className="header__title">Where in the world?</h1>
      <button className="header__btn" onClick={handlerBtnToggleMode}>
        <FontAwesomeIcon icon={theme ? faMoon : faSun} />
        {theme ? "Dark Mode" : "Light Mode"}
      </button>
    </header>
  );
};
