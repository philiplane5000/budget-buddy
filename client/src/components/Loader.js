import React from 'react'
import styled, { keyframes } from 'react-emotion'

const Container = styled('div')`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    position: relative;
    margin: 0 auto;
`

const Circle = styled('span')`
    display: inline-block;
    width: 20px;
    height 20px;
    border-radius: 100%;
    background-color: #1162bc;
    margin: 35px 5px;
    opacity: 0;
`

const opacitychange = keyframes`
0%, 100% {
    opacity: 0;
  }

60% {
    opacity: 1;
  }
`
const Loader = () => {
    return (
        <Container>
            <Circle style={{animation: `${opacitychange} 1s ease-in-out infinite`}}/>
            <Circle style={{animation: `${opacitychange} 1s ease-in-out 0.33s infinite`}}/>
            <Circle style={{animation: `${opacitychange} 1s ease-in-out 0.66s infinite`}}/>
        </Container>
    )
}

export default Loader;
