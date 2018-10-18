import React from 'react'
import styled from 'react-emotion'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Wrapper from '../components/Wrapper'
import Header from '../components/Header'
import Grid from '@material-ui/core/Grid'

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

const Main = props => {
  return (
    <Wrapper>
      <Header>
        Total Budget
      </Header>

    <Grid container justify="center">
      <Grid item>
        <Icon>
          ${props.total}
        </Icon>
      </Grid>

    </Grid>

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
    </Wrapper>
  )
}

export default Main
