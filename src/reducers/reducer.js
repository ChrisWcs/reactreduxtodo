import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, CHANGE_INPUT } from '../actions/actions';
import initialState from './initialState';

const reducer = (state = initialState(), action) => {
    console.log(action);
    switch(action.type){
        case ADD_TODO:
            return {
                todos: [...state.todos, {
                    name: state.inputValue,
                    toggle: false,
                }],
                inputValue: "",
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: [...state.todos.slice(0, action.index), ...state.todos.slice(action.index + 1)],
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: [...state.todos.slice(0, action.index), 
                {
                    name: state.todos[action.index].name,
                    toggle: true,
                }, 
                ...state.todos.slice(action.index + 1)],
            };
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