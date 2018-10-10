import React from 'react';
import styled from 'react-emotion';

const Btn = styled('button')(
    {
        fontFamily: 'Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif',
        cursor: 'pointer',
        color: 'white',
        height: '60px',
        width: 190,
        minWidth: 50,
        backgroundColor: '#092d63',
        margin: 10,
        borderRadius: 50,
        border: 'none',
        fontSize: 25,
        border: '2px solid #2fc4a6'
    }
)

const Button = props => (
    <Btn {...props}>
    {props.children}
    </Btn>
)

export default Button;
