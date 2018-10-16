import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import styled, { keyframes } from 'react-emotion'
import Icon from '../image/money-pig.png'
import SimpleMenu from './Dropdown'

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`

const NavWrapper = styled('div')`
  display: flex;
  height: 80px;
  justify-content: space-between;
`

const Title = styled('div')`
  font-family: 'Roboto', sans-serif;
  color: white;
  flex: 1;
  align-self: center;
`

const IconWrapper = styled('div')`
  max-height: 100px;
  max-width: 100px;
  display: none;

  @media (max-width: 763px) {
    display: block;
  }
`

const Logo = styled('h1')`
  font-family: 'Roboto', sans-serif;
  padding: 5px;
  margin-left: 5px;
  font-size: 45px;
  animation: ${bounce} 1s ease;
  :hover {
    color: #3de28c;
  }

  @media (max-width: 763px) {
    display: none;
  }
`

const LinksWrapper = styled('div')`
  color: white;
  align-self: center;
`

const LinkItem = styled('p')`
  font-family: 'Roboto', sans-serif;
  color: white;
  text-decoration: none;
  border-bottom: none;
  padding: 0 15px;
  display: inline-block;
  font-weight: bold;
  font-size: 20px;
  transition: all .2s ease-in-out;
  :hover {
    transform: scale(1.2);
    border-radius: 5px;
    color: #3de28c;
  }
  
  @media (max-width: 900px) {
    display: none;
  }
`

const Navbar = props => {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#092d63",
        borderBottom: "2.5px solid #3de28c"
      }}
    >
      <NavWrapper>
        <Title>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo><LinkItem>BUDGET BUDDY</LinkItem></Logo>
          </Link>
          <IconWrapper>
            <img
              style={{ height: "80px", width: "80px" }}
              src={Icon}
              alt="moneypig"
            />
          </IconWrapper>
        </Title>
        <SimpleMenu />
        <LinksWrapper>
          <Link to="/" style={{ textDecoration: "none" }}>
            <LinkItem>HOME</LinkItem>
          </Link>
          <Link to="/budget" style={{ textDecoration: "none" }}>
            <LinkItem>BUDGET</LinkItem>
          </Link>
          <Link to="/purchase" style={{ textDecoration: "none" }}>
            <LinkItem>PURCHASE</LinkItem>
          </Link>
          <Link to="/articles" style={{ textDecoration: "none" }}>
            <LinkItem>LEARN</LinkItem>
          </Link>
        </LinksWrapper>
      </NavWrapper>
    </AppBar>
  )
}

export default Navbar
