import React from 'react'
import styled from 'react-emotion'
import { Motion, spring } from 'react-motion'

const Wrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  background-color: #092d63;
  border-top: 2.5px solid #3de28c;
  height: 60px;
  left: 0;
  bottom: 0;
  position: fixed;
`

const Team = styled('div')`
  display: flex;
  justify-content: space-around;
  width: 250px;
  color: inherit;
  text-decoration: none;
  margin-left: 10px;
`

const Github = styled('div')`
  text-decoration: none;
  margin-right: 10px;
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
        <Wrapper style={{ 
          transform: `translateY(${style.x}px)`
        }}>
          <Team>Team:  
            <a href='https://github.com/philiptd5000' target='https://github.com/philiptd5000' style={{
            color: 'inherit', textDecoration: 'none', fontWeight: '300' 
            }}>Enrique</a>
            <a href='https://github.com/philiptd5000' target='https://github.com/philiptd5000' style={{
            color: 'inherit', textDecoration: 'none', fontWeight: '300' 
            }}>Nick</a>
            <a href='https://github.com/nlevine1' target='https://github.com/nlevine1' style={{
            color: 'inherit', textDecoration: 'none', fontWeight: '300' 
            }}>Nigel</a>
            <a href='https://github.com/philiptd5000' target='https://github.com/philiptd5000' style={{
            color: 'inherit', textDecoration: 'none', fontWeight: '300' 
            }}>Phil</a>
          </Team>
          <div>2018 &copy; Budget Buddy</div>
          <Github>
            <a href='https://github.com/philiptd5000/budget-buddy' target='https://github.com/philiptd5000/budget-buddy' style={{ color: 'inherit', fontFamily: 'inherit', textDecoration: 'none' }}>
              <i class="fab fa-github"></i> Github
            </a>
          </Github>
        </Wrapper>
      )}
    </Motion>
  )
}

export default Footer
