import React from "react";
import styled from "react-emotion";

const Wrapper = styled("div")({
  color: "#092d63",
});

const Welcome = () => {
  return (
    <Wrapper>
      <div>
        <h1>Welcome to Budget Buddy!</h1>
      </div>
    </Wrapper>
  );
};

export default Welcome;
