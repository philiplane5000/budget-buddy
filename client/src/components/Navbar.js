import React from "react";
import styled from "react-emotion";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";

const NavWrapper = styled('div')(
    {
        display: 'flex',
    }
)

const Title = styled('div')(
    {
        fontFamily: 'Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif',
        textAlign: 'left',
        color: 'white',
        fontSize: '20px',
        flex: 1,
    }
)

const LinksWrapper = styled('div')(
    {
        color: 'white',
        
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
        // margin: '0 auto',
        justifyContent: 'center',
        alignItems: 'center'
    }
)

const Navbar = () => {
    return (
        <AppBar position="static" style={{backgroundColor: "#2ce28c", borderBottom:"2.5px solid #092d63"}}>
            <NavWrapper>
                <Title>
                    <h1>BUDGET BUDDY</h1>
                </Title>
                <LinksWrapper>
                    <Link to="/" style={{textDecoration: 'none'}}><LinkItem>HOME</LinkItem></Link>|
                    <Link to="/budget" style={{textDecoration: 'none'}}><LinkItem>BUDGET</LinkItem></Link>|
                    <Link to="/purchase" style={{textDecoration: 'none'}}><LinkItem>MAKE PURCHASE</LinkItem></Link>|
                    <Link to="/articles" style={{textDecoration: 'none'}}><LinkItem>STAY ON TRACK</LinkItem></Link>
                </LinksWrapper>
            </NavWrapper>
        </AppBar>
    )
}

export default Navbar;