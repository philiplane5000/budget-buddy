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
  height: 50px;
  left: 0;
  bottom: 0;
  position: fixed;

  @media (max-width: 765px) {
    display; flex;
    justify-content: center;
  }
`

const Team = styled('div')`
  display: flex;
  justify-content: space-around;
  width: 250px;
  color: inherit;
  text-decoration: none;
  margin-left: 10px;

  @media (max-width: 765px) {
    display: none;
  }
`

const Copyright = styled('div')`
  margin-right: 170px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 765px) {
    margin: auto;
  }
`


const Github = styled('div')`
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  margin-right: 10px;

  @media (max-width: 765px) {
    display: none;
  }
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
          <Copyright>
          <div>2018 &copy; Budget Buddy</div>
          </Copyright>
          <Github>
            <a href='https://github.com/philiptd5000/budget-buddy' target='https://github.com/philiptd5000/budget-buddy' style={{ color: 'inherit', fontFamily: 'inherit', textDecoration: 'none' }}>
              <i className="fab fa-github"></i> Github
            </a>
          </Github>
        </Wrapper>
      )}
    </Motion>
  )
}

export default Footer
