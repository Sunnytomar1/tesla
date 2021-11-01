import React from 'react'
import styled from 'styled-components';

function Intro() {
    return (
        <Container>
            <Element>
<h1>we are the best</h1>
            </Element>
        </Container>
    )
}

export default Intro

const Container=styled.div `
height:100vh;
background-color:yellow;
position:relative;




`



const Element=styled.div `

background-color:rgba(3,3,3);
height:90vh;
width:90vw;

position:absolute;
content:"";
margin:0 30px;
padding:-20px 40px;
margin:-34px 40px;





`