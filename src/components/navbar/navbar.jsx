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
          <div>
            <Link href="/" passHref>
              <Logo src="../../../logoop.png" alt="logo"/>
            </Link>
          </div>

          <Menu>
            <MenuItem>
              <Link href="/" passHref>
                Home
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="https://iosifs-organization.gitbook.io/explora/" target="blank" passHref>
                Whitepaper
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/pages/stacking" passHref>
                Staking
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/pages/roadmap" passHref>
                Roadmap
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