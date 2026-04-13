import { useContext } from "react";
import { RspContext } from "../context/RspContext";

export const useGame = () => useContext(RspContext);