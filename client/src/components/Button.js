import React from 'react';
import styled from 'react-emotion';

const Btn = styled('button')(
    {
        fontFamily: 'Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif',
        cursor: 'pointer',
        color: 'white',
        height: '60px',
        width: 200,
        minWidth: 50,
        backgroundColor: '#1162bc',
        margin: 10,
        borderRadius: 10,
        border: 'none',
        fontSize: 25,
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);',
    }
)

const Button = props => (
    <Btn {...props}>
    {props.children}
    </Btn>
)

export default Button;
