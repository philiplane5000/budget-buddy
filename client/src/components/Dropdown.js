import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import styled from 'react-emotion'
import { Link } from 'react-router-dom'
import firebase from 'firebase'

const HamWrapper = styled('div')`
  align-self: center;
  display: none;

  :hover {
    transform: scale(1.025);
    } 

  @media (max-width: 763px) {
    display: block;
    margin: 5px;
  }
`

const Bar = styled('div')`
  width: 40px;
  height: 7px;
  background-color: white;
  margin: 8px 0;
  padding: 0 0 0 15px;
`

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  }

  signOut = () => {
    firebase.auth().signOut().then(function () {
      console.log('USER SIGNED OUT')
      sessionStorage.clear()
    }).catch(function (error) {
      console.log(error)
    })
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { anchorEl } = this.state

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <HamWrapper>
            <Bar />
            <Bar />
            <Bar />
          </HamWrapper>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <Link to="/home" style={{ textDecoration: "none" }}>
            <MenuItem>HOME</MenuItem>
          </Link>
          <Link to="/budget" style={{ textDecoration: "none" }}>
            <MenuItem>BUDGET</MenuItem>
          </Link>
          <Link to="/purchase" style={{ textDecoration: "none" }}>
            <MenuItem>PURCHASE</MenuItem>
          </Link>
          <Link to="/articles" style={{ textDecoration: "none" }}>
            <MenuItem>LEARN</MenuItem>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <MenuItem onClick={this.signOut}>SIGN OUT</MenuItem>
          </Link>
        </Menu>
      </div>
    )
  }
}

export default SimpleMenu
