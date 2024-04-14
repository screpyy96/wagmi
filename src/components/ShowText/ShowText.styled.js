import styled from 'styled-components';

const MainWrapepr = styled.div`
width: 89%;
margin: 0 auto;
`;

// Stilizare pentru containerul principal
const Container = styled.div`
display: grid; /* Permite butoanelor să treacă pe rândul următor */
grid-template-columns: 1fr 1fr;
height: 100%;
width: 100%;
grid-gap: 1rem;
@media (max-width: 768px) {

  }

`;

const ButtonContainer = styled.div`
display: flex;
color: white;
flex-direction: row;
width: 100%; /* Ajustează lățimea după necesități */
text-align: center;
align-items: start;
justify-content: center;
border-radius: 5px;
box-shadow: 0 0 100px rgba(0, 0, 0, 0.5);
background-color: rgba(255, 255, 255, 0.2); /* Setăm culoarea de fundal la alb semi-transparent */
backdrop-filter: blur(5px); /* Adăugăm un efect de blur */
@media (max-width: 768px) {
// height: 51px;
font-size: 20px;
  }
`;

const HoverText = styled.div`
  width: 100%; /* Ajustează lățimea după necesități */
  color: white;
  margin-left: 220px;
  align-items: end;
  border-radius: 5px;
box-shadow: 0 0 100px rgba(0, 0, 0, 0.5);
background-color: rgba(255, 255, 255, 0.2); /* Setăm culoarea de fundal la alb semi-transparent */
backdrop-filter: blur(5px); /* Adăugăm un efect de blur */
text-align: left;
display: flex;
justify-content: space-around;
flex-direction: column;
margin-left: 20px;

& p {
  padding: 10px;
  height: 80%;
  text-align: left;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    
    width: 95%;
    margin: 0 auto;
    height: 200px;
  }
}

h3 {
  text-align: left;
  width: 100%;
  padding: 20px;

}
@media (max-width: 768px) {
    
  width: 95%;
  margin: 0 auto;
  margin-top: 20px;
  grid-column: 1 / -1;
  height: 350px;
}
  `;
// Stilizare pentru buton
const Button = styled.button`
padding: 10px;
margin: 10px;
font-size: 16px;
color: white;
background-color: #53B1A6;
border: none;
cursor: pointer;
border-radius: 5px;/* Adaugă un spațiu între text și buton */
margin-left: auto;
display: flex;
width: 20%;
text-align: center;
align-items: end;
justify-content: center;
@media (max-width: 768px) {
    
  width: 35%;
}
`;


const Wrapper = styled.div`
display: grid;
  width: 80%;
  margin: 0 auto;
  grid-template-columns: 30% 70%;
  gap: 2rem;
@media (max-width: 768px) {
    display: block;
    width: 90%;
    margin: 0 auto;
  }
`

const ResponsiveImage = styled.img`
  width: 170px; /* Setăm lățimea implicită pentru dispozitivele mobile */
  height: 40px; /* Setăm înălțimea implicită pentru dispozitivele mobile */
  display: flex; /* Setăm containerul să folosească Flexbox */
  justify-content: center; /* Centrează imaginea pe axa orizontală */
  align-items: center; /* Centrează imaginea pe axa verticală */
  margin: 20px 0;
  padding: 5px;
  @media (max-width: 768px) {
    width: 139px; /* Setăm lățimea implicită pentru dispozitivele mobile */
  // height: 40px; /* Setăm înălțimea implicită pentru dispozitivele mobile */

  }
`;


export {
    HoverText,
    Container,
    ButtonContainer,
    Button,
    Wrapper,
    ResponsiveImage,
    MainWrapepr
}