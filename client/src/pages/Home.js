import React, { Component } from "react";
import styled from "react-emotion";
import Grid from "@material-ui/core/Grid";
import Welcome from "../components/Welcome";
import Button from "@material-ui/core/Button";
import Main from "../components/Main";
import ProgressBar from "../components/ProgressBar";

const Wrapper = styled("div")({
  border: "4px solid #092d63",
  textAlign: "center",
  margin: "20px 0",
  color: "#2ce28c",
  borderRadius: 5
});

const Progress = styled("div")({
  position: "relative",
  height: 100,
  width: '100%',
  borderRadius: 50,
  border: "1 solid #333"
});

const Filler = styled("div")({
  background: "#2ce28c",
  height: '100%',
  borderRadius: "inherit",
  transition: "width .2s ease-ine"
});

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
        <Grid item lg={8} md={8} sm={10} xs={12}>
          <Wrapper>
            <Welcome />
          </Wrapper>
        </Grid>
        <Grid item lg={8} md={8} sm={10} xs={12}>
          <Wrapper>
            <Main>
              <Button />
            </Main>
          </Wrapper>
        </Grid>
        <Grid item lg={8} md={8} sm={10} xs={12}>
          <Wrapper>
            <Progress>
                <Filler>
                    <ProgressBar />
                </Filler>
            </Progress>
          </Wrapper>
        </Grid>
      </Grid>
    );
  }
}

export default Home;
