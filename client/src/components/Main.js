import React from "react";
import styled from "react-emotion";

const Wrapper = styled("div")({
  height: 400,
  textAlign: 'center',
  color: '#092d63'
});

const Main = () => {
  return (
    <Wrapper>
      <div className="card">
        <h1>Main Content Area</h1>
      </div>
    </Wrapper>
  );
};

export default Main;
