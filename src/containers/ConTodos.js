import { connect } from 'react-redux';

import { createDeleteTodo, createToggleTodo } from '../actions/actionCreators';

import Todos from '../components/Todos';

const mapStateToProps = (state) => ({
    list: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
    deleteFunc: (index) => () => {
        dispatch(createDeleteTodo(index));
    },
    toggleFunc: (index) => () => {
        dispatch(createToggleTodo(index));
    },
});

const ConTodos = connect(mapStateToProps, mapDispatchToProps)(Todos);

export default ConTodos;