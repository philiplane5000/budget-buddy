import React from "react";
import styled from "react-emotion";
import { Link } from "react-router-dom";

const ButtonBudget = styled("button")({
  backgroundColor: "#1162bc",
  fontSize: 30,
  color: "white",
  borderRadius: 45,
  margin: 10,
  height: 50,
  width: 250,
  fontFamily: "Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif"
});

const ButtonPurchase = styled("button")({
  backgroundColor: "#1162bc",
  fontSize: 30,
  color: "white",
  borderRadius: 45,
  margin: 10,
  height: 50,
  width: 250,
  fontFamily: "Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif"
});

const Content = styled("div")({
  height: 200,
  width: 400,
  backgroundColor: "#2fc4a6",
  margin: "0 auto",
  marginTop: 50,
  marginBottom: 20,
  borderRadius: 10
});

const Header = styled("div")({
  textAlign: "center",
  fontFamily: "Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif",
  color: 'white',
  margin: '0 auto',
  justifyContent: 'center',
  alignItems: 'center'
});

const Wrapper = styled("div")({
  height: 400
});

const Main = () => {
  return (
    <Wrapper>
        <Content>
          <Header>
            <h2>You're on track!</h2>
            <h2>You've spent $1500 so far!</h2>
          </Header>
        </Content>
      <ButtonPurchase>
        <Link to="/purchase" style={{ textDecoration: "none", color: "white" }}>
          Make a Purchase
        </Link>
      </ButtonPurchase>
      <ButtonBudget>
        <Link to="/budget" style={{ textDecoration: "none", color: "white" }}>
          Edit Budget
        </Link>
      </ButtonBudget>
    </Wrapper>
  );
};

export default Main;
