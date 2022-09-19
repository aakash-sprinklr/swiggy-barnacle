import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";
import {
  INavbar,
  INavGroup,
  INavbarItem,
  INavbarItems,
  INavbarLogo,
} from "./types";

export const Navbar = ({ children }: INavbar): ReactElement => (
  <div className="navbar-container container">{children}</div>
);

export const NavbarGroup = ({
  className,
  children,
}: INavGroup): ReactElement => <div className={className}>{children}</div>;

export const NavbarItem = ({ icon, label }: INavbarItem): ReactElement => (
  <div className="navbar-item">
    <a href="##" className="navbar-link">
      <FontAwesomeIcon icon={icon} />
      <p>{label}</p>
    </a>
  </div>
);

export const NavbarItems = ({ children }: INavbarItems): ReactElement => (
  <div data-testid="nabvar-items" className="navbar-items">
    {children}
  </div>
);

export const NavbarLogo = ({ src, href }: INavbarLogo): ReactElement => (
  <div className="navbar-logo">
    <a href={href}>
      <img src={src} className="logo" width="32px" alt="logo" />
    </a>
  </div>
);
