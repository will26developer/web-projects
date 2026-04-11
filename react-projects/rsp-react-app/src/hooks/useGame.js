import { useContext } from "react";
import { RspContext } from "../context/RspContext.jsx";


export const useGame = () => useContext(RspContext);
