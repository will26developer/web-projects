import { gameConfigs } from "../configs/gameConfigs.js";


export const getHouseChoice = () => {
  const { options } = gameConfigs;
  return options[Math.floor(Math.random() * options.length)];
}
