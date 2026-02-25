import React from "react";
import "./FoodCard.css";

export default function FoodCard({ image, title, description, price }) {
  return (
    <div className="food-card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>

      <div className="food-footer">
        <span>${price}</span>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
