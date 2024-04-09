import styled from 'styled-components';



// Stilizare pentru containerul principal
const Container = styled.div`
display: flex;
  flex-wrap: wrap; /* Permite butoanelor să treacă pe rândul următor */
  justify-content: center;


`;

const ButtonContainer = styled.div`
display: grid;
color: white;
flex-direction: row;
width: 40%; /* Ajustează lățimea după necesități */
// width: calc(33.50% - 10px);
text-align: center;
align-items: start;
justify-content: center;
margin: 10px;
border-radius: 5px;
box-shadow: 0 0 100px rgba(0, 0, 0, 0.5);
background-color: rgba(255, 255, 255, 0.2); /* Setăm culoarea de fundal la alb semi-transparent */
backdrop-filter: blur(5px); /* Adăugăm un efect de blur */
padding: 10px;
`;

const HoverText = styled.div`
  width: 100%; /* Ajustează lățimea după necesități */
  margin-left: auto; /* Acest lucru va împinge HoverText în dreapta */
  color: white;
  align-items: end;
  border-radius: 5px;
box-shadow: 0 0 100px rgba(0, 0, 0, 0.5);
background-color: rgba(255, 255, 255, 0.2); /* Setăm culoarea de fundal la alb semi-transparent */
backdrop-filter: blur(5px); /* Adăugăm un efect de blur */
padding: 10px;
text-align: left;
height: 310px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;

& p {
  height: 60%;
  // padding: 20px;
  text-align: left;

}
@media (max-width: 768px) {
    
    width: 80vw;
    margin: 0 auto;
    display: block;

  }
  `;
// Stilizare pentru buton
const Button = styled.button`
padding: 10px;
color: white;
background-color: #53B1A6;
border: none;
cursor: pointer;
border-radius: 5px;/* Adaugă un spațiu între text și buton */
// margin-left: auto;
display: flex;
width: 15%;
text-align: center;
align-items: end;
justify-content: center;
`;


const Wrapper = styled.div`
display: inline-flex;
width: 96vw;
  margin-top: 100px;

  
@media (max-width: 768px) {
    display: block;
    width: 100vw;
  }
`

const ResponsiveImage = styled.img`
  width: 30px; /* Setăm lățimea implicită pentru dispozitivele mobile */
  height: 22px; /* Setăm înălțimea implicită pentru dispozitivele mobile */
  display: flex; /* Setăm containerul să folosească Flexbox */
  justify-content: center; /* Centrează imaginea pe axa orizontală */
  align-items: center; /* Centrează imaginea pe axa verticală */

  @media (min-width: 768px) {
    width: auto; /* Setăm lățimea pe auto pentru dispozitivele desktop */
    height: auto; /* Setăm înălțimea pe auto pentru dispozitivele desktop */
  }
`;


export {
    HoverText,
    Container,
    ButtonContainer,
    Button,
    Wrapper,
    ResponsiveImage
}