import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";
import "./Home.css";
import FoodCard from "../../Components/FoodCard/FoodCard";
import { foodData } from "../../assets/FoodData";
import Card from "../../Components/Card/Card";
import Banner from "../../Components/Banner/Banner";

export default function Home() {
  return (
    <>
   

      <main className="home">
        {/* HERO SECTION */}
        <Hero />

        {/* POPULAR SECTION */}
        <section className="section">
          <h3 className="section-title">Popular Destinations</h3>

          <div className="card-grid">
            {foodData.map((food) => (
              <Card
                
                image={food.image}
                title={food.title}
                
              />
            ))}
          </div>
        </section>

        {/* FOOD CATEGORY SECTION */}
        <section className="section">
          <h3 className="section-title">Food Category</h3>

          <div className="card-grid">{/* 6 food cards */}
             {foodData.map((food) => (
              <FoodCard
                key={food.id}
                image={food.image}
                title={food.title}
                description={food.description}
                price={food.price}
              />
            ))}
          
          </div>
        </section>

        {/* BANNER */}
        <Banner />
      </main>

      
    </>
  );
}
