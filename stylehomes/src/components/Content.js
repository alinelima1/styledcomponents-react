import React from 'react'
import styled from 'styled-components'

const Content = styled.main `
    background-color: gainsboro;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    height: 600px;
    margin: 0 auto;
    box-sizing: border-box;
    align-items: center;
`

const Contentitem = styled.p `
    color: #000;
    text-align: justify;
    font-family: 'Read';
    padding: 25px;
`

export default function content() {
    return (
        <React.Fragment>
            <Content>
                <Contentitem>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia urna felis, nec tempor eros varius sed. Phasellus bibendum pharetra felis eget tempus. Curabitur rhoncus sed diam eu ullamcorper. Donec vulputate fringilla metus vel condimentum. Sed in nibh a dolor accumsan pretium ac vel est. Integer euismod, risus non cursus rutrum, turpis elit vestibulum turpis, eget laoreet odio turpis sed mauris. Nam finibus odio sit amet ultrices interdum. Morbi at augue laoreet lectus ultricies laoreet sit amet vitae justo. Duis varius, felis vel interdum finibus, dolor risus efficitur urna, ut finibus lorem orci interdum elit.
                </Contentitem>
                <Contentitem>
                Nam sit amet velit condimentum, venenatis urna sed, venenatis neque. In mi lorem, auctor ut diam a, vulputate posuere nibh. Morbi eu accumsan leo, in rutrum odio. Donec bibendum augue tellus, at eleifend odio elementum at. Pellentesque ullamcorper in purus ut porttitor. Duis in orci consectetur, posuere libero ut, vestibulum massa. In venenatis auctor neque, ut tincidunt urna elementum a. Integer quis cursus sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer quis odio vitae tellus mollis pharetra. Sed mollis felis augue, ut gravida sem hendrerit vel. Suspendisse ac felis a nulla lacinia ultrices nec eu justo. Vivamus ut odio felis. In ultricies lacinia cursus. Fusce non viverra ligula. Praesent nec placerat odio, vel tincidunt mi.
                </Contentitem>
            </Content>
        </React.Fragment>
    )
}
