import React from 'react'
import styled from 'react-emotion'

const Wrapper = styled('div')`
    
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    border-radius: 05px;
    padding: 20px;
    margin: 30px;
    background-color: #f2f3f4;
    border: 02px solid #3de28c

`
    
const ArticleWrapper = styled('div')`
    text-align: left;
    flex: 85%;
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
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
    background-color: #1162bc;
    font-family: 'Roboto', sans-serif;
    min-width: 80px;
    height: 40px;
    margin: 0px 0px 05px 185px;
    border-radius: 05px;
    border: none;
    outline: none;
    box-shadow: 0 05px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    transition: all .3s ease-in-out;

    :hover {
        transform: scale(1.05);
        background-color: #3de28c;
    }

    @media (max-width: 765px) {
        margin: auto;
      }


`

const Img = styled('div') `
    border: solid 03px #1162bc;
    height: 105px;
    width: 160px;
    margin: 0px 25px 0px 10px;
    background-image:  url(${props => props.picture});
    background-position: center;
    background-repeat: no repeat;
    background-size: cover;

    @media (max-width: 765px) {
        display: none;
      }
`

const Article = props => (

    <Wrapper>
        <ArticleWrapper>
        <Link href={props.link} target="_blank">
        <Img picture={props.picture} />
        </Link>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
            <Link href={props.link} target="_blank"><Headline>{props.title}</Headline></Link>
            <Text>
                {props.excerpt}
            </Text>
            </div>
        </ArticleWrapper>
        <Save 
                title={props.title}
                excerpt = {props.excerpt}
                link = {props.link}
                picture = {props.picture}
                onClick= { () => {props.onClickFn(props.title, props.excerpt, props.link, props.picture)} }
                >
                {props.buttonText}
            </Save>
    </Wrapper>

)

export default Article
