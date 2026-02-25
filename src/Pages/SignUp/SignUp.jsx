import "./SignUp.css";
import OnboardingImg from "../../assets/OnboardingImg.jpg";
import Logo from "../../assets/ChuksKitchen.png";
import ForkIcon from "../../assets/Onboarding/Fork.png";
import Footer from "../../Components/Footer/Footer";
import Facebook from "../../assets/Facebook.png";
import google from "../../assets/Social-media-login.png";
import { NavLink } from "react-router-dom";


export default function SignUp() {
  return (
    <>
    <div className="Login-container">

      {/* IMAGE SIDE */}
     <div className="image-side">
  <img src={OnboardingImg} alt="Side Visual" />
  <div className="overlay"></div>
  <div className="image-text">
    <h2>Chuks Kitchen</h2>
    <p>Your journey to delicious, authentic Nigerian meals starts here. Sign up or log in to order your favorites today!</p>
  </div>
</div>


      {/* RIGHT CONTENT SIDE */}
       <div className="Sign-container">
      
      {/* Right Side */}
      <div className="Sign-form-wrapper">
        {/* Logo */}
        <img src={Logo} alt="Chuks Kitchen" className="Sign-logo" />

        {/* Heading */}
        <h3>Create Your Account</h3>

        {/* Email Input */}
        <label htmlFor="email">Email </label>
        <input type="email" id="email" placeholder="name@gmail.com" />

        <label htmlFor="email">Phone number</label>
        <input type="email" id="email" placeholder="8123340690" />

        {/* Password Input */}
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="QWE123#" />

        <label htmlFor="password">Confirm Password</label>
        <input type="password" id="password" placeholder="QWE123#" />

        {/* Forget Password */}
        <p className="forgot-password">I agree to the Terms & Conditions and Privacy Policy</p>

        {/* Continue Button */}
        <button className="continue-btn">Continue</button>

        {/* Or Continue With */}
        <p className="or-text">or continue with</p>

        {/* Social Buttons */}
        <div className="social-buttons">
          <button className="google-btn">
            <img src={google} alt="Google" />
            Google</button>
          <button className="facebook-btn">
            <img src={Facebook} alt="Facebook" />
            Facebook</button>
        </div>

        {/* Create Account */}
        <p className="create-account">
          Already have an account? {" "}
          <NavLink to="/login" className="create-account-link">
            <span className="create-account-link">Sign In</span>
          </NavLink>
         
      
          
        </p>
      </div>

    </div>
      
    </div>
    
    </>
  );
}
