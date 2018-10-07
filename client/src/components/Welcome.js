import React from "react";
import styled from "react-emotion";

const Wrapper = styled("div")({
  color: "white",
  fontFamily: 'Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif',
  backgroundColor: '#092d63'
});

const Welcome = () => {
  return (
    <Wrapper>
        <h1>Total Budget: $2000</h1>
    </Wrapper>
  );
};

export default Welcome;
