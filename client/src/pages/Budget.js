import React, { Component } from 'react';
import styled from "react-emotion";
import Grid from "@material-ui/core/Grid";
import BudgetItem from "../components/BudgetItem";

const Wrapper = styled('div')(
    {
        border: '5px solid #092d63',
        itemAlign: 'center',
        margin: '20px 0'
    }
)

const Category = styled('div')(
    {
        border: '2px solid #092d63'
    }
)

const SaveButton = styled('button')(
    {
        padding: 15,
        textTransform: 'uppercase',
        border: '1px solid black',
        borderRadius: 5
    }
)

class Budget extends Component {

    state = {
        data: {},
        category: '',
        amount: ''
    }

    componentDidMount() {
        console.log("BUDGET PAGE")
    }

    render() {
        return (
            <Grid container justify="center">

                <Grid item lg={6} md={6} sm={10} xs={12}>
                    <Wrapper>
                        <h1>
                            BUDGET PAGE
                        </h1>
                        <Category>
                            <BudgetItem
                                name="category"
                                label="Category"
                                onChangeFn={this.handleChange}
                                value={this.state.name}
                            />
                            <BudgetItem
                                name="amount"
                                label="Amount"
                                onChangeFn={this.handleChange}
                                value={this.state.amount}
                            />
                        </Category>
                        <Category>
                            <BudgetItem
                                name="category"
                                label="Category"
                                onChangeFn={this.handleChange}
                                value={this.state.name}
                            />
                            <BudgetItem
                                name="amount"
                                label="Amount"
                                onChangeFn={this.handleChange}
                                value={this.state.amount}
                            />
                        </Category>
                        <Category>
                            <BudgetItem
                                name="category"
                                label="Category"
                                onChangeFn={this.handleChange}
                                value={this.state.name}
                            />
                            <BudgetItem
                                name="amount"
                                label="Amount"
                                onChangeFn={this.handleChange}
                                value={this.state.amount}
                            />
                        </Category>
                        <Category>
                            <BudgetItem
                                name="category"
                                label="Category"
                                onChangeFn={this.handleChange}
                                value={this.state.name}
                            />
                            <BudgetItem
                                name="amount"
                                label="Amount"
                                onChangeFn={this.handleChange}
                                value={this.state.amount}
                            />
                        </Category>
                        <SaveButton onClick={this.handleSubmit}>
                            Save
                        </SaveButton>
                    </Wrapper>
                </Grid>

            </Grid>
        )
    }
}

export default Budget;