import React, { Component } from 'react'
import styled from 'react-emotion'
import Grid from '@material-ui/core/Grid'
import BudgetItem from '../components/BudgetItem'
import API from '../utils/API'
import CategoryIcon from '../components/CategoryIcon'
import Header from '../components/Header'
import TextField from '@material-ui/core/TextField'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Wrapper from '../components/Wrapper'
import { ProtectedScreen, FirebaseAuthContext } from '../components/context'

const MySwal = withReactContent(Swal)


const FormWrapper = styled('div')`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 350px;
    margin: 0 auto;
    padding-bottom: 25px;
`

const InputWrapper = styled('div')`
    flex: 0.75;
    flex-wrap: wrap;
    margin-right: 10px;
`

const Button = styled('div')`
    flex: .25;
    flex-wrap: wrap;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-top: 10px;
    background-color: #ffc107;
    color: white;
    font-family: 'Roboto', sans-serif;
`


class Budget extends Component {

    state = {
        budgets: [],
        category: 'Pick a Category',
        amount: '--',
        transaction: '',
        uid: ''
    }

    alertUpdateSuccess = (category) => {
        MySwal.fire({
            title: <h2 style={{ fontFamily: 'Roboto, sans-serif' }}>{category.toUpperCase()} UPDATED!</h2>,
            type: 'success',
            confirmButtonText: <p style={{ fontFamily: 'Roboto, sans-serif' }}>OK</p>
        })
    }

    alertUpdateError = () => {
        MySwal.fire({
            title: <h2 style={{ fontFamily: 'Roboto, sans-serif' }}>Something went Wrong...</h2>,
            type: 'error',
            confirmButtonText: 'Ok'
        })
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleCategorySelect = (category, amount, _id) => {
        this.setState({ category, amount, _id })
    }

    handleSubmit = () => {
        //change
        const adjusted = parseFloat(Math.round(this.state.amount * 100) / 100).toFixed(2)
        const budgetData = { category: this.state.category, amount: adjusted }
        API.updateBudgetByCategory(this.state.uid, budgetData)
            .then((updatedDb) => {
                (updatedDb.status === 200)
                    ? this.alertUpdateSuccess(this.state.category)
                    : this.alertUpdateError()
            }).then(() => {
                API.getCurrentUser(this.state.uid).then(res => {
                    const stateCopy = this.state
                    stateCopy.budgets = res.data.budgets
                    return stateCopy
                }).then(stateCopy => {
                    stateCopy.amount = '--'
                    stateCopy.category = 'Pick a Category'
                    stateCopy.transaction = ''
                    this.setState(stateCopy)
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <ProtectedScreen>
                <FirebaseAuthContext.Consumer>
                    {({ googleUser }) => {
                        const uid = googleUser.uid;
                        API.getCurrentUser(uid).then(User => {
                            this.setState({ budgets: User.data.budgets, uid: googleUser.uid })
                        }).catch(err => { throw err })
                        return (
                            <Grid container justify='center' style={{ marginBottom: 100 }}>
                                <Grid item lg={6} md={8} sm={10} xs={10}>
                                    <Wrapper>
                                        <Header>
                                            <div style={{ fontWeight: 'bold' }}> Manage Your Budget </div>
                                        </Header>

                                        <Grid container justify='center'>

                                            <Grid item lg={10} md={10} sm={10} xs={10}>

                                                <CategoryIcon
                                                    bg='#2fc4a6'
                                                    category={this.state.category}
                                                    amount={this.state.amount !== '--' ? parseFloat(Math.round(this.state.amount * 100) / 100).toFixed(2) : '--'}
                                                />
                                            </Grid>

                                            <Grid item lg={10} md={10} sm={10} xs={10}>
                                                <FormWrapper>

                                                    <InputWrapper>
                                                        <form noValidate autoComplete='off'>
                                                            <TextField
                                                                id='standard-number'
                                                                label='Set/Adjust Spending Limit:'
                                                                name='amount'
                                                                value={this.state.amount}
                                                                onChange={this.handleChange}
                                                                type='number'
                                                                fullWidth={true}
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }}
                                                                margin='normal'
                                                                variant='outlined'
                                                            />
                                                        </form>

                                                    </InputWrapper>

                                                    <Button onClick={() => this.handleSubmit(this.state.amount)}>
                                                        SUBMIT
                                                    </Button>
                                                </FormWrapper>

                                            </Grid>
                                            <Grid container justify='space-around'>
                                                <Grid item lg={6} md={6} sm={10} xs={10}>
                                                    {
                                                        this.state.budgets.length > 0
                                                            ? this.state.budgets.map((doc, index) =>
                                                                <BudgetItem
                                                                    key={index}
                                                                    category={doc.category}
                                                                    bg={(this.state.category === doc.category) ? '#2fc4a6' : '#1162bc'}
                                                                    amount={doc.amount}
                                                                    _id={doc._id}
                                                                    handleCategorySelect={this.handleCategorySelect}
                                                                />
                                                            )
                                                            : <h2>loading</h2>
                                                    }
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                    </Wrapper>
                                </Grid>
                            </Grid>
                        )
                    }}
                </FirebaseAuthContext.Consumer>
            </ProtectedScreen>
        )
    }
}

export default Budget
