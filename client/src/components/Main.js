import React from "react";
import styled from "react-emotion";
import { Link } from "react-router-dom";


const ButtonBudget = styled('button')(
    {
        backgroundColor: '#2ce28c',
        fontSize: 40,
        color: 'white',
        borderRadius: 20,
        margin: 10,
        border: '1px solid black'
    }
)

const ButtonPurchase = styled('button')(
    {
        backgroundColor: '#2ce28c',
        fontSize: 40,
        color: 'white',
        borderRadius: 20


    }
)

const Wrapper = styled("div")({
  height: 400,
//   textAlign: 'center',
  color: '#092d63'
});

const Main = () => {
  return (
    <Wrapper>
      <div className="card">
        <h1>Main Content Area</h1>

      </div>
        <ButtonPurchase>
        <Link to="/purchase" style={{textDecoration: 'none', color: 'white'}}>Make a Purchase</Link>
        </ButtonPurchase>
        <ButtonBudget>
            <Link to="/budget" style={{textDecoration: 'none', color: 'white'}}>Edit Budget</Link>
        </ButtonBudget>
    </Wrapper>
  );
};

export default Main;
