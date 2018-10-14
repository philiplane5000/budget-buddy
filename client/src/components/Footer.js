import React from 'react';
import styled from 'react-emotion';

const Wrapper = styled('div')`
  
    color: white;
    font-family: roboto;
    width: 100%;
    background-color: #092d63;
    height: 60px,
    border-top: 2px solid #3de28c;
    left: 0;
    bottom: 0;
    position: fixed;
`;

const Logo = styled('div')`
    
        width: 200px;
        margin: 0 auto;  
`;

const Footer = () => {
  return (
    <Wrapper>
      <Logo>
        <h4>&copy; BUDGET BUDDY &copy;</h4>
      </Logo>
    </Wrapper>
  );
};

export default Footer;
