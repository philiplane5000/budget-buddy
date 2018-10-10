import React, { Component } from "react";
import styled from "react-emotion";
import Grid from "@material-ui/core/Grid";
import Main from "../components/Main";
import ProgressBar from "../components/ProgressBar";
// import ProgressUpdate from "../components/ProgressUpdate";
import Footer from "../components/Footer";
import Header from "../components/Header";

class Home extends Component {
  state = {
    data: {}
  };

  componentDidMount() {
    console.log("HOME PAGE");
  }

  render() {
    return (
      <Grid container justify="center">
        <Grid item lg={8} md={8} sm={8} xs={8}>
            <Main />
        </Grid>
        <Footer />
      </Grid>
    );
  }
}

export default Home;
