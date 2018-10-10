import React from 'react'
import styled from 'react-emotion'

const Icon = styled('div')`
    cursor: pointer;
    font-family: 'Calibri';
    color: white;
    text-transform: uppercase;
    min-width: 100px;
    border-radius: 15px;
    padding: 10px;
    background: ${props => props.bg}; 
    border: 1px solid rgba(0,0,0,0.35);
`

const BudgetIcon = props => (
    <Icon
        bg={props.bg}
        // key={props.key}
        amount={props.amount}
        label={props.label}
        _id={props._id}
        onClick={(e) => props.handleClick(props.amount, props.label, props._id)}
    >
        {props.children}
    </Icon>
)
export default BudgetIcon
