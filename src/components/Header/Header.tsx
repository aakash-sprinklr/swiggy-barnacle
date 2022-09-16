import "./Header.css";
import { NAVBAR_ITEMS } from "../../constants/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface INavbarItem {
  icon: IconDefinition;
  label: string;
}

const Header = () => {
  return (
    <div data-testid="header" className="navbar-wrapper">
      <div className="navbar-container container">
        <div className="navbar-left">
          <div className="navbar-logo">
            <img
              src="logo.svg"
              className="logo"
              width="32px"
              alt="Sprinklr logo"
            />
          </div>
          <span className="navbar-location">Gurugram, India</span>
        </div>
        <div className="navbar-right">
          <div data-testid="nabvar-items" className="navbar-items">
            {NAVBAR_ITEMS.map(({ icon, label }) => (
              <NavbarItem key={label} icon={icon} label={label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const NavbarItem = ({ icon, label }: INavbarItem) => {
  return (
    <div className="navbar-item">
      <a href="##" className="navbar-link">
        <FontAwesomeIcon icon={icon} />
        <p>{label}</p>
      </a>
    </div>
  );
};

export default Header;
