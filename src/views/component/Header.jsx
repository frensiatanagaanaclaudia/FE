import {
  CButton,
  CCollapse,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CImg,
  CInput,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavLink,
  CToggler,
} from "@coreui/react";
import Logo from '../../assets/images/Pmk.png'

import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{marginBottom:"20px"}} >
      <CNavbar expandable="sm" color="info">
        <CToggler inNavbar onClick={() => setIsOpen(!isOpen)} />
        {/* <CNavbarBrand>
          UKM PMK ITB STIKOM BALI</CNavbarBrand> */}
           <CImg
          className="c-sidebar-brand-full"
          src={Logo}
         
          height={60}
        
        />
        <CCollapse show={isOpen} navbar>
          <CNavbarNav>
            <CNavLink to='/'>Home</CNavLink>
            <CNavLink to='/galeri'>Galeri</CNavLink>
            <CNavLink to='artikel'>Artikel</CNavLink>
          </CNavbarNav>
          {/* <CNavbarNav className="ml-auto">
            <CForm inline>
              <CInput className="mr-sm-2" placeholder="Search" size="sm" />
              <CButton color="light" className="my-2 my-sm-0" type="submit">
                Search
              </CButton>
            </CForm>
            <CDropdown inNav></CDropdown>
            <CDropdown inNav></CDropdown>
          </CNavbarNav> */}
        </CCollapse>
      </CNavbar>
    </div>
  );
}
