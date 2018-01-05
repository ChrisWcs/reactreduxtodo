import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, CHANGE_INPUT } from '../actions/actions';
import initialState from './initialState';

const reducer = (state = initialState(), action) => {
    switch(action.type){
        case ADD_TODO:
        case DELETE_TODO:
        case TOGGLE_TODO:
        case CHANGE_INPUT:
            return {
                ...state,
                inputValue: action.newValue
            };
        default:
            return state;
    }
};

export default reducer;