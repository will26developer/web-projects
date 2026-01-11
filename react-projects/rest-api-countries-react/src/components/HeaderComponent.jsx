import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect, useState } from "react";

const HeaderComponent = () => {
  const [ darkMode , setDarkMode ] = useState(false);
  const changeMode = () => {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
     (darkMode) ? document.body.className = "dark-mode" : document.body.className = "light-mode";
  }, [darkMode]);

  return (
    <header className="header">
      <h1 className="header__title">Where in the world?</h1>
      <button className="header__btn" onClick={changeMode}>
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="btn__icon"/>
        <span className="btn__span">{darkMode ? "Light Mode" : "Dark Mode"}</span>
      </button>
    </header>
  );
}

export default HeaderComponent;
