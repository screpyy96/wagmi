"use client";

import { useState } from "react";
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
import Connect from '@/components/Connect';

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const handleSmallerScreensNavigation = () => {
    setMenuIcon(!menuIcon);
  };

  return (
    <Header>
      <div>
        <Nav>

          <Menu>
            <MenuItem>
              <StyledLink href="/" passHref>
                Home
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink href="https://iosifs-organization.gitbook.io/explora/" target="blank" passHref>
                Whitepaper
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink href="/pages/stacking" passHref>
                Staking
              </StyledLink>
            </MenuItem>
          </Menu>
          <div>
            <StyledLink href="/" passHref>
              <Logo src="../../../white.svg" alt="logo"/>
            </StyledLink>
          </div>
          <Menu>
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
              <Connect/>
            </MenuItem>
          </Menu>
      

          
          <MobileMenuIcon onClick={handleSmallerScreensNavigation}>
          <MenuItem>
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

          <MobileMenuBackground isopen={menuIcon}>
            
            <Menu>
              <MobileMenuItem onClick={handleSmallerScreensNavigation}>
                <StyledLink href="/" passHref>
                  Home
                </StyledLink>
              </MobileMenuItem>
              <MobileMenuItem onClick={handleSmallerScreensNavigation}>
                <StyledLink href="/pages/stacking" passHref>
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
                <Connect/>
              </MobileMenuItem>

             
            </Menu>
          </MobileMenuBackground>
        </Nav>
      </div>
    </Header>
  );
};

export default Navbar;