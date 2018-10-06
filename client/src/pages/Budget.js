import React, { Component } from 'react';
import styled from "react-emotion";
import Grid from "@material-ui/core/Grid";
import BudgetItem from "../components/BudgetItem";

const Wrapper = styled('div')(
    {
        border: '5px solid #092d63',
        itemAlign: 'center',
        // margin: '20px 0',
        color: '#092d63'
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
        meals: '0.00',
        groceries: '0.00',
        household: '0.00',
        recreation: '0.00',
        transportation: '0.00',
        misc: '0.00'
      }

    componentDidMount() {
        console.log("BUDGET PAGE")
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        // post my state to the api to save the budget form,
        // then set the state to some kind of success message
        // and show the user some feedback
        alert(JSON.stringify(this.state))
    }

    render() {
        return (
            <Grid container justify="center">
                    <Wrapper>

                        <h1>
                            BUDGET SETUP
                        </h1>
                        <Grid item lg={5} md={5} sm={5} xs={12}>
                            <BudgetItem
                                name="meals"
                                label="Meals Out"
                                onChangeFn={this.handleChange}
                                value={this.state.meals}
                            />
                            <BudgetItem
                                name="groceries"
                                label="Groceries"
                                onChangeFn={this.handleChange}
                                value={this.state.groceries}
                            />
                            <BudgetItem
                                name="household"
                                label="Household Items"
                                onChangeFn={this.handleChange}
                                value={this.state.household}
                            />
                        </Grid>
                        <Grid item lg={5} md={5} sm={5} xs={12}>
                            <BudgetItem
                                name="recreation"
                                label="Recreation"
                                onChangeFn={this.handleChange}
                                value={this.state.recreation}
                            />
                            <BudgetItem
                                name="transportation"
                                label="Transportation"
                                onChangeFn={this.handleChange}
                                value={this.state.transportation}
                            />
                            <BudgetItem
                                name="misc"
                                label="Misc"
                                onChangeFn={this.handleChange}
                                value={this.state.misc}
                            />
                        </Grid>
                        <SaveButton onClick={this.handleSubmit}>
                            Save
                        </SaveButton>

                    </Wrapper>
            </Grid>
        )
    }
}

export default Budget;