import React, { Component } from 'react'
import styled from "react-emotion"
import API from "../utils/API"
import Grid from "@material-ui/core/Grid"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Article from "../components/Article"

const Wrapper = styled('div')(
    {
        border: '3px solid #1162bc',
        textAlign: 'center',
        margin: '20px 0',
        backgroundColor: '#f9f9f9',
        borderRadius: 10
    }
)

class Articles extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        API.findUSNews().then(articles => {
            this.setState({articles: articles.data})
        })
    }

    render() {
        return (
            <Grid container justify="center">

                <Grid item lg={8} md={10} sm={10} xs={12}>
                    <Wrapper>
                        <Header headerText="Articles Page"/>

                    {this.state.articles.length > 0 ? (
                        this.state.articles.map(article=>(
                            <Article headline={article.title} link={article.link} excerpt={article.excerpt}></Article>
                        ))
                    ) : (
                        <h6>loading...</h6>
                    )
                
                }

                    </Wrapper>
                </Grid>
                <Footer />
            </Grid>
        )
    }
}

export default Articles;