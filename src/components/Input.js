import React from 'react';
import PropTypes from 'prop-types';

import FlexRow from '../styledcomps/FlexRow';
import InputBtn from '../styledcomps/InputBtn';
import InputField from '../styledcomps/InputField';

const Input = ({value, handleValueFunc, addFunc}) => (
    <FlexRow>
        <InputField type="text" value={value} onChange={handleValueFunc}/>
        <InputBtn onClick={addFunc}> Add Todo </InputBtn>
    </FlexRow>
);

Input.propTypes = {
    value: PropTypes.string,
    handleValueFunc: PropTypes.func,
    addFunc: PropTypes.func,
};

export default Input;