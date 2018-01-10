import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

import FlexCol from '../styledcomps/FlexCol';

const Todos = ({ list, deleteFunc, toggleFunc}) => (
    <FlexCol>
        { list.map( (x, i) => <Todo key={i} todo={x.name} deleteFunc={deleteFunc(i)} toggleFunc={toggleFunc(i)}/>) }
    </FlexCol>
);

Todos.propTypes = {
    list: PropTypes.array,
    deleteFunc: PropTypes.func,
    toggleFunc: PropTypes.func,
};

export default Todos;