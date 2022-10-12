import {
  CButton,
  CCollapse,
  CDropdown,
  CForm,
  CImg,
  CInput,
  CNavbar,
  CNavbarNav,
  CNavLink,
  CToggler,
} from "@coreui/react";
import Logo from "../../assets/images/Pmk.png";

import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header style={{ marginBottom: "90px" }}>
      <ToastContainer />
      <CNavbar expandable="sm" color="info" className="fixed-top">
        <CToggler inNavbar onClick={() => setIsOpen(!isOpen)} />
        {/* <CNavbarBrand>
          UKM PMK ITB STIKOM BALI</CNavbarBrand> */}
        <CImg className="c-sidebar-brand-full" src={Logo} height={60} />
        <CCollapse show={isOpen} navbar>
          <CNavbarNav>
            <CNavLink to="/">Home</CNavLink>
            <CNavLink to="/galeri">Galeri</CNavLink>
            <CNavLink to="artikel">Artikel</CNavLink>
          </CNavbarNav>
          <CNavbarNav className="ml-auto">
            <CForm inline>
              <CInput className="mr-sm-2" placeholder="Search" size="sm" />
              <CButton color="light" className="my-2 my-sm-0" type="submit">
                Search
              </CButton>
            </CForm>
            <CDropdown inNav></CDropdown>
            <CDropdown inNav></CDropdown>
          </CNavbarNav>
        </CCollapse>
      </CNavbar>
    </header>
  );
}
