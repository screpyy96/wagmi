"use client";
import { StyleSheetManager } from 'styled-components';
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  Header,
  Nav,
  Logo,
  Menu,
  MenuItem,
  MobileMenuIcon,
  MobileMenuBackground,
  MobileMenuItem,
  StyledLink
} from "./Navbar.styled";
import Connect from '../Connect';

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const handleSmallerScreensNavigation = () => {
    setMenuIcon(!menuIcon);
  };


  return (
    <Header >
      
        <Nav  >
        <div>
            <StyledLink href="/" passHref>
              <Logo src="../../../white.svg" alt="logo"/>
            </StyledLink>
          </div>
          <Menu>
            <MenuItem>
              <StyledLink href="/" passHref>
                Home
              </StyledLink>
            </MenuItem>
            
            <MenuItem>
              <StyledLink href="/pages/stacking" passHref>
                Staking
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink href="/pages/roadmap" passHref>
                Roadmap
              </StyledLink>
            </MenuItem>

            <MenuItem>
              <StyledLink href="/pages/how-to-buy" passHref>
                How To Buy
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink href="https://explorascoin.gitbook.io/whitepaper/" target="blank" passHref>
                Whitepaper
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <Connect/>
            </MenuItem>
          </Menu>
      

          
          <MobileMenuIcon onClick={handleSmallerScreensNavigation}>
          <MenuItem >
                      <Connect/>
                      </MenuItem>
            {menuIcon ? (
                  <AiOutlineClose size={25} />
            ) : (
                <div>
                  <AiOutlineMenu size={25}  />
                </div>
            )}
          </MobileMenuIcon>
          <StyleSheetManager shouldForwardProp={prop => prop !== 'isopen'}>
          <MobileMenuBackground isopen={+menuIcon}>
            
            
            <Menu>
              <MobileMenuItem onClick={handleSmallerScreensNavigation}>
                <StyledLink href="/" passHref>
                  Home
                </StyledLink>
              </MobileMenuItem>
              <MobileMenuItem onClick={handleSmallerScreensNavigation}>
                <StyledLink href="https://explorascoin.gitbook.io/whitepaper/" passHref>
                  Whitepaper
                </StyledLink>
              </MobileMenuItem>
              <MobileMenuItem onClick={handleSmallerScreensNavigation}>
                <StyledLink href="/pages/how-to-buy" passHref>
                  Staking
                </StyledLink>
              </MobileMenuItem>
              <MobileMenuItem onClick={handleSmallerScreensNavigation}>
                <StyledLink href="/pages/how-to-buy" passHref>
                  Roadmap
                </StyledLink>
              </MobileMenuItem>
              <MobileMenuItem onClick={handleSmallerScreensNavigation}>
                <StyledLink href="/pages/how-to-buy" passHref>
                  How To Buy
                </StyledLink>
              </MobileMenuItem>
              <MobileMenuItem onClick={handleSmallerScreensNavigation}>
              <div style={{margin: "0 auto", width: "35%"}}>
                <Connect/>
                </div> 
              </MobileMenuItem>

             
            </Menu>
          </MobileMenuBackground>
          </StyleSheetManager>
        </Nav>
    </Header>
  );
};

export default Navbar;