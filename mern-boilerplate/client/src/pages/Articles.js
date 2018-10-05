import React, { Component } from 'react';
import styled from "react-emotion";

class Articles extends Component {

    state = {
        data: {}
    }

    componentDidMount() {
        console.log("Articles Page")
    }

    render() {
        return (
            <div>
                Articles Page
            </div>
        )
    }
}

export default Articles;