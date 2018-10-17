import React from 'react'
import styled from 'react-emotion'

const BudgetWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: roboto;
  margin: 7.5px 0;
`

const EditButton = styled('div')`
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 40px;
  border-radius: 10px;
`

const CategoryInput = styled('input')`
  font-size: 16px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  height: 40px;
  width: 75px;
  border: 1px solid black;
  margin-right: 10px;
  border-radius: 10px;
`

const Label = styled('div')`
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.bg};
  color: white;
  margin-right: 10px;
  border-radius: 10px;
  font-size: 18px;
  width: 185px;
  transition: all .2s ease-in-out;
  :hover {
    transform: scale(0.8);
  }

  @media (min-width: 1460px) {
    width: 230px;
    font-size: 24px;
  }
`

const BudgetItem = props => {

  return (
    <BudgetWrapper>
      <Label
      bg={props.bg}
      onClick={(e) => props.handleClick(props.category, props.amount, props._id)}
      >
      {props.label}
      </Label>
      <CategoryInput
        category={props.category}
        amount={props.amount}
        onChange={props.onChangeFn}
        value={props.amount.toFixed(2)}
        disabled
      />
    </BudgetWrapper>
  )
}

export default BudgetItem
