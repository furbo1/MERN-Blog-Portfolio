import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <MainContainer>
            <h1 >Welcome to the <br/>
            Future blog!</h1>
        </MainContainer>
    )
}

export default Header

//Main container
const MainContainer = styled.header`
background: url(../../images/robot-3385181_1920.jpg) no-repeat center/cover;
height: 25rem;
h1{
    transform: translate(-50%, -50%);
    font-weight: 900;
    position: absolute;
    top: 25%;
    left: 50%;
    color: tomato;
}
`;

