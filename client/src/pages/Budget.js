import React, { Component } from 'react';
import styled from "react-emotion";
import Grid from "@material-ui/core/Grid";
import BudgetItem from "../components/BudgetItem";
import API from "../utils/API";
import CategoryIcon from "../components/CategoryIcon"
import Header from "../components/Header";
import Footer from "../components/Footer";
import TextField from "@material-ui/core/TextField";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal)

const Wrapper = styled('div')(
    {
        border: '3px solid #1162bc',
        borderRadius: '5px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);',
        padding: '20px 20px 40px 20px',
        itemAlign: 'center',
        color: '#092d63',
        backgroundColor: '#f9f9f9'
    }
)

const FormWrapper = styled('div')`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 350px;
        margin: 0 auto;
        padding-bottom: 25px;
`

const InputWrapper = styled('div')({
    flex: 0.75,
    flexWrap: 'wrap',
    marginRight: 10
})

const Button = styled('div')({
    flex: .25,
    flexWrap: 'wrap',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 65,
    marginTop: 10,
    backgroundColor: '#ffc107',
    color: 'white',
    fontFamily: 'Calibri',

})

class Budget extends Component {

    state = {
        budgets: [],
        category: 'Pick a Category',
        amount: '--',
        _id: ''
    }

    componentDidMount() {
        API.getCurrentBudget().then(dbBudget => {
            this.setState({ budgets: dbBudget.data })
            console.log(this.state)
        })
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleClick = (category, amount, _id) => {
        this.setState({ category, amount, _id })
    }

    handleSubmit = () => {
        const adjusted = parseFloat(Math.round(this.state.amount * 100) / 100).toFixed(2)
        API.updateBudgetCategory(this.state._id, { amount: adjusted })
            .then(dbBudget => {
                MySwal.fire({
                    title: <h3 style={{fontFamily: 'Calibri'}}>{this.state.category.toUpperCase()} UPDATED!</h3>,
                    type: 'success',
                    confirmButtonText: 'Ok'
                })
                console.log(dbBudget.status)
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
            }).catch(error => {
                console.log(error)
            })

    }

    render() {
        return (
            <Grid container justify="center">
                <Grid item lg={6} md={8} sm={10} xs={12} spacing={40}>
                    <Wrapper>
                        <Header headerText="Manage Your Budget" />

                        <Grid container justify="center">

                            <Grid item lg={12} md={12} sm={12} xs={12}>

                                <CategoryIcon
                                    bg="#2fc4a6"
                                    category={this.state.category}
                                    amount={this.state.amount !== '--' ? parseFloat(Math.round(this.state.amount * 100) / 100).toFixed(2) : '--'}
                                />
                            </Grid>

                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <FormWrapper>

                                    <InputWrapper>
                                        <form noValidate autoComplete="off">
                                            <TextField
                                                id="standard-number"
                                                label="Set/Adjust Spending Limit:"
                                                name="amount"
                                                value={this.state.amount}
                                                onChange={this.handleChange}
                                                type="number"
                                                fullWidth={true}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                margin="normal"
                                                variant="outlined"
                                            />
                                        </form>

                                    </InputWrapper>

                                    <Button onClick={() => this.handleSubmit(this.state.amount)}>
                                        SUBMIT
                                    </Button>
                                </FormWrapper>

                            </Grid>

                            {
                                this.state.budgets.length > 0
                                    ? this.state.budgets.map(doc =>
                                        <Grid item lg={6} md={6} md={12} sm={12}>
                                            <BudgetItem
                                                key={doc._id}
                                                category={doc.category}
                                                bg={(this.state.category === doc.category) ? "#2fc4a6" : "#dc3545"}
                                                label={doc.label}
                                                amount={doc.amount}
                                                _id={doc._id}
                                                handleClick={this.handleClick}
                                            />
                                        </Grid>
                                    )
                                    : <h2>loading</h2>
                            }
                        </Grid>

                    </Wrapper>
                </Grid>
                <Footer />
            </Grid>
        )
    }
}

export default Budget;