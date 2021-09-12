
enum ActionTypes {
    SET_GLOBAL_THEME = "atlant/localization/SET_GLOBAL_THEME"
}

type Action = {
    type: ActionTypes,
    globalTheme: Themes
}

export enum Themes {
    DARK = "dark",
    LIGHT = "light"
}

type LocalizationState = {
    globalTheme: Themes
}

const initialState = {
    globalTheme: Themes.LIGHT
}

const localizationReduser = (state = initialState, action: Action): LocalizationState => {
    switch(action.type) {
        case ActionTypes.SET_GLOBAL_THEME: {
            return {
                ...state,
                globalTheme: action.globalTheme
            }
        }
        default:
            return state;
    }
}

export const setGlobalTheme = (globalTheme: Themes): Action => {
    return {type: ActionTypes.SET_GLOBAL_THEME, globalTheme}
}

export default localizationReduser;