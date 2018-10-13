import React from 'react'
import styled from 'react-emotion'

const Wrapper = styled('div')(
    {
        display: 'flex',
        border: '6px double #2fc4ac',
        borderRadius: 10,
        padding: 20,
        margin: 20
    }
)

const IconWrapper = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 15%;
    margin-right: 40px;
    border: 2.5px solid #1162bc;

    @media (max-width: 980px) {
        display: none;
      }
`
    
const ArticleWrapper = styled('div')(
    {
        textAlign: 'left',
        flex: '85%',
        margin: '10px 0',
    }
)

const Link = styled('a')(
    {
        textDecoration: 'none',
        color: 'inherit'
    }
)

const Headline = styled('h3')(
    {
        fontSize: 24,
        color: '#1162bc',
        fontFamily: 'Calibri'
    }
)

const Article = props => (

    <Wrapper>
        <IconWrapper><Link href={props.link} target="_blank"><i class="far fa-newspaper fa-4x"></i></Link></IconWrapper>
        <ArticleWrapper>
            <Link href={props.link} target="_blank"><Headline>{props.headline}</Headline></Link>
            <h3>{props.excerpt}</h3>
        </ArticleWrapper>
    </Wrapper>

)

export default Article
