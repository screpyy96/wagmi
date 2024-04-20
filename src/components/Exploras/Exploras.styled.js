import styled, { keyframes } from 'styled-components';


// Styled component for the InfoText with animation
 const InfoText = styled.div`
  padding-top: 40px;
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  width: 60%;
  margin: 30px auto;
  @media (max-width: 768px) {
    width: 70%;
    text-align: left;
}

`;

// Styled-components for styling
const Wrapper = styled.div`
  text-align: center;
  margin-top: 50px;
  color: white;

  & p{
    padding: 20px;
    width: 50%;
    margin: 0 auto;
    @media (max-width: 768px) {
        width: 90%;
        text-align: left;
    }
  }
`;

const Title = styled.h1`
  color: white;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #52B2A7; // green
  color: #fff;
  cursor: pointer;
  height: 50px;
  padding: 0 10px;
  font-size: 17px;
margin: 0 20px;

@media (max-width: 768px) {
width: 100%;
margin: 0 auto;

padding: 0;
  }

`;

const Container = styled.div`
display: flex;
align-items: center;
justify-content:center;
@media (max-width: 768px) {
   display: grid;
   grid-template-columns: 30% 30%;
   gap: 10px;
  }

`;



export {
    Container, Wrapper, Title, Button,InfoText
}