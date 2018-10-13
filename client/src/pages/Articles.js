import React, { Component } from 'react'
import API from '../utils/API'
import Grid from '@material-ui/core/Grid'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Article from '../components/Article'
import Wrapper from '../components/Wrapper'
import Button from '../components/Button'


class Articles extends Component {

    state = {
        articles: []
    }

    usNews = () => {
        API.findUSNews().then(articles => {
            this.setState({ articles: articles.data })
        })
    }

    todayNews = () => {
        API.findToday().then(articles => {
            this.setState({ articles: articles.data })
        })
    }

    streetNews = () => {
        API.findStreet().then(articles => {
            this.setState({ articles: articles.data })
        })
    }

    render() {
        return (
            <div>
            <Grid container justify="center" style={{ marginBottom: 100 }}>

                <Grid item lg={8} md={10} sm={10} xs={10}>
                    <Wrapper>
                        <Header headerText="Staying on Track" />

                        <Button onClick={this.usNews}>
                            US News
                         </Button>

                        <Button onClick={this.streetNews}>
                            The Street
                         </Button>

                        <Button onClick={this.todayNews}>
                            USA Today
                         </Button>

                        {this.state.articles.length > 0 ? (
                            this.state.articles.map(article => (
                                <Article headline={article.title} link={article.link} excerpt={article.excerpt}></Article>
                            ))
                        ) : (
                                <p>Read up on how to manage your budget and perfect your personal financing.</p>
                            )

                        }

                    </Wrapper>
                </Grid>
            </Grid>
            <Footer />
            </div>

        )
    }
}

export default Articles;