
import {
    SET_MAIN_COMPONENT,  MESSAGE, CLEAR_MESSAGE,
} from './types';

export const setMainComponent = component => {
    return { type: SET_MAIN_COMPONENT, payload: component }
}

export const sendSnackMessage = message => {
    return { type: MESSAGE, payload: message }
}

export const clearSnackMessage = () => {
    return { type: CLEAR_MESSAGE, payload: null }
}

