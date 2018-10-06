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
        meals: '',
        groceries: '',
        household: '',
        recreation: '',
        transportation: '',
        misc: ''
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

                <Grid item lg={6} md={6} sm={10} xs={12}>
                    <Wrapper>
                        <h1>
                            BUDGET PAGE
                        </h1>
                        <Category>
                            <BudgetItem
                                name="meals"
                                label="Meals Out"
                                onChangeFn={this.handleChange}
                                value={this.state.amount}
                            />
                        </Category>
                        <Category>
                            <BudgetItem
                                name="groceries"
                                label="Groceries"
                                onChangeFn={this.handleChange}
                                value={this.state.name}
                            />
                            <BudgetItem
                                name="household"
                                label="Household Items"
                                onChangeFn={this.handleChange}
                                value={this.state.amount}
                            />
                        </Category>
                        <Category>
                            <BudgetItem
                                name="recreation"
                                label="Recreation"
                                onChangeFn={this.handleChange}
                                value={this.state.name}
                            />
                            <BudgetItem
                                name="transportation"
                                label="Transportation"
                                onChangeFn={this.handleChange}
                                value={this.state.amount}
                            />
                        </Category>
                        <Category>
                            <BudgetItem
                                name="misc"
                                label="Misc"
                                onChangeFn={this.handleChange}
                                value={this.state.name}
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