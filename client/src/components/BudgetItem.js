import React from 'react'
import styled from 'react-emotion'

const BudgetWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: roboto;
  margin: 7.5px 0;
`

const CategoryInput = styled('input')`
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
  text-transform: uppercase;
  background: ${props => props.bg};
  color: white;
  margin-right: 10px;
  border-radius: 10px;
  width: 185px;
  transition: all .2s ease-in-out;
  :hover {
    transform: scale(1.025);
  }

  @media (min-width: 1460px) {
    width: 230px;
    font-size: 18px;
  }
`

const BudgetItem = props => {

  return (
    <BudgetWrapper>
      <Label
        bg={props.bg}
        onClick={(e) => props.handleCategorySelect(props.category, props.amount, props._id)}
      >
        {props.category}
      </Label>
      <CategoryInput
        key={props._id}   
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
