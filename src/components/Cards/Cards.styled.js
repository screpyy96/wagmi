import styled from 'styled-components';

const MainContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr); /* 3 columns with equal width */
gap: 20px; /* Spacing between grid items */
border-radius: 10px;
margin-top: 70px;
padding: 20px;
@media (max-width: 768px) {
  
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
}

`
const CardContainer = styled.div`
color: white;
width: 80%;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
padding: 20px;
border-radius: 10px;
border-radius: 10px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.2); /* Setăm culoarea de fundal la alb semi-transparent */
  backdrop-filter: blur(5px); /* Adăugăm un efect de blur */
`;

const CardImg = styled.img`
  /* Dimensiuni */
  width: 70%; /* Lățimea imaginii */
  height: auto; /* Înălțimea se ajustează automat pentru a păstra proporțiile */

  /* Margini și padding */
//   margin: 20px; /* Elimină marginile implicite */
  padding: 20px; /* Elimină padding-ul implicite */

  /* Bază */
  display: block; /* Face imaginea să fie element de tip bloc */
  border-radius: 8px; /* Rotunjirea colțurilor imaginii */
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