import { useReducer } from "react";
import { restApiCountriesReducer } from "../reducer/restApiCountriesReducer.js";
import { RestApiCountriesContext } from "./RestApiCountriesContext";
import { initialState } from "../state/initialState.js";

export const RestApiCountriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(restApiCountriesReducer, initialState);

  return (
    <RestApiCountriesContext.Provider value={{ state, dispatch }}>
      {children}
    </RestApiCountriesContext.Provider>
  )
}
