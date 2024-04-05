// Stilurile pentru componenta de antet (header)
import styled, {css } from "styled-components";

import Link from 'next/link';

const StyledLink = styled(Link)`
  text-decoration: none; /* Remove default underline */
  color: #fff; /* Example color */
  font-weight: 400; /* Example font weight */
  font-size: 21px;
`;


const Header = styled.header`
  // color: #fff;
  margin: 0 auto;
  width: 89%;
`;

// Stilurile pentru meniul de navigare
const Nav = styled.nav`
max-width: 100%;

height: 150px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;

`;



// Stilurile pentru logo
const Logo = styled.img`
  height: 100px;
  width: 100px;
  text-transform: uppercase;
  cursor: pointer;
  // margin-top: 30px;
  
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
  display: block;

  @media (max-width: 768px) {
    display: block;

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

// Stilurile pentru fundalul meniului mobil
const MobileMenuBackground = styled.div`
  display: none;
  position: absolute;
  // top: 100px;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: black;
  transition: ease-in 300ms;
  background-color: rgba(0, 0, 0, 0.5); /* Adăugăm un background semi-transparent */

  /* Adăugăm un efect de blur folosind backdrop-filter */
  backdrop-filter: blur(10px); /* Poți ajusta valoarea pentru a obține gradul de blur dorit */

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


export {StyledLink, Header, Nav, Logo, Menu, MenuItem, MobileMenuIcon, MobileMenuBackground, MobileMenuItem, Button, mobileMediaQuery,WalletButton }