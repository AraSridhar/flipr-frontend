import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItems, NavLinks } from './NavbarElements';
const Navbar = () => {
    return (
       <>
       <Nav>
          <NavbarContainer>
              <NavLogo to='/'>Mailficient</NavLogo>
              <MobileIcon>
                  <FaBars/>
              </MobileIcon>
              <NavMenu>
                  <NavItems>
                      <NavLinks to="about">About</NavLinks>
                  </NavItems>

              </NavMenu>
          </NavbarContainer>


       </Nav>
       </>
    );
};

export default Navbar;
