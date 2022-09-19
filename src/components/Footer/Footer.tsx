import "./Footer.css";
import { FOOTER_SECTIONS } from "../../constants/footer";

interface IFooterSectionProps {
  sectionName: string;
  sectionItems: Array<any>;
}

const FooterSection = ({ sectionName, sectionItems }: IFooterSectionProps) => (
  <div className="footer-section">
    <p className="footer-heading"> {sectionName}</p>
    {sectionItems.map((sectionItem) => (
      <p key={sectionName + "#" + sectionItem}>
        <span className="footer-item">{sectionItem}</span>
      </p>
    ))}
  </div>
);

const Footer = () => (
  <div data-testid="footer" className="footer">
    <div className="container">
      <div className="footer-sections">
        <div className="footer-logo">
          <img src="sprinklr-full-logo.svg" alt="Sprinklr logo" />
        </div>
        {FOOTER_SECTIONS.map((section) => (
          <FooterSection key={section.sectionName} {...section} />
        ))}
      </div>
    </div>
  </div>
);

export default Footer;
