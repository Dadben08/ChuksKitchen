import "./Onboarding.css";
import OnboardingImg from "../../assets/OnboardingImg.jpg";
import Logo from "../../assets/ChuksKitchen.png";
import ForkIcon from "../../assets/Onboarding/Fork.png";
import BusIcon from "../../assets/Bus.png";
import Footer from "../../Components/Footer/Footer";
import { NavLink } from "react-router-dom";

export default function Onboarding() {
  return (
    <>
    <div className="onboarding-container">

      {/* IMAGE SIDE */}
      <div className="image-side">
        <img src={OnboardingImg} alt="Side Visual" />
      </div>

      {/* RIGHT CONTENT SIDE */}
      <div className="content-side">

        {/* TOP SECTION */}
        <div className="top-section">
          <img src={Logo} alt="Chuks Kitchen" className="logo" />

         <NavLink to="/login" className="sign-in-btn">
  Sign In
</NavLink>
        </div>

        {/* MIDDLE SECTION */}
        <div className="middle-section">

          <div className="text-section">
            <h1>Your Authentic Taste of Nigeria</h1>

            <p>
              Experience homemade flavors delivered fresh to your desk or home.
              We bring the rich culinary heritage of Nigeria right to your doorstep.
            </p>
          </div>

          {/* ICON SECTION */}
          <div className="icon-section">

            <div className="icon-row">
              <div className="icon-item">
                <img src={ForkIcon} alt="" />
                <p>Freshly Prepared</p>
              </div>

              <div className="icon-item">
                <img src={ForkIcon} alt="" />
                <p>Support Local Business</p>
              </div>
            </div>

            <div className="icon-item">
              <img src={BusIcon} alt="" />
              <p>Fast & Reliable Delivery</p>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="button-section">
            <button className="primary-btn">
              Start Your Order
            </button>

            <button className="secondary-btn">
              Learn More About Us
            </button>
          </div>

        </div>

        {/* TERMS SECTION */}
        <div className="Terms">
          <div>
            <p>© 2026</p>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>

      </div>
      
    </div>
    
    </>
  );
}
