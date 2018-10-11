import React from "react";
import styled from "react-emotion";

const HeaderWrapper = styled('div')(
    {
    textAlign: 'center',
    fontFamily: 'Roboto',
    color: '#092d63',
    margin: '0 auto'
    }
)

const Header = (props) => (
    <HeaderWrapper>
        {props.headerText}
    </HeaderWrapper>
)

export default Header;
