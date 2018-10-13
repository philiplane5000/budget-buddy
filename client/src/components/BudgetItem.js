import React from "react";
import styled from "react-emotion";

const BudgetWrapper = styled("div")({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  fontFamily: 'Roboto',
  margin: '7.5px 0'
});

const EditButton = styled('div')`
  cursor: pointer;
  textAlign: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 40px;
  border-radius: 10px;
  background-color: ${props => props.bg}
`

const CategoryInput = styled('input')({
  fontSize: 16,
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
  height: 40,
  width: 75,
  border: '1px solid black',
  marginRight: 10,
  borderRadius: 10,
})

const Label = styled('div')`
  font-family: 'Calibri';
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
