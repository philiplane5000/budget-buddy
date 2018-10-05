import React from "react";
import styled from "react-emotion";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";


const Title = styled('h1')(
    {
        textAlign: 'center',
        color: 'white',
        padding: 15,
        fontSize: '3.2rem'
    }
)

const LinksWrapper = styled('div')(
    {
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-around',
        paddingBottom: 10,
        color: 'white'
    }
)

const LinkItem = styled('p')(
    {
        fontFamily: 'Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif',
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.4rem',
        padding: 10,
    }
)

const Navbar = () => {
    return (
        <AppBar position="static" style={{backgroundColor: "#2fc4a6"}}>
            <Title>
                BUDGET BUDDY
        </Title>
            <LinksWrapper>
                <Link to="/"><LinkItem>HOME</LinkItem></Link>
                <Link to="/budget"><LinkItem>BUDGET</LinkItem></Link>
                <Link to="/purchase"><LinkItem>MAKE PURCHASE</LinkItem></Link>
                <Link to="/articles"><LinkItem>STAY ON TRACK</LinkItem></Link>
            </LinksWrapper>
        </AppBar>
    )
}

export default Navbar;