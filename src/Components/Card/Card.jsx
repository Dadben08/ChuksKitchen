import React from "react";
import "./Card.css";

export default function Card({ image, title, description, price }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>

      
    </div>
  );
}
