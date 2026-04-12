import {gameConfigs} from "../configs/gameConfigs"

export const getHouseChoices = () => {
    const {options} = gameConfigs;
    return options[Math.floor(Math.random() * options.length)];
}