import "./Footer.css";

const footerSections = [
  {
    sectionName: "Products",
    sectionItems: ["Modern Care", "Modern Reasearch", "Training", "Partners"],
  },
  {
    sectionName: "Something",
    sectionItems: ["Modern Care", "Modern Reasearch", "Training", "Partners"],
  },
  {
    sectionName: "Else",
    sectionItems: ["Modern Care", "Modern Reasearch", "Training", "Partners"],
  },
];

const FooterSection = ({ sectionName, sectionItems }) => {
  return (
    <div className="footer-section">
      <p className="footer-heading"> {sectionName}</p>
      {sectionItems.map((sectionItem) => (
        <p key={sectionName + "#" + sectionItem}>
          <span className="footer-item">{sectionItem}</span>
        </p>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-sections">
          <div className="footer-logo">
            <img src="sprinklr-full-logo.svg" />
          </div>
          {footerSections.map((section) => (
            <FooterSection key={section.sectionName} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
