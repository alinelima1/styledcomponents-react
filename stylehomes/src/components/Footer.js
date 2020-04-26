import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer `
    position: fixed;
    bottom: 0;
    left:0;
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: darkblue;
    height: 90px;
`

const Footeritem = styled.div `
    text-decoration: none;
    font-size: 16px;
    color: #fff;
    font-weight: bold;
`

export default function footer() {
    return (
        <React.Fragment>
            <Footer>
                <Footeritem>
                    Aula Sobre Styled Components
                </Footeritem>
            </Footer>
        </React.Fragment>
    )
}
