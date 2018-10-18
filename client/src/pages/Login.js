import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Grid from '@material-ui/core/Grid'
import Footer from '../components/Footer'
// import Firebase from '../components/Firebase'
import firebase from 'firebase'
import Button from '../components/Button'
// import Router from '../components/Router'

const provider = new firebase.auth.GoogleAuthProvider()

class Login extends Component {

    googleSignIn = async (event) => {
        const { history } = this.props;
        event.preventDefault()

        try {
            await firebase.auth().signInWithPopup(provider).then(function (result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                console.log(user.uid)
                history.push('/dashboard')

                // ...
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
        } catch (e) {
            alert(e)
        }


    }

    render() {
        return (
            <Grid container justify="center">
                <Grid item lg={6} md={8} sm={10} xs={10} >
                    <Button onClick={this.googleSignIn}>SIGN-IN</Button>
                </Grid>
                <Footer />
            </Grid>
        )

    }

}

export default (withRouter(Login))