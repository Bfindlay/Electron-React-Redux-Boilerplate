import {
    SET_MAIN_COMPONENT
} from '../actions/types';

const INITIAL_STATE = { 
    component: 'dashboard',
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SET_MAIN_COMPONENT : {
            return { ...state, component: action.payload }
        }
        default:
            return { ...state }
    }
}

export default reducer;
