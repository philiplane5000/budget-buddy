import React from 'react'
import styled from 'react-emotion'

const Wrap = styled('div')(
    {
        border: '3px solid #1162bc',
        paddingTop: 20,
        paddingBottom: 40,
        borderRadius: 10,
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);',
        backgroundColor: '#f9f9f9'
    }
)

const Wrapper = props => (

    <Wrap>
        {props.children}
    </Wrap>

)

export default Wrapper


