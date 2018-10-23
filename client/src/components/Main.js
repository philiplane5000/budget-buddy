import React, { Component } from 'react'
import styled from 'react-emotion'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Button from '../components/Button'
import Header from '../components/Header'
import Wrapper from '../components/Wrapper'

const Icon = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  width: 350px;
  min-width: 250px;
  min-height: 140px;
  border-radius: 05px;
  margin: 20px 10px;
  background: ${props => props.bg}; 
  color: white; 
  font-size: 72px;
  border: 1px solid rgba(0,0,0,0.35);

  @media (max-width: 765px) {
    width: 250px;
    font-size: 50px;
  }
`

class Main extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Wrapper>
        <Header>
          Total Budget
        </Header>
        <Grid container justify='center'>
          <Grid item>
            <Icon bg={(this.props.total < 25) ? '#dc3545' : '#2fc4a6'}>
              ${this.props.total}
            </Icon>
          </Grid>
        </Grid>
        <Button>
          <Link to='/purchase' style={{ textDecoration: 'none', color: 'white' }}>
            Make a Purchase
          </Link>
        </Button>
        <Button>
          <Link to='/budget' style={{ textDecoration: 'none', color: 'white' }}>
            Edit Budget
          </Link>
        </Button>
      </Wrapper>
    )
  }

}

export default Main
