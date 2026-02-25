import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";
import logo from "../../assets/ChuksKitchen.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu toggle

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <NavLink to="/" >
        <img src={logo} alt="Chuks Kitchen Logo" />
        </NavLink>
        {/* Desktop Links */}
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <NavLink to="/home" className="nav-link">Home</NavLink>
          <NavLink to="/explore" className="nav-link">Explore</NavLink>
          <NavLink to="/orders" className="nav-link">My Orders</NavLink>
          <NavLink to="/account" className="nav-link">Account</NavLink>
          <NavLink to="/login" className="login-btn">
            Login
          </NavLink>
        </div>

        

        {/* Mobile Toggle */}
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </nav>
  );
}
