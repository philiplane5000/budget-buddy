import React from "react";
import styled from "react-emotion";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";

const Title = styled('h1')(
    {
        fontFamily: 'Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif',
        textAlign: 'center',
        color: 'white',
        paddingTop: 5,
        fontSize: '60px'
    }
)

const LinksWrapper = styled('div')(
    {
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-around',
        paddingBottom: 5,
        color: 'white'
    }
)

const LinkItem = styled('p')(
    {
        fontFamily: 'Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif',
        color: 'white',
        textDecoration: 'none',
        borderBottom: 'none',
        fontSize: '1.4rem',
        padding: '0 15px',
    }
)

const Navbar = () => {
    return (
        <AppBar position="static" style={{backgroundColor: "#2fc4a6", borderBottom:"2.5px solid #1162bc"}}>
            <Title>
                BUDGET BUDDY
            </Title>
            <LinksWrapper>
                <Link to="/" style={{textDecoration: 'none'}}><LinkItem>HOME</LinkItem></Link>
                <Link to="/budget" style={{textDecoration: 'none'}}><LinkItem>BUDGET</LinkItem></Link>
                <Link to="/purchase" style={{textDecoration: 'none'}}><LinkItem>MAKE PURCHASE</LinkItem></Link>
                <Link to="/articles" style={{textDecoration: 'none'}}><LinkItem>STAY ON TRACK</LinkItem></Link>
            </LinksWrapper>
        </AppBar>
    )
}

export default Navbar;