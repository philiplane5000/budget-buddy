import React from "react";
import styled from "react-emotion";

const HeaderWrapper = styled('div')(
    {
    textAlign: 'center',
    fontFamily: 'Roboto',
    color: '#092d63',
    margin: '0 auto',
    fontSize: 40,
    fontWeight: 700,
    color: '#1162bc',
    margin: 10
    }
)

const Header = (props) => (
    <HeaderWrapper>
        {props.headerText}
        <hr style={{borderBottom:"2.5px solid #1162bc"}}/>
    </HeaderWrapper>
)

export default Header;
