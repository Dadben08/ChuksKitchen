import "./Login.css";
import OnboardingImg from "../../assets/OnboardingImg.jpg";
import Logo from "../../assets/ChuksKitchen.png";
import ForkIcon from "../../assets/Onboarding/Fork.png";
import Footer from "../../Components/Footer/Footer";
import Facebook from "../../assets/Facebook.png";
import google from "../../assets/Social-media-login.png";
import { NavLink } from "react-router-dom";
import Icon  from "../../assets/Icons.svg";
import Icon2  from "../../assets/Icons2.svg";


export default function Login() {
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
       <div className="login-container">
      
      {/* Right Side */}
      <div className="login-form-wrapper">
        {/* Logo */}
        <img src={Logo} alt="Chuks Kitchen" className="login-logo" />

        {/* Heading */}
        <h3>Login your Account</h3>

        {/* Email Input */}
       
{/* Email Input */}
<label htmlFor="password">Email or phone number</label>

<div className="input-wrapper">
  <img src={Icon} alt="lock icon" className="input-icon" />
  <input
    type="password"
    id="password"
    placeholder="name@gmail.com"
    required
  />
</div>

       {/* Password Input */}
<label htmlFor="password">Password</label>

<div className="input-wrapper">
  <img src={Icon2} alt="lock icon" className="input-icon" />
  <input
    type="password"
    id="password"
    placeholder="Enter your password"
    required
  />
</div>


        {/* Forget Password */}
        <p className="forgot-password">Forgot Password?</p>

        {/* Continue Button */}
        <NavLink to="/home" >
  

        <button className="continue-btn">Continue</button>
</NavLink>
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
          Do you have an account?{" "}
          <NavLink to="/signup" className="create-account-link">
            <span className="create-account-link">Create An Account</span>
          </NavLink>
        </p>
      </div>

    </div>
      
    </div>
    
    </>
  );
}
