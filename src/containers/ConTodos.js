import { connect } from 'react-redux';

import { createDeleteTodo, createToggleTodo } from '../actions/actionCreators';

import Todos from '../components/Todos';

const mapStateToProps = (state) => ({
    list: state.todos,
});

// they need to be curried....
const mapDispatchToProps = (dispatch) => ({
    deleteFunc:,
    toggleFunc:,
});

const ConTodos = connect(mapStateToProps, mapDispatchToProps)(Todos);

export default ConTodos;