import React from "react";
import styled from "react-emotion";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";

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
        fontSize: '1.2rem',
        padding: '0 15px',
        display: 'inline-block',
        fontWeight: 'bold',
        borderRight: '.01em solid #092d63',
    }
)

const Navbar = () => {
    return (
        <AppBar position="static" style={{backgroundColor: "#2ce28c", borderBottom:"2.5px solid #092d63"}}>
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