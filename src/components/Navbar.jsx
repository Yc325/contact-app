import React from 'react'
import styled from 'styled-components'
import {Contacts} from '@material-ui/icons'


const Container = styled.div`
    height: 60px;
    display: flex;
    justify-content: center;
`
const Midlle = styled.div`
    padding: 10px, 20px;
    display: flex;
    align-items: center;
`
const Logo = styled.h1`
    padding-left: 10px;
    font-size: 20px;
    font-weight: 400px;
    color: black;
`
const Navbar = () => {
  return (
    <Container>
        <Midlle>
            <Contacts/> 
            <Logo>My Contacts</Logo>
        </Midlle>
    </Container>
  )
}

export default Navbar