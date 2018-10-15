import React from 'react';
import styled from 'react-emotion';

const HeaderWrapper = styled('div')`
    text-align: center;
    font-family: Roboto;
    font-size: 40px;
    font-weight: 400;
    color: #1162bc;
    margin: 10px;
`;

const Header = (props) => (
    <HeaderWrapper>
        {props.children}
        <hr style={{borderBottom:"2.5px solid #1162bc"}}/>
    </HeaderWrapper>
)

export default Header;
