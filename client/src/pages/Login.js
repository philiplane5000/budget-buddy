import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Grid from '@material-ui/core/Grid'
import Footer from '../components/Footer'
import firebase from 'firebase'
import Button from '../components/Button'

const provider = new firebase.auth.GoogleAuthProvider()

class Login extends Component {

    googleSignIn = async (event) => {
        const { history } = this.props
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
                var errorMessage = error.message;
                alert(errorMessage)
            });
        } catch (e) {
            alert(e)
        } finally {
            history.push('/home')
        }

    }

    render() {
        return (
            <Grid container justify='center'>
                <Grid item lg={6} md={8} sm={10} xs={10} >
                    <Button onClick={this.googleSignIn} style={{ marginTop: '200px' }}>
                        SIGN-IN
                    </Button>
                </Grid>
            </Grid>
        )

    }

}

export default (withRouter(Login))