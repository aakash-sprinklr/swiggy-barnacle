import "./Header.css";
import {
  faMagnifyingGlass,
  faPercent,
  faCircleQuestion,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navbarItems = [
  {
    label: "Search",
    icon: faMagnifyingGlass,
  },
  {
    label: "Offers",
    icon: faPercent,
  },
  {
    label: "Help",
    icon: faCircleQuestion,
  },
  {
    label: "Cart",
    icon: faCartShopping,
  },
];

const Header = () => {
  return (
    <div data-testid="header" className="navbar-wrapper">
      <div className="navbar-container container">
        <div className="navbar-left">
          <div className="navbar-logo">
            <img
              type="image/svg+xml"
              src="logo.svg"
              className="logo"
              width="32px"
            />
          </div>
          <span className="navbar-location">Gurugram, India</span>
        </div>
        <div className="navbar-right">
          <div data-testid="nabvar-items" className="navbar-items">
            {navbarItems.map(({ icon, label }) => (
              <NavbarItem key={label} icon={icon} label={label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const NavbarItem = ({ icon, label }) => {
  return (
    <div className="navbar-item">
      <a href="#" className="navbar-link">
        <FontAwesomeIcon icon={icon} />
        <p>{label}</p>
      </a>
    </div>
  );
};

export default Header;
