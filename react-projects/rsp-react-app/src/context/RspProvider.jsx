import { useReducer } from "react";
import { initialState } from "../state/initialState";
import { rspReducer } from "../reducer/rspReducer";
import { RspContext } from "./RspContext";


export const RspProvider = ({children}) => {
    const { state, dispatch } = useReducer(rspReducer,initialState);

    return(
        <RspContext.Provider value={{state,dispatch}}>
            {children}
        </RspContext.Provider>
    )
}