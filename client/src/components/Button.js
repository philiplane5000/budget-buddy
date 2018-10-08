import React from "react";
import styled from "react-emotion";

const Btn = styled('button')`
    font-family: 'Calibri';
    cursor: pointer;
    color: white;
    height: 60px;
    width: ${props => props.width};
    min-width: ${props => props.minWidth};
    background-color: ${props => props.bg};
    margin-top: 20px;
    border-radius: 10px;
    border: none;
`;

const Button = props => (
    <Btn bg={props.bg} width={props.width} minWidth={props.minWidth} onClick={props.handlePurchase}>
    {props.children}
    </Btn>
)

export default Button;