import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRestApiCountries } from "../hooks/useRestApiCountries";
import { icons } from "../icons/icons.js";
import { useEffect } from "react";

export const HeaderComponent = () => {
  const { state, dispatch } = useRestApiCountries();
  const theme = state.ui.theme;

  const isLight = theme ? "light-mode" : "dark-mode";

  const handleToggleClickMode = e => {
    dispatch({
      type: "TOGGLE_THEME"
    })
  }

  useEffect(() => {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(isLight);
    localStorage.setItem("theme", isLight);
  }, [theme])
  return (
    <header className="header">
      <h1 className="header__title">Where in the world?</h1>
      <button type="button" onClick={handleToggleClickMode} className="header__btn"><FontAwesomeIcon icon={theme ? icons.moon : icons.sun} />{theme ? "Dark Mode" : "Light Mode"}</button>
    </header>
  )
}

