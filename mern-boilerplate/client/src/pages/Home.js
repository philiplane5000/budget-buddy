import React, { Component } from 'react';
import styled from "react-emotion";

class Home extends Component {

    state = {
        data: {}
    }

    componentDidMount() {
        console.log("HOME PAGE")
    }

    render() {
        return (
            <div>
                WELCOME TO BUDGET BUDDY!
            </div>
        )
    }
}

export default Home;