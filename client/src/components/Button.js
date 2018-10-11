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
        backgroundColor: '#1162bc',
        margin: 10,
        borderRadius: 30,
        border: 'none',
        fontSize: 25,
    }
)

const Button = props => (
    <Btn {...props}>
    {props.children}
    </Btn>
)

export default Button;
