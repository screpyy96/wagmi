import React from 'react';


import { CardContainer, MainContainer, CardImg,Title,Description,MainTitle } from './Cards.styled';

const ExplorasSwap = () => {
  return (
    <CardContainer>
        <CardImg src="../../../ex.png" alt="logo"/>
       {/* <Title>Book your next trip with Exploras</Title> */}
        {/* Titlul */}
        {/* Subtitlul */}
        <Description> Exploras Swap</Description>
      </CardContainer>
  );
};

const ExplorasSolutions = () => {
    return (
      <CardContainer>
        {/* Imaginea pentru logo */}
        <CardImg src="../../../ex.png" alt="logo"/>
        {/* <Title>Book your next trip with Exploras</Title> */}
        {/* Titlul */}
        {/* Subtitlul */}
        <Description>Seamless bookings <br/></Description>
      </CardContainer>
    );
  };

  const CryptoVoyager = () => {
    return (
      <CardContainer>
        <CardImg src="../../../card2.png" alt="logo"/>
        {/* <Title>Voyager Card</Title> */}
        {/* Titlul */}
        {/* Subtitlul */}
        <Description> Spend, Earn, Explore!</Description>
     </CardContainer>
    );
  };

  const Cards = () => {
return (
    <>
    <MainTitle >Your Gateway to the Future of Tourism</MainTitle>
    <MainContainer>
        <ExplorasSolutions/>
        <ExplorasSwap/>
        <CryptoVoyager/>
    </MainContainer>
    </>
)
  }

  export default Cards