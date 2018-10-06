import React from "react";
import styled from "react-emotion";

const Test = styled('div')(
    {

    }
)

const ProgressFiller = ({ percentage }) => {
    return (
        <Test>
            <div className="progress-filler" style={{ width: `${percentage}%` }}>
            </div>
        </Test>
    )
}

export default ProgressFiller;