import React from "react";
import styled from "react-emotion";

const BudgetWrapper = styled("div")({
  height: 65,
  width: 350,
  backgroundColor: "#d5d6d2",
  fontFamily: 'Roboto',
  color: '#092d63',
  paddingTop: '5px'
});

const CategoryInput = styled('input')({
  textAlign: 'center',
  border: '1px solid black',
  borderRadius: 15,
  marginTop: '5px'
})

const Label = styled('div')({
  fontSize: 20
})

const BudgetItem = ({ label, onChangeFn, name, value }) => {
  return (
    <BudgetWrapper>
      <Label>{label}</Label>
      <CategoryInput
        name={name}
        value={value}
        onChange={onChangeFn}
      />
    </BudgetWrapper>
  )
}

export default BudgetItem
