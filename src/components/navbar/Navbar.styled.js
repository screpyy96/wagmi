// Stilurile pentru componenta de antet (header)
import styled, {css, keyframes } from "styled-components";

import Link from 'next/link';

const StyledLink = styled(Link)`
  text-decoration: none; /* Remove default underline */
  color: #fff; /* Example color */
  font-weight: 400; /* Example font weight */
  font-size: 21px;
`;


const Header = styled.header`
position: fixed;
top: 20px;
width: 100%;
margin: 0 auto;
z-index: 1; 
  @media (max-width: 768px) {
    position: fixed;
    // top: 10px;
    left: 0;
    width: 100%;
    margin: 0 auto;
  }
  
`;

// Stilurile pentru meniul de navigare
// Stilurile pentru meniul de navigare
const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border-radius: 1rem;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.2); 
  backdrop-filter: blur(5px); 
  width: 85%;
  margin: 0 auto;
  @media (max-width: 768px) {
    border-radius: 0;
    width: 100%;
  }
`;


const colorChange = keyframes`
  0% {
    filter: hue-rotate(0deg); /* Se roteste la 0 grade */
  }
  100% {
    filter: hue-rotate(360deg); /* Se roteste la 360 de grade */
  }
`;

// Stilurile pentru logo
const Logo = styled.img`
  height: 100px;
  width: 100px;
  text-transform: uppercase;
  cursor: pointer;
  // animation: ${colorChange} 5s linear infinite; /* Aplicăm animația de schimbare a culorii */
padding: 20px;
  @media (max-width: 768px) {
    height: 80px;
    width: 80px;
    position: absolute;
    top: 3%;
    left: 5%;
  }
`;

// Stilurile pentru meniul principal
const Menu = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: end;
  @media (max-width: 768px) {
    display: block;
    transform: translate(0, -50px);
  }
`;

// Stilurile pentru elementele de meniu
const MenuItem = styled.div`
  padding:1rem;
  cursor: pointer;
  display: inline-flex;
  font-size: 20px;
  color: white;


  @media (max-width: 768px) {
    display: none;
  }
`;

// Stilurile pentru iconița de meniu mobil
const MobileMenuIcon = styled.div`
  display: none;
  color: #fff;
  z-index: 99;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;


const MobileMenuBackground = styled.div`
  display: none;
  position: absolute;
  top: 80px;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  height: 100vh;
  color: black;

  && {
    ${props => props.isopen && `
      z-index: 999;
      display: flex;
      background-image: url("https://www.explorascoin.com/_next/static/media/background.ee28fc1e.jpeg");
      background-size: cover; /* Imaginea acoperă întreaga suprafață */
      background-position: center; /* Imaginea este poziționată în centrul containerului */
      background-repeat: no-repeat; /* Imaginea nu este repetată */
      
      `}
  }
`;

export default MobileMenuBackground;


// Stilurile pentru elementele de meniu mobil
const MobileMenuItem = styled.li`
  padding: 1rem; //e okay
  cursor: pointer;
  display: ${props => (props.isopen ? 'none' : 'block')}; // Modificare aici
  text-align: center;
  position: relative;
  width: auto;
  margin: 0 auto;
  
  top: 0px;
  &:hover {
    color: #fff;
  }
`;

// Stilurile pentru butonul "Get a Quote"
const Button = styled.button`
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



// Componenta pentru butonul de disconnect sau connect
const WalletButton = styled.div`
  ${props => props.mobileHidden && mobileMediaQuery} // Aplicăm Media Query-ul dacă prop-ul mobileHidden este setat

  // Stiluri pentru buton
  // background-color: #ceff00;
  color: #2c3e50;
  border: none;
  border-radius: 999px;
  padding: 0.5rem 2rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: #ceff00;
  }
`;


export {StyledLink, Header, Nav, Logo, Menu, MenuItem, MobileMenuIcon, MobileMenuBackground, MobileMenuItem, Button,WalletButton }