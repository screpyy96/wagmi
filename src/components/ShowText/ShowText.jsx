import React, { useState } from 'react';
import styled from 'styled-components';

import {HoverText,
    Container,
    ButtonContainer,Button,Wrapper} from "./ShowText.styled"


    const HoverTextComponent = () => {
        const content = [
          {
            title: "https://satoshidex.ai/svg/featured/iconHolder.svg",
           button: "Read More 📈",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut orci sit amet mi commodo vehicula."
          },
          {
            title: "https://satoshidex.ai/svg/featured/bussinesInsider.svg",
           button: "Read More 📈",
            text: "Nulla facilisi. Ut posuere lorem id massa interdum, sed aliquet lacus hendrerit."
          },
          {
            title: "https://satoshidex.ai/svg/featured/finBold.svg",
           button: "Read More 📈",
            text: "Pellentesque et nisl vel enim tempor fermentum. Cras ut rutrum orci."
          },
          {
            title: "https://satoshidex.ai/svg/featured/yahoo.svg",
           button: "Read More 📈",
            text: "Vivamus nec nibh nec elit varius consectetur. Integer commodo leo eu malesuada finibus."
          },
          {
            title: "https://satoshidex.ai/svg/featured/coinMarket.svg",
           button: "Read More 📈",
            text: "Duis vel lorem at mi rhoncus luctus. Nulla ut bibendum arcu."
          },
          {
            title: "https://satoshidex.ai/svg/featured/msn.svg",
          button: "Read More 📈",
            text: "Suspendisse potenti. Sed ac felis fermentum, finibus odio et, lobortis ligula."
          }
        ];
      
        const [displayText, setDisplayText] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut orci sit amet mi commodo vehicula.');
       
       
  // Actualizează această funcție pentru a primi doar textul
const handleMouseEnter = (text) => {
    setDisplayText(text);
  };

        // Funcție pentru a șterge textul când mouse-ul este scos de pe buton

      
        // Array de obiecte cu titluri și texte asociate
        return (
          
              <Wrapper>
                <Container>
                  {/* Generarea butoanelor */}
                  {content.map((item, index) => (
                  <ButtonContainer
                      key={index}
                      onMouseEnter={() => handleMouseEnter(item.text)}

                  >
                      <img src={item.title} alt="" style={{width: "30px;", height: "22px"}}/>
                  </ButtonContainer>
                  ))}
                </Container>
                  <HoverText>
                       <p>{displayText}</p>
                      <Button>Read More</Button>
                  </HoverText>
              </Wrapper>
      
        );
      };
      
      export default HoverTextComponent;
