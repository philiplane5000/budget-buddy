import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import API from '../utils/API'
import BudgetIcon from '../components/BudgetIcon'
import CategoryIcon from '../components/CategoryIcon'
import TextField from '@material-ui/core/TextField'
import Button from '../components/Button'
import Header from '../components/Header'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Wrapper from '../components/Wrapper'
import { ProtectedScreen } from '../components/context'

const MySwal = withReactContent(Swal)

class Purchase extends Component {
    state = {
        budgets: [],
        amount: '0.00',
        category: '',
        transaction: '0.00',
        uid: ''
    }

    async componentDidMount() {
        const user = await JSON.parse(sessionStorage.getItem('user'));
        API.getCurrentUserBudget(user.uid).then(User => {
            let total = User.data.budgets.reduce((acc, doc) => {
                return acc += doc.amount
            }, 0);
            if (total <= 0) {
                MySwal.fire({
                    title: <h3 style={{ fontFamily: 'Roboto, sans-serif', marginBottom: -20 }}>Edit Your Budget!</h3>,
                    html: <p style={{ fontFamily: 'Roboto, sans-serif', textAlign: 'center' }}>(It's Empty)</p>,
                    type: 'error',
                    confirmButtonText: 'Ok'
                })
            }
            this.setState({ budgets: User.data.budgets, uid: user.uid })
            console.log(this.state)
        })
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    handleClick = (amount, category) => {
        this.setState({ amount, category })
    }

    submitTransaction = (budgetData) => {
        API.updateBudgetByCategory(this.state.uid, budgetData)
            .then((updatedDb) => {
                (updatedDb.status === 200)
                    ?
                    MySwal.fire({
                        title: <h3 style={{ fontFamily: 'Roboto, sans-serif' }}>{this.state.category.toUpperCase()} UPDATED!</h3>,
                        type: 'success',
                        confirmButtonText: <p style={{ fontFamily: 'Roboto, sans-serif' }}>OK</p>
                    })
                    :
                    MySwal.fire({
                        title: <h3 style={{ fontFamily: 'Roboto, sans-serif' }}>Something went Wrong...</h3>,
                        type: 'error',
                        confirmButtonText: <p style={{ fontFamily: 'Roboto, sans-serif' }}>OK</p>
                    })
            }).then(() => {
                API.getCurrentUserBudget(this.state.uid).then(res => {
                    const stateCopy = this.state
                    stateCopy.budgets = res.data.budgets
                    return stateCopy
                }).then(stateCopy => {
                    stateCopy.amount = ''
                    stateCopy.category = 'Pick a Category'
                    stateCopy.transaction = ''
                    this.setState(stateCopy)
                })
            })
    }

    handlePurchase = () => {
        let adjusted = parseFloat(Math.round((this.state.amount - this.state.transaction) * 100) / 100).toFixed(2)
        const budgetData = { category: this.state.category, amount: adjusted }
        if (adjusted < 0) {
            MySwal.fire({
                title: <h3 style={{ fontFamily: 'Roboto, sans-serif', marginBottom: -20 }}>Are You Sure?</h3>,
                html: <p style={{ fontFamily: 'Roboto, sans-serif', textAlign: 'center' }}>You are about to overspend in '{this.state.category.toUpperCase()}'</p>,
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#dc3545',
                cancelButtonText: <div style={{ fontFamily: 'Roboto, sans-serif' }}>Cancel</div>,
                confirmButtonText: <div style={{ fontFamily: 'Roboto, sans-serif' }}>Yes</div>
            }).then((result) => {
                if (result.value) {
                    this.submitTransaction(budgetData)
                }
            })
        } else {
            this.submitTransaction(budgetData)
        }
    }


    render() {
        return (
            <ProtectedScreen>
                <Grid container justify='center' style={{ marginBottom: 100 }}>
                    <Grid item lg={6} md={8} sm={10} xs={10}>
                        <Wrapper>

                            <Header>
                                <div style={{ fontWeight: 'bold' }}> Make A Purchase </div>
                            </Header>

                            <Grid container justify='space-around'>
                                {this.state.category !== '' ? (
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <CategoryIcon
                                            bg={(((this.state.amount - this.state.transaction) < 25) && (this.state.category !== 'Pick a Category')) ? '#dc3545' : '#2fc4a6'}
                                            category={this.state.category}
                                            amount={(this.state.amount - this.state.transaction).toFixed(2)}
                                        />
                                    </Grid>
                                ) : (
                                        <Grid item lg={12} md={12} sm={12} xs={12}>
                                            <CategoryIcon bg='#2fc4ac' category='pick a category' amount='--' />
                                        </Grid>

                                    )
                                }
                            </Grid>

                            <div style={{ margin: 40 }}>
                                <Grid container justify='space-around' spacing={16}>
                                    {this.state.budgets.length > 0 ? (
                                        this.state.budgets.map(doc => (
                                            <Grid item lg={4} md={4} sm={6} xs={12}>
                                                <BudgetIcon
                                                    bg={this.state.category === doc.category ? '#2fc4ac' : '#1162bc'}
                                                    key={doc._id}
                                                    amount={doc.amount}
                                                    category={doc.category}
                                                    handleClick={this.handleClick}
                                                >
                                                    {doc.category}
                                                </BudgetIcon>
                                            </Grid>
                                        ))
                                    ) : (
                                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                                    <i class='fa fa-cloud-download-alt'></i>
                                                </div>
                                            </Grid>
                                        )
                                    }
                                </Grid>
                            </div>

                            <Grid container justify='center'>

                                <Grid item lg={7} md={7} sm={8} xs={8}>
                                    <form noValidate autoComplete='off'>
                                        <TextField
                                            id='filled-number'
                                            label='Transaction Amount'
                                            name='transaction'
                                            value={this.state.transaction}
                                            fullWidth={true}
                                            onChange={this.handleInputChange}
                                            type='number'
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            margin='normal'
                                            variant='outlined'
                                        />
                                    </form>
                                </Grid>

                                <Grid item lg={4} md={4} sm={8} xs={10}>
                                    <Button onClick={this.handlePurchase}>
                                        COMPLETE PURCHASE
                                </Button>
                                </Grid>

                            </Grid>

                        </Wrapper>
                    </Grid>
                </Grid>
            </ProtectedScreen>
        )
    }
}

export default Purchase;
