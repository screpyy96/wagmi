import styled from 'styled-components';

// Stilizare pentru buton
const Button = styled.button`
  padding: 10px;
  width: 30%;
  color: white;
text-aling: center;
  background-color: none;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: #53B1A6; /* Setăm culoarea de fundal la alb semi-transparent */
    float: right;
`;

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
  display: block;
  // flex-direction: column;
  align-items: end;
  // justify-content: center;
  border-radius: 5px;
box-shadow: 0 0 100px rgba(0, 0, 0, 0.5);
background-color: rgba(255, 255, 255, 0.2); /* Setăm culoarea de fundal la alb semi-transparent */
backdrop-filter: blur(5px); /* Adăugăm un efect de blur */
padding: 10px;
text-align: left;

& p {
  height: 60%;
  padding: 20px;
  text-align: left;

}
@media (max-width: 768px) {
    
    width: 80vw;
    margin: 0 auto;
    display: block;

  }
  `;


const Wrapper = styled.div`
display: inline-flex;
width: 96vw;

  
@media (max-width: 768px) {
    display: block;
    width: 100vw;
  }
`
export {
    HoverText,
    Container,
    ButtonContainer,
    Button,
    Wrapper
}