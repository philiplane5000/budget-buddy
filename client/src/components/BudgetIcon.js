import React from 'react'
import styled from 'react-emotion'

const Icon = styled('div')`
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    color: white;
    text-transform: uppercase;
    min-width: 100px;
    border-radius: 10px;
    padding: 10px;
    background: ${props => props.bg}; 
    border: 1px solid rgba(0,0,0,0.35);
    transition: all .2s ease-in-out;
    :hover {
        transform: scale(1.025);
    }
`

const BudgetIcon = props => (
    <Icon
        bg={props.bg}
        key={props.key}
        amount={props.amount}
        label={props.label}
        onClick={(e) => props.handleClick(props.amount, props.category)}
    >
        {props.children}
    </Icon>
)
export default BudgetIcon
