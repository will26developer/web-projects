import { RspContext } from "../context/RspContext";
import { useReducer } from "react";
import { initialState } from "../state/state.js";
import { rspReducer } from "../reducer/rspReducer.js";


export const RspProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rspReducer, initialState);

  return (
    <RspContext.Provider value={{ state, dispatch }}>
      {children}
    </RspContext.Provider>
  )
}
