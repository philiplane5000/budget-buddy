import React from "react";
import styled from "react-emotion";

const HeaderWrapper = styled('div')(
    {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 40,
    fontWeight: 400,
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
