import React from "react";
import styled from "react-emotion";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";

const MainWrapper = styled('div')(
  {
    border: '1px solid #092d63',
    padding: 40,
    borderRadius: 10,
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);',
    backgroundColor: '#d5d6d2'
  }
)


const Main = () => {
  return (
    <MainWrapper>
      <Header />
      <Button>
        <Link to="/purchase" style={{ textDecoration: "none", color: "white" }}>
          Make a Purchase
        </Link>
      </Button>
      <Button>
        <Link to="/budget" style={{ textDecoration: "none", color: "white" }}>
          Edit Budget
        </Link>
      </Button>
    </MainWrapper>
  );
};

export default Main;
