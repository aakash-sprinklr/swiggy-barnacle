import "./Header.css";
import { NAVBAR_ITEMS } from "../../constants/header";
import {
  Navbar,
  NavbarGroup,
  NavbarItem,
  NavbarItems,
  NavbarLogo,
} from "../Navbar/Navbar";
import { ReactElement } from "react";

const Header = (): ReactElement => (
  <div data-testid="header" className="navbar-wrapper">
    <Navbar>
      <NavbarGroup className="navbar-left">
        <NavbarLogo src="logo.svg" />
        <span className="navbar-location">Gurugram, India</span>
      </NavbarGroup>
      <NavbarGroup className="navbar-right">
        <NavbarItems>
          {NAVBAR_ITEMS.map(({ icon, label }) => (
            <NavbarItem key={label} icon={icon} label={label} />
          ))}
        </NavbarItems>
      </NavbarGroup>
    </Navbar>
  </div>
);

export default Header;
