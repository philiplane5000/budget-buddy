import React from 'react'
import styled from 'react-emotion'

const Wrap = styled('div')`
    border: 3px solid #1162bc;
    padding-top: 20px;
    padding-bottom: 40px;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    background-color: #f9f9f9;
`

const Wrapper = props => (

    <Wrap>
        {props.children}
    </Wrap>

)

export default Wrapper


