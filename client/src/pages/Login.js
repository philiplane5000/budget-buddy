import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Grid from '@material-ui/core/Grid'
import Footer from '../components/Footer'
import firebase from 'firebase'
import Button from '../components/Button'

const provider = new firebase.auth.GoogleAuthProvider()

class Login extends Component {

    googleSignIn = async (event) => {
        const { history } = this.props;
        event.preventDefault()

        try {
            await firebase.auth().signInWithPopup(provider).then(function (result) {
                // Token to access the Google API:
                let user = JSON.stringify(result.user)
                sessionStorage.setItem('user', user)
                // The signed-in user info:
                let token = JSON.stringify(result.credential.accessToken)
                sessionStorage.setItem('token', token)
                // **
            }).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                alert(`Sorry could not log in due to: ${errorMessage}`)
            });
        } catch (e) {
            alert(e)
        } finally {
            history.push('/dashboard')
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