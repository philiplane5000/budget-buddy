import React from "react";
import styled from "react-emotion";

const BudgetWrapper = styled("div")({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  fontFamily: 'Roboto',
  margin: '7.5px 0'
});

const EditButton = styled('div')({
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    width: 40,
    backgroundColor: '#dc3545',
    borderRadius: 10,
  })

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

const Label = styled('div')({
  fontFamily: 'Calibri',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#1162bc',
  color: 'white',
  marginRight: 10,
  borderRadius: 10,
  fontSize: 20,
  width: 200
})

const BudgetItem = props => {
  return (
    <BudgetWrapper>
      <Label>{props.label}</Label>
      <CategoryInput
        category={props.category}
        amount={props.amount}
        onChange={props.onChangeFn}
        value={props.amount}
      />
      <EditButton category={props.category} amount={props.amount} onClick={()=> console.log(props)}>+</EditButton>
    </BudgetWrapper>
  )
}

export default BudgetItem
