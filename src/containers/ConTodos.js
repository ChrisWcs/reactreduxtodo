import { connect } from 'react-redux';

import Todos from '../components/Todos';

const mapStateToProps = (state) => ({
    list:,
});

// they need to be curried....
const mapDispatchToProps = (dispatch) => ({
    deleteFunc:,
    toggleFunc:,
});

const ConTodos = connect(mapStateToProps, mapDispatchToProps)(Todos);

export default ConTodos;