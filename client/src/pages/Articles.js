import React, { Component } from 'react';
import styled from "react-emotion";
import Grid from "@material-ui/core/Grid";
import Footer from "../components/Footer";

const Wrapper = styled('div')(
    {
        border: '3px solid #1162bc',
        textAlign: 'center',
        margin: '20px 0',
        backgroundColor: '#f9f9f9',
        borderRadius: 10
    }
)

class Articles extends Component {

    state = {
        data: {}
    }

    componentDidMount() {
        console.log("ARTICLES PAGE")
    }

    render() {
        return (
            <Grid container justify="center">

                <Grid item lg={8} md={10} sm={10} xs={12}>
                    <Wrapper>
                        <h1>
                            ARTICLES PAGE
                        </h1>
                    </Wrapper>
                </Grid>
                <Footer />
            </Grid>
        )
    }
}

export default Articles;