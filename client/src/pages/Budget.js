import React, { Component } from 'react';
import styled from "react-emotion";
import { Motion, spring } from 'react-motion';
import Grid from "@material-ui/core/Grid";
import BudgetItem from "../components/BudgetItem";
import API from "../utils/API";
import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Wrapper = styled('div')(
    {
        border: '3px solid #1162bc',
        borderRadius: '5px',
        itemAlign: 'center',
        color: '#092d63',
        backgroundColor: 'f9f9f9',
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);',
    }
)

class Budget extends Component {

    state = {
        budgets: []
    }

    componentDidMount() {
        API.getCurrentBudget().then(dbBudget => {
            this.setState({budgets: dbBudget.data})
            console.log(this.state)
        })
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
                <Grid item lg={6} md={6} sm={8} xs={8}>
                    <Wrapper>
                    <Header headerText="Your Budget Setup"/>
                        {
                            this.state.budgets.length > 0
                            ?   this.state.budgets.map(doc =>
                                <BudgetItem
                                category={doc.category}
                                label={doc.label}
                                onChangeFn={this.handleChange}
                                amount={doc.amount} 
                                />
                                )
                            :   <h2>loading</h2>
                        }

                        <Button onClick={this.handleSubmit}>
                            Save
                        </Button>

                    </Wrapper>
                </Grid>
                <Footer />
            </Grid>
        )
    }
}

export default Budget;