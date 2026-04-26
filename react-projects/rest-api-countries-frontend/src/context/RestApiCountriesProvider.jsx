import { useReducer } from "react"
import { initialState } from "../state/initialState"
import { restApiCountriesReducer } from "../reducers/restApiCountriesReducer"
import { RestApiCountriesContext } from "./RestApiCountriesContext"


export const RestApiCountriesProvider = ({children}) => {
    const [state,dispatch] = useReducer(restApiCountriesReducer, initialState);

    return (
        <RestApiCountriesContext.Provider value={{state,dispatch}}>
            {children}
        </RestApiCountriesContext.Provider>
    )
}