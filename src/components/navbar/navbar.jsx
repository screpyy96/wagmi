
import { StyleSheetManager } from 'styled-components';
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  Header,
  Nav,
  Menu,
  MenuItem,
  MobileMenuIcon,
  MobileMenuBackground,
  MobileMenuItem,
  StyledLink
} from "./Navbar.styled";
import Connect from '../Connect';
import Image from 'next/image';

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const handleSmallerScreensNavigation = () => {
    setMenuIcon(!menuIcon);
  };


  return (
    <StyleSheetManager shouldForwardProp={prop => prop !== 'isopen'}>

   
    <Header >
      
        <Nav  >
            <StyledLink href="/" passHref>
            <Image src="/test.png" alt="logo" width={70} height={70} />
            </StyledLink>
          <Menu>
            <MenuItem>
              <StyledLink href="/" passHref>
                Home
              </StyledLink>
            </MenuItem>
            
            <MenuItem>
              <StyledLink href="/stacking" passHref>
                Staking
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink href="/roadmap" passHref>
                Roadmap
              </StyledLink>
            </MenuItem>

            <MenuItem>
            <StyledLink href="/how-to-buy" passHref>
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
         
            {menuIcon ? (
                  <AiOutlineClose size={25} />
            ) : (
                <div>
                  <AiOutlineMenu size={25}  />
                </div>
            )}
          </MobileMenuIcon>
          
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
                <StyledLink href="/how-to-buy" passHref>
                  Staking
                </StyledLink>
              </MobileMenuItem>
              <MobileMenuItem onClick={handleSmallerScreensNavigation}>
                <StyledLink href="/how-to-buy" passHref>
                  Roadmap
                </StyledLink>
              </MobileMenuItem>
              <MobileMenuItem onClick={handleSmallerScreensNavigation}>
                <StyledLink href="/how-to-buy" passHref>
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
          
        </Nav>
    </Header>
     </StyleSheetManager>
  );
};

export default Navbar;