import React, { Component } from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';

const Icon = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  width: 350px;
  min-width: 250px;
  min-height: 140px;
  border-radius: 10px;
  margin: 20px 10px;
  background: #2fc4a6;
  color: white; 
  font-size: 84px;
  border: 1px solid rgba(0,0,0,0.35);
`

class Main extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <MainWrapper>
        <Header>
          Total Budget = ${this.props.total}
        </Header>
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
  }

}

export default Main
