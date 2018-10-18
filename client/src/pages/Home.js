import React, { Component } from "react";
import styled from 'react-emotion';
import API from "../utils/API";
import Grid from "@material-ui/core/Grid";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Wrapper from '../components/Wrapper';
import firebase from 'firebase';
import {FirebaseAuthContext} from '../components/context';
import {Redirect} from 'react-router';

const SignOut = styled('a')`
  cursor: pointer;
  margin: 0 auto;
  padding: 10px;
  border-radius: 10px;
  background-color: #ffc107;
  color: white;
  font-family: 'Roboto', sans-serif;
`

class Home extends Component {

  state = {
    total: ''
  };

  signOut = () => {
    firebase.auth().signOut().then(function () {
      console.log('USER SIGNED OUT')
    }).catch(function (error) {
      console.log(error)
    });
  }

  componentDidMount() {
    API.getCurrentBudget().then(response => {
      let total = response.data.reduce((acc, doc) => {
        return acc += doc.amount
      }, 0)
      this.setState({ total });
      console.log(this.state)
    })
  }

  render() {
    return (


      <FirebaseAuthContext.Consumer>
        {
          ({ authStatusReported, isUserSignedIn }) => (
            <div>
              {
                isUserSignedIn  && (
                  //ORIGINAL HOME PAGE:
                  <Grid container justify="center">
                    <Grid item lg={6} md={6} sm={10} xs={10}>
                      {this.state.total === '' ? (
                        <Main total="0.00" />
                      ) : (
                          <Main total={this.state.total} />
                        )
                      }
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xs={12} style={{ marginTop: 50 }}>
                      <SignOut onClick={this.signOut} style={{ margin: '0 auto' }}>Sign Out</SignOut>
                    </Grid>
                    <Footer />
                  </Grid>
                  //END ORIGINAL HOME PAGE//
                )
              }
              {
                !(isUserSignedIn) && (
                  <Redirect to="/" />
                )
              }
            </div>
          )
        }
      </FirebaseAuthContext.Consumer>

    );
  }
}

export default Home;
