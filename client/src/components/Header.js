import React from "react";
import styled from "react-emotion";

const Title = styled('div')`
    font-family: 'Calibri';
    color: ${props => props.color};
    font-size: ${props => props.size};
`

const Header = props => (
    <Title color={props.color} size={props.size}>
        {props.children}
    </Title>
)

export default Header;