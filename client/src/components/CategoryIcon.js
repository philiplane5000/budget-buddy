import React from 'react'
import styled from 'react-emotion'

const IconWrapper = styled('div')`
    display: flex;
    justify-content: center;
`

const Icon = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    width: 350px;
    min-width: 250px;
    min-height: 140px;
    border-radius: 5px;
    margin: 20px 10px;
    background: ${props => props.bg}; 
    border: 1px solid rgba(0,0,0,0.35);
`

const Category = styled('div')`
    font-size: 24px;
    color: white;
    margin-top: 10px;
`

const Balance = styled('div')`
    font-size: 62px;
    color: white;
    margin-bottom: 10px;
`

const CategoryIcon = props => (
    <IconWrapper>
        <Icon bg={props.bg}>
            <Category>
                {props.category}
            </Category>
            <Balance>
                {props.amount}
            </Balance>
        </Icon>
    </IconWrapper>
)

export default CategoryIcon
