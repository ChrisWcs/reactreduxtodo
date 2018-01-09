import React from 'react';

import TodoBtn from '../styledcomps/TodoBtn';
import FlexRow from '../styledcomps/FlexRow';

const Todo = () => (
    <FlexRow>
        <TodoBtn>Toogle</TodoBtn>
        <TodoBtn>Delete</TodoBtn>
    </FlexRow>
);

export default Todo;