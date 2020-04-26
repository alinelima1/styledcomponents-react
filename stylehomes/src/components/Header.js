import React from 'react'
import styled from 'styled-components'

const Nav = styled.div `
    background-color: darkblue;
    position: relative;
    display: flex;
    width: 100%;
    height: 60px;
    align-items: center;
    justify-content: space-between;
`

const Item = styled.div `
    font-size: 14px;
    font-family: 'Read';
    font-weight: bold;
    padding: 15%;
    vertical-align: center;
    color: white;
`

export default function header() {
    return (
        <Nav>
            <Item>Home</Item>
            <Item>Contato</Item>
            <Item>Sobre</Item>
        </Nav>
    )
}
