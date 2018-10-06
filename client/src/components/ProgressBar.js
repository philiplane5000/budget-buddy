import React from "react";
// import styled from "react-emotion";
import ProgressFiller from "./ProgressFiller";


const ProgressBar = props => {
  return (
      <div className="progress-bar">
        <ProgressFiller percentage={props.percentage}/>
      </div>
  );
};

export default ProgressBar;
