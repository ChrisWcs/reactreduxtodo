import React from 'react';
import PropTypes from 'prop-types';

import TodoTxt from '../styledcomps/TodoTxt';
import TodoBtn from '../styledcomps/TodoBtn';
import FlexRow from '../styledcomps/FlexRow';

const Todo = ({todo, deleteFunc, toggleFunc, toggled}) => (
    <FlexRow>
        <TodoTxt toggled={toggled}>{todo}</TodoTxt>
        <TodoBtn onClick={toggleFunc}>Toogle</TodoBtn>
        <TodoBtn onClick={deleteFunc}>Delete</TodoBtn>
    </FlexRow>
);

Todo.propTypes = {
    todo: PropTypes.string,
    deleteFunc: PropTypes.func,
    toggleFunc: PropTypes.func,
    toggled: PropTypes.bool,
};

export default Todo;