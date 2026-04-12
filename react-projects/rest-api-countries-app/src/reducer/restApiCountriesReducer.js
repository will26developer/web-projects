

export const restApiCountriesReducer = (state,action) => {
    switch (action.type) {
        case "TOGGLE_THEME" : {
            return {
                ...state,
                ui: {
                    ...state.ui,
                    theme:!state.ui.theme
                }
            }
        }
        default:
            return state;
    }
}


