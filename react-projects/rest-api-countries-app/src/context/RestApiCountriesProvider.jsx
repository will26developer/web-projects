import { useReducer } from "react";
import { RestApiCountriesContext } from "./RestApiCountriesContext";
import { restApiCountriesReducer } from "../reducer/restApiCountriesReducer";
import { initialState } from "../state/initialState";

export const RestApiCountriesProvider = ({children}) => {
    const [state, dispatch] = useReducer(restApiCountriesReducer, initialState);

    return(
        <RestApiCountriesContext.Provider value={{state,dispatch}}>
            {children}
        </RestApiCountriesContext.Provider>
    )
}