import React, { Component } from 'react';
import styled from "react-emotion";

class Purchase extends Component {

    state = {
        data: {}
    }

    componentDidMount() {
        console.log("Purchase Page")
    }

    render() {
        return (
            <div>
                Purchase Page
            </div>
        )
    }
}

export default Purchase;