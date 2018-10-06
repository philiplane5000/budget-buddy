import React, { Component } from 'react';
import styled from "react-emotion";
import Grid from "@material-ui/core/Grid";

const Wrapper = styled('div')(
    {
        border: '5px solid #092d63',
        textAlign: 'center',
        margin: '20px 0'
    }
)

class Budget extends Component {

    state = {
        data: {}
    }

    componentDidMount() {
        console.log("BUDGET PAGE")
    }

    render() {
        return (
            <Grid container justify="center">

                <Grid item lg={6} md={6} sm={10} xs={12}>
                    <Wrapper>
                        <h1>
                            BUDGET PAGE
                        </h1>
                    </Wrapper>
                </Grid>
                <Grid item lg={6} md={6} sm={10} xs={12}>
                    <Wrapper>
                        <h1>
                            BUDGET PAGE
                        </h1>
                    </Wrapper>
                </Grid>

            </Grid>
        )
    }
}

export default Budget;