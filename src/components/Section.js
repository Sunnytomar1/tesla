import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';



function Section({title,description,leftBtnText,rightBtnText,backgroundImg}) {

    return (
        <Wrap bgImage={backgroundImg}>

            <Fade bottom>
            <ItemText>
                <h1>{title}</h1>    {/* in place of {title} earlier Model S was written but after using props we do like this  */}
    <p>{description}</p>
                </ItemText>

            </Fade>
           
<Buttons>

    <Fade bottom>


    <ButtonGroup>

                    
<LeftButton>
{leftBtnText}
</LeftButton>


{rightBtnText &&  <RightButton> {rightBtnText} </RightButton>


}


</ButtonGroup>



    </Fade>




                <DownArrow src="/images/down-arrow.svg"/>


</Buttons>
                
        
        </Wrap>
    )
}

export default Section

const Wrap=styled.div `
  height:100vh;
  width:100vw;
  background-color:orange;
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  background-image: url('/images/model-s.jpg');

  display:flex;
  flex-direction:column;
  justify-content:space-between;  //for vertical alignment
  align-items:center;  //for horizontal alignment

  background-image: ${props=> `url("/images/${props.bgImage}")`}




`

const ItemText=styled.div `

padding-top:20vh;
text-align:center;


`

const ButtonGroup=styled.div `
display:flex;
//margin-bottom:30px;

@media(max-width:768px){
    flex-direction:column;
}




`

const LeftButton=styled.div `
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:#fff;

display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:14px;
cursor:pointer;

margin:20px 40px 0;
`

const RightButton=styled(LeftButton) `
background-color:white;
opacity:0.65;
color:black;

`

const DownArrow=styled.img `

margin-top:20px;
height:40px;


animation: animateDown infinite 1.5s;


`

const Buttons=styled.div `

display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`