import React from "react";
import "./ExploreHero.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import menuData from "../../assets/menuData.JS";

const ExploreHero = () => {
  const handleCategoryChange = (e) => {
    const section = document.getElementById(e.target.value);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { addToCart } = useContext(CartContext);

  return (
    <>
    <div className="explore-container">
      {/* HERO */}
      <section className="explore-hero">
        <div className="explore-content">
          <h1>Chuks Kitchen</h1>
          <p>Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)</p>
        </div>
      </section>

      {/* CATEGORY DROPDOWN */}
      <div className="menu-category-wrapper">
        <div className="menu-dropdown">
          <select onChange={handleCategoryChange} defaultValue="">
            <option value="" disabled>
              Menu Category
            </option>
            <option value= "Popular">Popular</option>
            <option value="rice">Rice Dishes</option>
            <option value="soup">Soups</option>
            <option value="grill">Grills</option>
            <option value="Swallow">Swallow</option>
          </select>
        </div>
      </div>

      {/* ================= MENU SECTIONS ================= */}

      {/* RICE */}
      <section id="rice" className="menu-section">
  <h2>Rice Dishes</h2>
  <div className="menu-grid">
    {menuData
      .filter((item) => item.category === "rice")
      .map((item) => (
        <div className="menu-card" key={item.id}>
          <img src={item.image} alt={item.title} />
          <div className="menu-card-content">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <div className="menu-card-footer">
              <span>₦{item.price.toLocaleString()}</span>
              <button onClick={() => addToCart(item)}>+</button>

            </div>
          </div>
        </div>
      ))}
  </div>
</section>


      {/* SOUP */}
      <section id="soup" className="menu-section">
  <h2>Soups</h2>
  <div className="menu-grid">
    {menuData
      .filter((item) => item.category === "soup")
      .map((item) => (
        <div className="menu-card" key={item.id}>
          <img src={item.image} alt={item.title} />
          <div className="menu-card-content">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <div className="menu-card-footer">
              <span>₦{item.price.toLocaleString()}</span>
              <button onClick={() => addToCart(item)}>+</button>
            </div>
          </div>
        </div>
      ))}
  </div>
</section>

      {/* GRILL */}
      <section id="grill" className="menu-section">
  <h2>Grills</h2>
  <div className="menu-grid">
    {menuData
      .filter((item) => item.category === "grill")
      .map((item) => (
        <div className="menu-card" key={item.id}>
          <img src={item.image} alt={item.title} />
          <div className="menu-card-content">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <div className="menu-card-footer">
              <span>₦{item.price.toLocaleString()}</span>
             <button onClick={() => addToCart(item)}>+</button>
            </div>
          </div>
        </div>
      ))}
  </div>
</section>

      

      {/* DRINKS */}
      <section id="Swallow" className="menu-section">
  <h2>Swallows</h2>
  <div className="menu-grid">
    {menuData
      .filter((item) => item.category === "swallow")
      .map((item) => (
        <div className="menu-card" key={item.id}>
          <img src={item.image} alt={item.title} />
          <div className="menu-card-content">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <div className="menu-card-footer">
              <span>₦{item.price.toLocaleString()}</span>
              <button onClick={() => addToCart(item)}>+</button>
            </div>
          </div>
        </div>
      ))}
  </div>
</section>

</div>
    </>
  );
};

export default ExploreHero;
