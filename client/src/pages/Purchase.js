import React, { Component } from 'react'
import styled from "react-emotion"
import Grid from "@material-ui/core/Grid"
import API from "../utils/API"
import BudgetIcon from "../components/BudgetIcon"
import CategoryIcon from "../components/CategoryIcon"
import TextField from "@material-ui/core/TextField"
import Button from "../components/Button"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal)

const Wrapper = styled('div')(
    {
        border: '2px solid rgba(0,0,0,0.1)',
        paddingTop: 20,
        paddingBottom: 40,
        borderRadius: 10,
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);',
        backgroundColor: '#f9f9f9'
    }
)

class Purchase extends Component {

    state = {
        budgets: [],
        amount: '0.00',
        category: '',
        transaction: '0.00',
        _id: ''
    }

    componentDidMount() {
        API.getCurrentBudget().then(dbBudget => {
            this.setState({ budgets: dbBudget.data })
        })
    }

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleClick = (amount, category, _id) => {
        this.setState({ amount, category, _id })
    }

    handlePurchase = () => {
        let adjusted = parseFloat(Math.round((this.state.amount - this.state.transaction) * 100) / 100).toFixed(2);
        API.updateBudgetCategory(this.state._id, { amount: adjusted })
            .then(dbBudget => {
                MySwal.fire({
                    title: <h4 style={{ fontFamily: 'Calibri' }}>TRANSACTION ACCOUNTED FOR!</h4>,
                    type: 'success',
                    confirmButtonText: 'Ok'
                })
                API.getCurrentBudget().then(res => {
                    const stateCopy = this.state;
                    stateCopy.budgets = res.data;
                    return stateCopy
                }).then(stateCopy => {
                    stateCopy.amount = adjusted;
                    stateCopy.category = dbBudget.data.label;
                    stateCopy._id = dbBudget.data._id;
                    stateCopy.transaction = '0.00';
                    this.setState(stateCopy)
                })

            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {

        return (
            <Grid container justify="center">
                <Grid item lg={6} md={8} sm={10} xs={12}>
                    <Wrapper>

                        <Header headerText="Make a Purchase" />

                        <Grid container justify="space-around">

                            {this.state.category !== '' ? (
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <CategoryIcon
                                        bg="#2fc4a6"
                                        category={this.state.category}
                                        amount={(this.state.amount - this.state.transaction).toFixed(2)}
                                    />
                                </Grid>
                            ) : (
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <CategoryIcon bg="#2fc4ac" category="pick a category" amount="--" />
                                    </Grid>

                                )
                            }

                        </Grid>

                        <div style={{ margin: 40 }}>
                            <Grid container justify="space-around" spacing={16}>
                                {this.state.budgets.length > 0 ? (
                                    this.state.budgets.map(doc => (
                                        <Grid item lg={4} md={4} sm={6} xs={6}>
                                            <BudgetIcon
                                                bg="#1162bc"
                                                key={doc._id}
                                                _id={doc._id}
                                                amount={doc.amount}
                                                label={doc.label}
                                                handleClick={this.handleClick}
                                            >
                                                {doc.label}
                                            </BudgetIcon>
                                        </Grid>
                                    ))
                                ) : (
                                        <Grid item lg={12} md={12} sm={12} xs={12}>
                                            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                                <i class="fa fa-cloud-download-alt"></i>
                                            </div>
                                        </Grid>
                                    )
                                }
                            </Grid>
                        </div>

                        <Grid container justify="center">

                            <Grid item lg={7} md={7} sm={8} xs={8}>
                                <form noValidate autoComplete="off">
                                    <TextField
                                        id="filled-number"
                                        label="Transaction Amount"
                                        name="transaction"
                                        value={this.state.transaction}
                                        fullWidth={true}
                                        onChange={this.handleInputChange}
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </form>
                            </Grid>

                            <Grid item lg={4} md={4} sm={8} xs={8}>
                                <Button onClick={this.handlePurchase}>
                                    COMPLETE PURCHASE
                                </Button>
                            </Grid>

                        </Grid>

                    </Wrapper>
                </Grid>
                <Footer />
            </Grid>
        )
    }
}

export default Purchase;