import React from "react";
import "./Footer.css";
import Logo from "../../assets/ChuksKitchen.png";
import ArrowUp from "../../assets/Onboarding/UpArrow.png";

const Footer = () => {
  return (
    < >
     
      <footer className="footer">
        <div className="footer-top">
          {/* Section 1 */}
          <div className="footer-section brand-section">
            <img src={Logo} alt="Chuks Kitchen" className="footer-logo" />
            <p>
              Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
            </p>
          </div>

          {/* Section 2 */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>Explore</li>
              <li>My Order</li>
              <li>Account</li>
              <li>Contact</li>  
            </ul>
          </div>

          {/* Section 3 */}
          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul>
              <li>+234 800 000 0000</li>
              <li>hello@chukskitchen.com</li>
              <li>123 taste blvd, Lagos, Nigeria</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>© 2020 Lift Media. All rights reserved.</p>
          <img src={ArrowUp} alt="Back to top" className="arrow-up" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
