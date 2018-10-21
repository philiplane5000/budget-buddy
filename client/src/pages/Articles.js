import React, { Component } from 'react'
import API from '../utils/API'
import Grid from '@material-ui/core/Grid'
import Header from '../components/Header'
import Article from '../components/Article'
import Wrapper from '../components/Wrapper'
import Button from '../components/Button'
import { ProtectedScreen } from '../components/context'

class Articles extends Component {

    state = {
        articles: [],
    }

    cnbcNews = () => {
        API.findCnbc().then(articles => {
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

    saveArticle = (title, excerpt, link, picture) => {
        const article = {
            title,
            excerpt,
            link,
            picture
        }
        API.saveArticle(this.state.uid, article)
    }

    deleteArticle = (title, excerpt, link, picture) => {
        const article = {
            title,
            excerpt,
            link,
            picture
        }
        API.deleteArticle(this.state.uid, article).then(res => {
            console.log(res)
        }).then(() => {
            API.retrieveSavedArticles(this.state.uid).then(dbUser => {
                this.setState({ articles: dbUser.data.articles })
                console.log(this.state)
            })
        })
    }

    retrieveSavedArticles = () => {
        API.retrieveSavedArticles(this.state.uid).then(dbUser => {
            this.setState({ articles: dbUser.data.articles })
            console.log(this.state)
        })
    }

    componentWillMount() {
        let user = JSON.parse(sessionStorage.getItem('user'));
        this.setState({ uid: user.uid })
    }

    render() {
        return (
            <ProtectedScreen>
                <Grid container justify='center' style={{ marginBottom: 100 }}>

                    <Grid item lg={6} md={8} sm={10} xs={10}>
                        <Wrapper>
                            <Header>
                                Staying On Track
                        </Header>

                            <Button onClick={this.todayNews}>
                                USA Today
                         </Button>

                            <Button onClick={this.streetNews}>
                                The Street
                         </Button>

                            <Button onClick={this.cnbcNews}>
                                CNBC
                         </Button>

                            <Button onClick={this.retrieveSavedArticles}>
                                Saved Articles
                         </Button>

                            {console.log(this.state.articles)}

                            {this.state.articles.length > 0 ? (
                                this.state.articles.map(article => (
                                    <Article
                                        title={article.title}
                                        link={article.link}
                                        excerpt={article.excerpt}
                                        picture={article.picture}
                                        onClickFn={(article.saved) ? this.deleteArticle : this.saveArticle}
                                        buttonText={(article.saved) ? 'Delete' : 'Save'}>
                                    </Article>
                                ))
                            ) : (
                                    <h3 style={{ color: '#1162bc', fontFamily: 'Roboto, sans-serif', fontSize: 20 }}>Read up on how to manage your budget and perfect your personal financing.</h3>
                                )

                            }

                        </Wrapper>
                    </Grid>
                </Grid>
            </ProtectedScreen>
        )
    }
}

export default Articles