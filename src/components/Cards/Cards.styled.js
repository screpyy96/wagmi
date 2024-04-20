import styled from 'styled-components';
import Image from 'next/image';

const MainContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr); /* 3 columns with equal width */
border-radius: 10px;
padding: 20px;
width: 90%;
margin: 2rem auto;
@media (max-width: 768px) {
  
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
}

`
const CardContainer = styled.div`
color: white;
width: 90%;
margin: 0 auto;
display: flex;
flex-direction: row;
align-items: center;
justify-content: start;
border-radius: 10px;
border-radius: 10px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.2); /* Setăm culoarea de fundal la alb semi-transparent */
  backdrop-filter: blur(5px); /* Adăugăm un efect de blur */
  @media (max-width: 768px) {
    width:90%;
    margin: 0 auto;
  }
`;

const CardImg = styled(Image)`
  /* Dimensiuni */
  width: 70%; /* Lățimea imaginii */
  height: auto; /* Înălțimea se ajustează automat pentru a păstra proporțiile */

  /* Margini și padding */
  padding: 20px; /* Elimină padding-ul implicite */

  /* Bază */
  display: block; /* Face imaginea să fie element de tip bloc */
  border-radius: 8px; /* Rotunjirea colțurilor imaginii */
  @media (max-width: 768px) {
    width: 40%; /* Lățimea imaginii */
    height: auto; /* Înălțimea se ajustează automat pentru a păstra proporțiile */
  }
`;

// Stilizare pentru titlu
const Title = styled.h2`
  font-size: 1.2rem; /* Dimensiunea fontului */
  margin-bottom: 10px; /* Spațiu între titlu și paragraf */
`;

// Stilizare pentru paragraf
const Description = styled.p`
  font-size: 1.2rem; /* Dimensiunea fontului */
  text-align: left;
`;
const MainTitle = styled.h2`
text-align: center;
color: white;
margin-top: 30px;
margin-bottom: -30px;
`;
export {MainTitle,Title,Description,CardImg,MainContainer,CardContainer}