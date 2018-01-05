import {ADD_TODO, DELETE_TODO, TOGGLE_TODO, CHANGE_INPUT} from './actions';

export const createAddtodo = () => ({
    type: ADD_TODO,
});

export const createDeleteTodo = (index) => ({
    type: DELETE_TODO,
    index,
});

export const createToggleTodo = (index) => ({
    type: TOGGLE_TODO,
    index,
});

export const createChangeInput = (newValue) => ({
    type: CHANGE_INPUT,
    newValue,
});