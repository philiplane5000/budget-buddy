import React from 'react';
import styled from 'react-emotion';

const Btn = styled('button')(
    {
        fontFamily: 'Roboto',
        cursor: 'pointer',
        color: 'white',
        height: '60px',
        width: 150,
        minWidth: 50,
        backgroundColor: '#092d63',
        margin: 10,
        borderRadius: 10,
        border: 'none'
    }
)

const Button = props => (
    <Btn {...props}>
    {props.children}
    </Btn>
)

export default Button;
