import React from "react";
import styled from "react-emotion";

const HeaderWrapper = styled('div')(
    {
    textAlign: 'center',
    fontFamily: 'Roboto',
    color: '#092d63',
    backgroundColor: '#d5d6d2',
    margin: '0 auto'
    }
)

const Header = () => (
    <HeaderWrapper>
        <h1>Total Budget: $2000</h1>
    </HeaderWrapper>
)

export default Header;
