import React from 'react';
import styled from 'react-emotion';

const BudgetWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: roboto;
  margin: 7.5px 0;
`;

const EditButton = styled('div')`
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 40px;
  border-radius: 10px;
  background-color: ${props => props.bg}
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
`;

const Label = styled('div')`
  font-family: 'roboto, sans-serif';
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1162bc;
  color: white;
  margin-right: 10px;
  border-radius: 10px;
  font-size: 18px;
  width: 145px;
  @media (min-width: 1460px) {
    width: 185px;
    font-size: 22px;
  }
`

const BudgetItem = props => {

  return (
    <BudgetWrapper>
      <Label>{props.label}</Label>
      <CategoryInput
        category={props.category}
        amount={props.amount}
        onChange={props.onChangeFn}
        value={props.amount.toFixed(2)}
        disabled
      />
      <EditButton
        onClick={(e) => props.handleClick(props.category, props.amount, props._id)}
        bg={props.bg}
      >
        <i class="far fa-edit"></i>
      </EditButton>
    </BudgetWrapper>
  )
}

export default BudgetItem
