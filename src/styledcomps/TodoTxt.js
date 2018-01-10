import styled from 'styled-components';

const TodoTxt = styled.h1`
    font-family: Arial;
    border-bottom: solid 1px black;
    text-decoration: ${props => props.toggled ? 'line-through' : 'none'}
`;

export default TodoTxt;