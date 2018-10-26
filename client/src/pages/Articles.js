import React, { Component } from 'react'
import API from '../utils/API'
import Grid from '@material-ui/core/Grid'
import Header from '../components/Header'
import Article from '../components/Article'
import Wrapper from '../components/Wrapper'
import Button from '../components/Button'
import { ProtectedScreen, FirebaseAuthContext } from '../components/context'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

class Articles extends Component {

    state = {
        articles: [],
        uid: '',
        save: 'ARTICLE',
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
            .then((updatedDb) => {
                (updatedDb.status === 200)
                    ?
                    MySwal.fire({
                        title: <h3 style={{ fontFamily: 'Roboto, sans-serif' }}>{this.state.save.toUpperCase()} SAVED!</h3>,
                        type: 'success',
                        confirmButtonText: <p style={{ fontFamily: 'Roboto, sans-serif' }}>OK</p>
                    })
                    :
                    MySwal.fire({
                        title: <h3 style={{ fontFamily: 'Roboto, sans-serif' }}>ARTICLE ALREADY SAVED!</h3>,
                        type: 'error',
                        confirmButtonText: <p style={{ fontFamily: 'Roboto, sans-serif' }}>OK</p>
                    })
            })
    }

    deleteArticle = (title, excerpt, link, picture) => {
        const article = {
            title,
            excerpt,
            link,
            picture
        }
        API.deleteArticle(this.state.uid, article)
            .then((updatedDb) => {
                (updatedDb.status === 200)
                    ?
                    MySwal.fire({
                        title: <h3 style={{ fontFamily: 'Roboto, sans-serif' }}>{this.state.save.toUpperCase()} DELETED!</h3>,
                        type: 'success',
                        confirmButtonText: <p style={{ fontFamily: 'Roboto, sans-serif' }}>OK</p>
                    })
                    :
                    MySwal.fire({
                        title: <h3 style={{ fontFamily: 'Roboto, sans-serif' }}>SOMETHING WENT WRONG...</h3>,
                        type: 'error',
                        confirmButtonText: <p style={{ fontFamily: 'Roboto, sans-serif' }}>OK</p>
                    })
            })
            .then(() => {
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

    // async componentDidMount() {
    //     const user = await JSON.parse(localStorage.getItem('user'));
    //     this.setState({ uid: user.uid })
    // }

    render() {
        return (
            <ProtectedScreen>
                <FirebaseAuthContext.Consumer>
                    {({ googleUser }) => {
                        const uid = googleUser.uid;
                        API.getCurrentUser(uid).then(User => {
                            if (User.data.articles !== undefined) {
                                this.setState({ articles: User.data.articles, uid: googleUser.uid })
                            } else {
                                this.setState({ uid })
                            }
                        }).catch(err => { throw err })
                        return (
                            <Grid container justify='center' style={{ marginBottom: 100 }}>

                                <Grid item lg={6} md={8} sm={10} xs={10}>
                                    <Wrapper>
                                        <Header>
                                            <div style={{ fontWeight: 'bold' }}> Staying On Track  </div>
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

                                        {(this.state.articles.length > 0 || this.state.articles !== undefined)
                                            ? (
                                                this.state.articles.map((article, index) => (
                                                    <Article
                                                        key={index}
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

                        )
                    }}
                </FirebaseAuthContext.Consumer>
            </ProtectedScreen>
        )
    }
}

export default Articles