import React from 'react'
import styled from 'react-emotion'

const Wrapper = styled('div')`
    
    display: flex;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    border-radius: 10px;
    padding: 20px;
    margin: 30px;
    background-color: #f2f3f4;
    border: 02px solid #3de28c

`
    
const ArticleWrapper = styled('div')`
    text-align: left;
    flex: 85%;
    margin: 10px 0;
`

const Link = styled('a')`
    text-decoration: none;
    color: #1162bc;
`

const Headline = styled('h2')`
    font-size: 24px;
    color: #1162bc;
    font-family: 'Roboto', sans-serif;
    font-weight: boldest;
    transition: all .3s ease-in-out;

    :hover {
        transform: scale(1.05)
    }
`

const Text = styled('h2')`
    font-size: 17px;
    color: #1162bc;
    font-family: 'Roboto', sans-serif;
`

const Save = styled('button')`
    cursor: pointer;
    color: white;
    margin: 0px 0px 0px 120px;
    background-color: #1162bc;
    font-family: 'Roboto', sans-serif;
    border: solid 03px #1162bc;
    border-radius: 10px;
    outline: none;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    transition: all .3s ease-in-out;

    :hover {
        transform: scale(1.10)
    }
`

const Article = props => (

    <Wrapper>
        <Link style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: '0px 25px 0px 10px ' }}href={props.link} target="_blank">
        <img style={{ border: 'solid 03px #1162bc', height: '105px', width: '160px' }} src={props.picture} alt=''></img>
        </Link>
        <ArticleWrapper>
            <Link href={props.link} target="_blank"><Headline>{props.title}</Headline></Link>
            <Text>
                {props.excerpt}
            </Text>


            <Save style={{ margin: '0px 0px 0px 130px'}} 
                title={props.title}
                excerpt = {props.excerpt}
                link = {props.link}
                picture = {props.picture}
                onClick= { () => {props.onClickFn(props.title, props.excerpt, props.link, props.picture)} }
                >
                {props.buttonText}
            </Save>


        </ArticleWrapper>
    </Wrapper>

)

export default Article
