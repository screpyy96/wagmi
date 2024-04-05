import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  margin-top: 50px; /* Reducerea margin-top-ului pentru a îmbunătăți vizibilitatea pe dispozitivele mobile */
  overflow: hidden;
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Schimbarea la o singură coloană pe dispozitivele mobile */
    margin-top: 20px; /* Reducerea margin-top-ului și ajustarea la distanța dorită pe dispozitivele mobile */
  }
`;

const Modal = styled.div`
  color: white;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0); /* Background semi-transparent */
  backdrop-filter: blur(5px); /* Adăugăm un efect de blur */

  /* Stiluri pentru titlul modalului */
  .title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 100%; /* Ajustarea la lățimea maximă a ecranului pe dispozitivele mobile */
    padding: 10px; /* Reducerea padding-ului pentru a îmbunătăți aspectul pe dispozitivele mobile */
  }
`;

const Button = styled.button`
  width: 100%; /* Lățimea completă a butonului pe dispozitivele mobile */
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #52B2A7; // green
  color: #fff;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    width: 100%; /* Ajustarea lățimii butonului pentru a ocupa întreaga lățime a ecranului */
  }
`;

const Input = styled.input`
  width: 100%; /* Lățimea completă a inputului pe dispozitivele mobile */
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  color: #333;
  background-color: rgba(255, 255, 255, 0.8); /* Background semi-transparent */
  box-sizing: border-box; /* Asigurați-vă că padding-ul și border-ul nu adaugă la lățimea totală */

  @media (max-width: 768px) {
    width: 100%; /* Ajustarea lățimii inputului pentru a ocupa întreaga lățime a ecranului */
  }
`;

const SpanModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;

  & button {
    width: 100%; /* Lățimea completă a butonului pe dispozitivele mobile */
    background: none;
    border: 2px solid grey;
    padding: 20px;
    font-size: 18px;
    color: white;
    margin: 10px;
    cursor: pointer;
    &:hover {
      background: white;
      color: black;
    }
  }
`;

const StyledText = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: #fff;
  text-align: center;
  max-width: 600px;
  margin-bottom: 20px;
  & span {
    font-size: 30px;
  }
  /* Stiluri pentru cuvinte cheie */
  .highlight {
    color: #ff6600;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    max-width: 90%; /* Ajustarea lățimii maxime a textului pe dispozitivele mobile */
    margin: 0 auto; /* Centrarea textului pe ecranele mai mici */
    margin-bottom: 100px;
  }
`;

const ConnectModal = styled.select`
  display: flex;
  width: 100%;
`;

const SelectCurrency = styled.select`
  width: 100%; /* Lățimea completă a selectului pe dispozitivele mobile */
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  width: 100%;
  padding: 20px;
  font-size: 18px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  color: #fff;
`;



export {ConnectModal, SelectCurrency, Price,Container, Modal, Button, Input, InfoContainer, SpanModal, StyledText };
