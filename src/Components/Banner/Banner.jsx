import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-overlay">
        <div className="banner-content">
          <h2>Introducing Our New Menu Additions!</h2>
          <p>Explore exciting new dishes, crafted with the freshest 
ingredients and authentic Nigerian flavors. Limited time 
offer!</p>
          <button className="banner-btn">Discover what’s new</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
