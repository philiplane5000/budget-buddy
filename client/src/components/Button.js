import React from 'react'
import styled from 'react-emotion'

const Btn = styled('button')`
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    color: white;
    height: 70px;
    width: 210px;
    min-width: 50px;
    background-color: #1162bc;
    margin: 10px;
    border-radius: 10px;
    border: none;
    font-size: 25px;
    outline: none;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    transition: all .2s ease-in-out;
    :hover {
        transform: scale(1.025);
        background-color: #3de28c;
    }
`

const Button = props => (
    <Btn {...props}>
    {props.children}
    </Btn>
)

export default Button
