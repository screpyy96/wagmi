import React, { useState } from 'react';
import styled from 'styled-components';

import {HoverText,
    Container,
    ButtonContainer,Button,Wrapper,ResponsiveImage} from "./ShowText.styled"


    const HoverTextComponent = () => {
        const content = [
          {
            title: "https://satoshidex.ai/svg/featured/iconHolder.svg",
           button: "Read More 📈",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut orci sit amet mi commodo vehicula.,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut orci sit amet mi commodo vehicula.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut orci sit amet mi commodo vehicula."
          },
          {
            title: "https://satoshidex.ai/svg/featured/bussinesInsider.svg",
           button: "Read More 📈",
            text: "Nulla facilisi. Ut posuere lorem id massa iLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut orci sit amet mi commodo vehicula.nterdum, sed aliquet lacus hendrerit."
          },
          {
            title: "https://satoshidex.ai/svg/featured/finBold.svg",
           button: "Read More 📈",
            text: "Pellentesque et nisl vel enim tempLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut orci sit amet mi commodo vehicula.or fermentum. Cras ut rutrum orci."
          },
          {
            title: "https://satoshidex.ai/svg/featured/yahoo.svg",
           button: "Read More 📈",
            text: "Vivamus nec nibh nec elit vaLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut orci sit amet mi commodo vehicula.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut orci sit amet mi commodo vehicula.rius consectetur. Integer commodo leo eu malesuada finibus."
          },
          {
            title: "https://satoshidex.ai/svg/featured/coinMarket.svg",
           button: "Read More 📈",
            text: "Duis vel lorem at mi rhoncus luctus. Nulla ut bibendum arcu.Duis vel lorem at mi ,Duis vel lorem at mi rhoncus luctus. Nulla ut bibendum arcu. ,rhoncus luctus. Nulla ut bibendum arcu."
          },
          {
            title: "https://satoshidex.ai/svg/featured/msn.svg",
          button: "Read More 📈",
            text: "Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut orci sit amet mi commodo vehicula.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut orci sit amet mi commodo vehicula.Sed ac felis fermentum, finibus odio et, lobortis ligula."
          }
        ];
      
        const [displayText, setDisplayText] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut orci sit amet mi commodo vehicula.');
       
       
  // Actualizează această funcție pentru a primi doar textul
const handleMouseEnter = (text) => {
    setDisplayText(text);
  };

        return (
          
                <>
                  <h2 style={{color: "white", textAlign: "center", padding: "20px"}}>Showed in</h2>
                <Wrapper>
                  <Container>
                    {/* Generarea butoanelor */}
                    {content.map((item, index) => (
                    <ButtonContainer
                        key={index}
                        onMouseEnter={() => handleMouseEnter(item.text)}
                    >
                       <ResponsiveImage src={item.title} alt="" />
                    </ButtonContainer>
                    ))}
                    </Container>
                    <HoverText >
                          <h3>Very long title</h3>
                         <p>{displayText}</p>
                        <Button>Read More</Button>
                    </HoverText>
                  
                 </Wrapper>
                </>
        );
      };
      
      export default HoverTextComponent;
