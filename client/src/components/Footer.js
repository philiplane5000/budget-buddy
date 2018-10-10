import React from 'react';
import styled from 'react-emotion';

const Wrapper = styled('div')(
  {
    color: 'white',
    fontFamily: 'Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif',
    width: '100%',
    backgroundColor: '#092d63',
    marginTop: 50,
    height: 60,
    borderTop: '2px solid #2fc4a6',
    left: 0,
    bottom: 0,
    position: 'fixed'
  }
)

const Logo = styled('div')(
    {
        width: 200,
        margin: '0 auto'
    }
)

const Footer = () => {
  return (
    <Wrapper>
      <Logo>
        <h3>Budget Buddy &copy;</h3>
      </Logo>
    </Wrapper>
  );
};

export default Footer;
