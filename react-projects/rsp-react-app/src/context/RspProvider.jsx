import { useReducer } from "react";
import { initialState } from "../state/initialState";
import { RspContext } from "./RspContext";
import { rspReducer } from "../reducer/rspReducer";

export const RspProvider = ({children}) => {
    const [state, dispatch] = useReducer(rspReducer, initialState);

    return(
        <RspContext.Provider value={{state,dispatch}}>
            {children}
        </RspContext.Provider>
    )
}