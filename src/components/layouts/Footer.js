import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <FooterContainer>
            <span >&copy; {new Date().getFullYear()} All rights reserved.</span>
            
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.footer`
background: var(--green-shade);
display:flex;
justify-content: center;
align-items: center;
text-align:center;
height: 4rem;
width: 100%;
span {
margin: 0 auto;
}
`;
