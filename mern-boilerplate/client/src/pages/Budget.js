import React, { Component } from 'react';
import styled from "react-emotion";

class Budget extends Component {

    state = {
        data: {}
    }

    componentDidMount() {
        console.log("Budget Page")
    }

    render() {
        return (
            <div>
                Budget Page
            </div>
        )
    }
}

export default Budget;