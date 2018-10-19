import React from 'react'
import styled from 'react-emotion'
import { Motion, spring } from 'react-motion'

const Wrapper = styled('div')`
  color: white;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  width: 100%;
  background-color: #092d63;
  height: 60px,
  border-top: 2px solid #3de28c;
  left: 0;
  bottom: 0;
  position: fixed;
`

const Logo = styled('div')`
  width: 200px;
  margin: 0 auto;  
`

const Footer = () => {
  return (
    <Motion
      defaultStyle={{ x: 400 }}
      style={{
        x: spring(0)
      }}
    >
      {style => (
        <Wrapper style={{ transform: `translateY(${style.x}px)` }}>
          <Logo>
            <h4>2018 &copy; Bean Team</h4>
          </Logo>
        </Wrapper>
      )}
    </Motion>
  )
}

export default Footer
