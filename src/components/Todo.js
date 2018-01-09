import React from 'react';
import PropTypes from 'prop-types';

import TodoTxt from '../styledcomps/TodoTxt';
import TodoBtn from '../styledcomps/TodoBtn';
import FlexRow from '../styledcomps/FlexRow';

const Todo = ({todo, deleteFunc, toogleFunc}) => (
    <FlexRow>
        <TodoTxt>{todo}</TodoTxt>
        <TodoBtn onClick={toogleFunc}>Toogle</TodoBtn>
        <TodoBtn onClick={deleteFunc}>Delete</TodoBtn>
    </FlexRow>
);

Todo.propTypes = {
    todo: PropTypes.string,
    deleteFunc: PropTypes.func,
    toogleFunc: PropTypes.func,
};

export default Todo;