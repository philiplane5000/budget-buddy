import React from 'react';
// import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import styled, { keyframes } from 'react-emotion'

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


const NavWrapper = styled('div')(
    {
        display: 'flex',
        height: 80,
    }
)

const Title = styled('div')(
    {
        fontFamily: 'Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif',
        color: 'white',
        flex: 1,
        alignSelf: 'center',
    }
)

const Logo = styled('h1')(
    {
        padding: 5,
        marginLeft: 5,
        fontSize: 45,
        animation: `${bounce} 1s ease infinite`

    }
)

const LinksWrapper = styled('div')(
    {
        color: 'white',
        alignSelf: 'center',
    }
)

const LinkItem = styled('p')(
    {
        fontFamily: 'Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif',
        color: 'white',
        textDecoration: 'none',
        borderBottom: 'none',
        padding: '0 15px',
        display: 'inline-block',
        fontWeight: 'bold',
        fontSize: 20
    }
)

const Navbar = () => {
    return (
        <AppBar position="static" style={{backgroundColor: "#092d63", borderBottom:"2.5px solid #2fc4a6"}}>
            <NavWrapper>
                <Title>
                    <Logo>BUDGET BUDDY</Logo>
                </Title>
                <LinksWrapper>
                    <Link to="/" style={{textDecoration: 'none'}}><LinkItem>HOME</LinkItem></Link>
                    <Link to="/budget" style={{textDecoration: 'none'}}><LinkItem>BUDGET</LinkItem></Link>
                    <Link to="/purchase" style={{textDecoration: 'none'}}><LinkItem>MAKE PURCHASE</LinkItem></Link>
                    <Link to="/articles" style={{textDecoration: 'none'}}><LinkItem>STAY ON TRACK</LinkItem></Link>
                </LinksWrapper>
            </NavWrapper>
        </AppBar>
    )
}

export default Navbar;
