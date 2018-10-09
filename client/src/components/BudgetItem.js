import React from "react";
import styled from "react-emotion";

const BudgetContent = styled("div")({
  height: 65,
  width: 350,
  backgroundColor: "#2fc4a6",
  color: 'whitesmoke',
  paddingTop: '5px'
});

const CategoryInput = styled('input')({
  textAlign: 'center',
  border: '1px solid black',
  borderRadius: 5,
  marginTop: '5px'
})

const Label = styled('div')({
  fontSize: 20
})

const BudgetItem = ({ label, onChangeFn, name, value }) => {
  return (
    <BudgetContent>
      <Label>{label}</Label>
      <CategoryInput
        name={name}
        value={value}
        onChange={onChangeFn}
      />
    </BudgetContent>
  )
}

export default BudgetItem
