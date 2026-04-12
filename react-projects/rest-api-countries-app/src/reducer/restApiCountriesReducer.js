

export const restApiCountriesReducer = (state,action) => {
    switch (action.type) {
        case "SET_COUNTRIES": {
            return {
                ...state,
                data:{
                    ...state.data,
                    countries:action.payload
                }
            }
        }
        case "SET_FILTER_NAME": {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    name:action.payload
                }
            }
        }
        case "SET_FILTER_REGION": {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    region:action.payload
                }
            }
        }
        case "SET_LOADING" : {
            return {
                ...state,
                ui:{
                    ...state.ui, 
                    loading:action.payload
                }
            }
        }
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


