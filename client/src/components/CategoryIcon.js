import React from 'react'
import styled from 'react-emotion'

const IconWrapper = styled('div')(
    {
        display: 'flex',
        justifyContent: 'center',
    }
)

const Icon = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    font-family: 'Calibri';
    text-transform: uppercase;
    width: 350px;
    min-width: 250px;
    border-radius: 10px;
    margin: 20px 10px 20px 10px;
    padding: 20px;
    background: ${props => props.bg}; 
    border: 1px solid rgba(0,0,0,0.35);
`

const Category = styled('div')`
    font-size: 24px;
    color: white;
`

const Balance = styled('div')`
    font-size: 62px;
    color: white;
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

export default CategoryIcon;
