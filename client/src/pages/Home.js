import React, { Component } from 'react'
import API from '../utils/API'
import Grid from '@material-ui/core/Grid'
import Main from '../components/Main'
import { ProtectedScreen } from '../components/context'

class Home extends Component {

  state = {
    total: '',
    uid: '',
  };

  componentWillMount() {
    let user = JSON.parse(sessionStorage.getItem('user'));
    this.setState({ uid: user.uid })
  }

  componentDidMount() {
    API.getCurrentUserBudget(this.state.uid).then(User => {
      if (User.data === null) {
        API.createNewUser(this.state.uid).then(User => {
          this.setState({ articles: User.data.articles })
        })
      } else {
        let total = User.data.budgets.reduce((acc, doc) => {
          return acc += doc.amount
        }, 0)
        total = parseFloat(Math.round(total * 100) / 100).toFixed(2)
        this.setState({ total });
        console.log(this.state)
      }
    })
  }

  render() {
    return (
      <ProtectedScreen>

        <Grid container justify='center'>
          <Grid item lg={6} md={6} sm={10} xs={10}>
            {this.state.total === '' ? (
              <Main total='0.00' />
            ) : (
                <Main total={this.state.total} />
              )
            }
          </Grid>
        </Grid>
      </ProtectedScreen>
    )
  }
}

export default Home;
