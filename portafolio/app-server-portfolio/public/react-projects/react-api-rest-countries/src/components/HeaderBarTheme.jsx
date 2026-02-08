import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

const HeaderBarTheme = () => {
    const [theme,setTheme] = useState("light-theme");
    useEffect(() => {
        document.body.className = theme;
    },[theme])

    const toggleTheme = () => {
        setTheme(prev => 
            prev === "light-theme" ? "dark-theme":"light-theme"
        );
    };
    return(
        <header className="header">
            <h1 className="header__title">Where in the world?</h1>
            <button type="button" className="header__btn" onClick={toggleTheme}>
                <FontAwesomeIcon icon={theme === "light-theme" ? faMoon : faSun}/> {theme === "light-theme" ? "Dark mode": "Light Mode"}
            </button>
        </header>
    )
}

export default HeaderBarTheme; 