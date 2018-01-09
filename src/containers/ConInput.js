import { connect } from 'react-redux';
import { createAddtodo, createChangeInput } from '../actions/actionCreators';
import Input from '../components/Input';

const mapStateToProps = (state) => ({
    value: state.inputValue
});

const mapDispatchToProps = (dispatch) => ({
    handleValueFunc: (event) => {
        let {value} = event.target;
        dispatch(createChangeInput(value));
    }, 
    addFunc: () => {
        dispatch(createAddtodo());
    }
});


const ConInput = connect(mapStateToProps, mapDispatchToProps)(Input);

export default ConInput;