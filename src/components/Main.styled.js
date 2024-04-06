import styled from 'styled-components';
import ethIcon from '../../public/coin.svg';
import usdtIcon from '../../public/coin.svg';
import usdcIcon from '../../public/coin.svg';

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
  border: none;
  border-radius: 5px;
  background-color: #52B2A7; // green
  color: #fff;
  cursor: pointer;
  margin-bottom: 10px;
  height: 50px;
  width: 80%;


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

  //   background-color: rgba(255, 255, 255, 0.8); /* Background semi-transparent */
   background-color: #F16122; /* Background semi-transparent */
  box-sizing: border-box; /* Asigurați-vă că padding-ul și border-ul nu adaugă la lățimea totală */
  &::placeholder {
    color: #fff; /* Culoarea dorită pentru placeholder */
  }
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
    border: 2px solid grey;
    padding: 20px;
    font-size: 18px;
    color: white;
    margin: 10px;
    cursor: pointer;
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
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  appearance: none; /* Ascunde săgeata implicită a dropdown-ului */
  background-repeat: no-repeat;
  background-position: right 10px center; /* Poziționează imaginea de fundal */
`;

const Option = styled.option`
  /* Adaugă imagini de fundal diferite pentru fiecare opțiune */
  &.eth {
    background-image: url(${ethIcon});
    height: 20px;
  }
  &.usdt {
    background-image: url(${usdtIcon});
  }
  &.usdc {
    background-image: url(${usdcIcon});
  }
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

// Styled button pentru "Buy with crypto"
const BuyButton = styled.button`
  cursor: pointer;
  background-color: #52B2A7;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 7px;
  padding: 10px;
  margin-right: 10px; /* Adăugați spațiul între butoane */
`;

// Styled button pentru "Get free tokens"
const GetTokensButton = styled.button`
  cursor: pointer;
  background-color: transparent; /* Background transparent */
  color: #007bff; /* Culoarea textului */
  border: 1px solid #007bff; /* Border cu culoarea textului */
  border-radius: 7px;
  padding: 10px;
  &:hover {
    background: white;
    color: black;
  }
  
`;

// Container pentru butoane
const ButtonContainer = styled.div`
  display: flex;
`;

const SVG = styled.img`
  width: 200px; /* Ajustați dimensiunea SVG-ului conform nevoilor dvs. */
  height: 200px; /* Ajustați dimensiunea SVG-ului conform nevoilor dvs. */
`;

export {Option,SVG,BuyButton, GetTokensButton, ButtonContainer,ConnectModal, SelectCurrency, Price,Container, Modal, Button, Input, InfoContainer, SpanModal, StyledText };
