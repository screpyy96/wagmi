"use client";

import { useState } from "react";
import Link from "next/link";
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
//   WaveBackground
} from "./Navbar.styled";
import Connect from '@/components/Connect';

const logoImg = "https://media.discordapp.net/attachments/908446871037571075/1224453811620413530/explora.png?ex=661d8c79&is=660b1779&hm=6ff38bcf8f67a1b795a7511f4d90a06890b928526fc15b3e43c0f87c77fd0ad9&=&format=webp&quality=lossless&width=936&height=936"
const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const handleSmallerScreensNavigation = () => {
    setMenuIcon(!menuIcon);
  };

  return (
    <Header>
      <div>
      {/* <WaveBackground /> */}
        <Nav>
          <div>
            <Link href="/" passHref>
              <Logo src={logoImg} alt="logo"/>
            </Link>
          </div>

          <Menu>
            <MenuItem>
              <Link href="/" passHref>
                Home
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/pages/stacking" passHref>
                Staking
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/pages/how-to-buy" passHref>
                How To Buy
              </Link>
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
                  <AiOutlineMenu size={25} />
                </div>
            )}
          </MobileMenuIcon>

          <MobileMenuBackground isopen={menuIcon}>
            
            <Menu>
              <MobileMenuItem onClick={handleSmallerScreensNavigation}>
                <Link href="/" passHref>
                  Home
                </Link>
              </MobileMenuItem>
              <MobileMenuItem onClick={handleSmallerScreensNavigation}>
                <Link href="/pages/stacking" passHref>
                  Stacking
                </Link>
              </MobileMenuItem>
              <MobileMenuItem onClick={handleSmallerScreensNavigation}>
                <Link href="/pages/how-to-buy" passHref>
                  How To Buy
                </Link>
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