// Stilurile pentru componenta de antet (header)
import styled, {css, keyframes } from "styled-components";


// const waveAnimation = keyframes`
//   0% {
//     transform: translateX(-100%);
//     opacity: 0.8;
//     background-color: rgba(255, 255, 255, 0.5);
//   }
//   50% {
//     transform: translateX(100%);
//     opacity: 0.3;
//     background-color: rgba(255, 255, 255, 0.2);
//   }
//   100% {
//     transform: translateX(-100%);
//     opacity: 0.8;
//     background-color: linear-gradient(225deg, #ff6b6b, #3b5998);
//   }
// `;

// const WaveBackground = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: linear-gradient(125deg, #ff6b6b, #3b5998); /* Culoarea wave */
//   // animation: ${waveAnimation} 7s linear infinite; /* Animția wave */
//   z-index: 1; /* Asigură poziționarea sub meniul de navigare */
// `;

const Header = styled.header`
  color: #fff;
  width: 100%;
  transition: ease-in 400ms;
`;

// Stilurile pentru meniul de navigare
const Nav = styled.nav`
background: linear-gradient(90deg, #ff5733 33%, #33aaff 66%, #244e0ade 120%);

max-width: 100%;

height: 100px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;

`;


// Stilurile pentru logo
const Logo = styled.img`
  height: 120px;
  width: 120px;
  text-transform: uppercase;
  cursor: pointer;
  @media (max-width: 768px) {
      margin-left: -10px;
      height: 100px;
      width: 100px;
  }
`;

// Stilurile pentru meniul principal
const Menu = styled.ul`
  display: block;
  list-style-type: none;
  color: white;

  @media (max-width: 768px) {
    display: block;

  }
`;

// Stilurile pentru elementele de meniu
const MenuItem = styled.div`
  padding:1rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  font-size: 20px;
  color: white;


  @media (max-width: 768px) {
    display: none;
  }
`;

// Stilurile pentru iconița de meniu mobil
const MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// Stilurile pentru fundalul meniului mobil
const MobileMenuBackground = styled.div`
  display: none;
  position: absolute;
  top: 100px;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #ff5733 33%, #33aaff 66%, #244e0ade 120%);
  color: #fff;
  transition: ease-in 300ms;

  ${props =>
    props.isopen &&
    `
    display: flex;
  `}
`;

// Stilurile pentru elementele de meniu mobil
const MobileMenuItem = styled.li`
  padding: 1rem;
  cursor: pointer;
  display: ${props => (props.isopen ? 'none' : 'block')}; // Modificare aici
  text-align: center;
  position: relative;
  
  top: 0px;
  &:hover {
    color: #fff;
  }
`;

// Stilurile pentru butonul "Get a Quote"
const Button = styled.button`
  background-color: #ceff00;
  color: #2c3e50;
  border: none;
  border-radius: 999px;
  padding: 0.5rem 2rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #2c3e50;
    color: #ceff00;
  }
`;

const mobileMediaQuery = css`
  @media (max-width: 768px) {
    display: none; // Ascundem elementul pe ecranele de tip mobile
  }
`;

// Componenta pentru butonul de disconnect sau connect
const WalletButton = styled.div`
  ${props => props.mobileHidden && mobileMediaQuery} // Aplicăm Media Query-ul dacă prop-ul mobileHidden este setat

  // Stiluri pentru buton
  background-color: #ceff00;
  color: #2c3e50;
  border: none;
  border-radius: 999px;
  padding: 0.5rem 2rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #2c3e50;
    color: #ceff00;
  }
`;


export { Header, Nav, Logo, Menu, MenuItem, MobileMenuIcon, MobileMenuBackground, MobileMenuItem, Button, mobileMediaQuery,WalletButton }