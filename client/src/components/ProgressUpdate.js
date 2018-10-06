import React from "react";
// import styled from "react-emotion";

class ProgressUpdate extends React.Component {
    constructor(props) {
        super(props)

        this.state= {
            percentage: 0
        }
    }
    render() {
        return(
            <div>
                <ProgressBar percentage={this.state.percentage} />
            </div>
        )
    }
}

export default ProgressUpdate;