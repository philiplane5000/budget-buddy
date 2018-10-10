import React, { Component } from 'react';
import styled from "react-emotion";
import Grid from "@material-ui/core/Grid";
import API from "../utils/API";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "../components/Button";
import Header from "../components/Header";

const Wrapper = styled('div')(
    {
        border: '1px solid rgba(0,0,0,0.1)',
        padding: 40,
        borderRadius: 10,
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);',
        backgroundColor: '#d5d6d2'
    }
)

const VisualsOuterWrapper = styled('div')(
    {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'nowrap',
        minWidth: 450,
        marginTop: 40,
        marginBottom: 40
    }
)

const VisualsInnerWrapper = styled('div')`
    flex: 1,
    display: flex;
    height: 100px;
    max-width: 100px;
    min-width: 100px;
    border-radius: 10px;
    background: ${props => props.background};
`;

const VisualComponent = styled('div')`
    line-height: 100px;
    font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif;
    color: ${props => props.color};
    font-size: ${props => props.size};
`;


class Purchase extends Component {

    state = {
        budgets: [],
        selectedCategoryBalance: '0.00',
        transactionAmount: '0.00',
        category: ''
    }

    componentDidMount() {
        API.getCurrentBudget().then(dbBudget => {
            this.setState({ budgets: dbBudget.data })
            console.log(this.state)
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    };

    handlePurchase = event => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {

        return (
            <Grid container justify="center">

                <Grid item lg={8} md={8} sm={10} xs={12}>

                    <Wrapper>
                        <Header color='#092d63' size="32px">MAKE A PURCHASE</Header>

                        <VisualsOuterWrapper>
                            <VisualsInnerWrapper background="#1162bc">
                                <VisualComponent color="white" size="24px" >
                                    ${this.state.selectedCategoryBalance}
                                </VisualComponent>
                            </VisualsInnerWrapper>

                            <VisualsInnerWrapper background="white">
                                <VisualComponent color="black" size="18px">
                                    <i className="fa fa-minus"></i>
                                </VisualComponent>
                            </VisualsInnerWrapper>

                            <VisualsInnerWrapper background="#dc3545">
                                <VisualComponent color="white" size="24px" >
                                    ${this.state.transactionAmount}
                                </VisualComponent>
                            </VisualsInnerWrapper>

                            <VisualsInnerWrapper background="white">
                                <VisualComponent color="black" size="18px">
                                    <i className="fa fa-equals"></i>
                                </VisualComponent>
                            </VisualsInnerWrapper>

                            <VisualsInnerWrapper background="#1162bc">
                                <VisualComponent color="white" size="24px" >
                                    <div id="result">
                                        ${(this.state.selectedCategoryBalance - this.state.transactionAmount).toFixed(2)}
                                    </div>

                                </VisualComponent>
                            </VisualsInnerWrapper>
                        </VisualsOuterWrapper>


                        <form noValidate autoComplete="off">
                            <TextField
                                select
                                label="Select Budget Category"
                                name="selectedCategoryBalance"
                                value={this.state.selectedCategoryBalance}
                                category={this.state.category}
                                fullWidth={true}
                                onChange={this.handleInputChange}
                                margin="normal"
                                variant="outlined"
                            >
                                {
                                    this.state.budgets.length > 5
                                        ? this.state.budgets.map(doc =>
                                            <MenuItem key={doc._id} value={doc.amount}>
                                                {doc.label}
                                            </MenuItem>
                                        )
                                        : <MenuItem>Empty</MenuItem>
                                }
                            </TextField>

                            <TextField
                                id="filled-number"
                                label="Transaction Amount"
                                name="transactionAmount"
                                value={this.state.transactionAmount}
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

                        <Button bg="#2fc4a6" width="200px" minWidth="120px" handlePurchase={this.handlePurchase}>
                            COMPLETE PURCHASE
                        </Button>
                    </Wrapper>

                </Grid>

            </Grid>
        )
    }
}

export default Purchase;