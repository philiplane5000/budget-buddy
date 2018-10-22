import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import firebase from 'firebase'
import styled from 'react-emotion'
import Login from './pages/Login'
import Home from './pages/Home'
import Budget from './pages/Budget.js'
import Purchase from './pages/Purchase.js'
import Articles from './pages/Articles.js'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import FirebaseAuthProvider from './components/context/FirebaseAuthProvider'
// import {FirebaseAuthContext } from './components/context'

const config = {
  apiKey: 'AIzaSyAHpmg-73LB4g04N70uMKNZw_AAeGFbgbw',
  authDomain: 'budget-buddy-cf9ce.firebaseapp.com',
  databaseURL: 'https://budget-buddy-cf9ce.firebaseio.com',
  projectId: 'budget-buddy-cf9ce',
  storageBucket: 'budget-buddy-cf9ce.appspot.com',
  messagingSenderId: '23600848612'
}

firebase.initializeApp(config)

const Content = styled('div')({
  marginTop: 25,
  textAlign: 'center'
})

class App extends Component {

  render() {
    return (
      <FirebaseAuthProvider>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Content>
                <Route exact path='/home' component={Home} />
                <Route exact path='/' component={Login} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/budget' component={Budget} />
                <Route exact path='/purchase' component={Purchase} />
                <Route exact path='/articles' component={Articles} />
              </Content>
            </Switch>
            <Footer />
          </div>
        </Router>
      </FirebaseAuthProvider>
    )
  }
}

export default App
