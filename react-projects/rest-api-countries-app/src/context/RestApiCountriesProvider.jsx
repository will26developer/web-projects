import { useReducer} from "react";
import {initialState} from "../state/initialState.js";
import { restApiCountriesReducer} from "../reducer/restApiCountriesReducer.js"
import { RestApiCountriesContext } from "./RestApiCountriesContext.jsx";

export const RestApiCountriesProvider = ({children}) => {
    const [state,dispatch] = useReducer(restApiCountriesReducer,initialState);

    return(
        <RestApiCountriesContext.Provider value={{state,dispatch}}>
            {children}
        </RestApiCountriesContext.Provider>
    )
} 