import React from "react";
import styled from "react-emotion";

const Wrapper = styled("div")({
  color: "white",
  fontFamily: 'Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif',
  maxWidth: '100%',
  backgroundColor: '#2fc4a6',
  marginTop: 50,
  height: 60,
  borderTop:"2px solid #092d63"
});

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
