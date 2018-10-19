import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'react-emotion'
import Home from './pages/Home'
import Budget from './pages/Budget.js'
import Purchase from './pages/Purchase.js'
import Articles from './pages/Articles.js'
import Navbar from './components/Navbar'

const Content = styled('div')({
  marginTop: 25,
  textAlign: 'center'
})

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
            <Switch>
              <Content>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/home' component={Home} />
                  <Route exact path='/budget' component={Budget} />
                  <Route exact path='/purchase' component={Purchase} />
                  <Route exact path='/articles' component={Articles} />
              </Content>
            </Switch>
        </div>
      </Router>
    )
  }
}

export default App
