import React from 'react'
import styled from 'styled-components'

import Section from './Section'
import Intro from './Intro'

function Home() {
    return (
        < Container>
            <Section
            title="Model S"
            description="Order Online For Touchless Delievery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            
            
            />

            <Section
            title="Model Y"
            description="Order Online For Touchless Delievery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            
            
            />
           
            <Section
            title="Model 3"
            description="Order Online For Touchless Delievery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            
            
            />

            <Section
             title="Model X"
             description="Order Online For Touchless Delievery"
             backgroundImg="model-x.jpg"
             leftBtnText="Custom Order"
             rightBtnText="Existing inventory"
            
            />

            <Section
            title="Lowest Cost Solar Panels in Amsterdam"
            description="Money-back guarantee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
            
            
            
            />

          <Section
            title="Solar forNew Roofs"
            description="Solar Roof costs less than a New Roof Plus Solar Panels"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
            
            
            
            />

          <Section
            title="Accessories"
           
            backgroundImg="accessories.jpg"
            leftBtnText="Shop Now"
           
            
            
            
            />
 

            <Intro/>

        </Container>
    )
}

export default Home

const Container=styled.div `
height:100vh;

`