import "./hero.css";
import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Discover Amazing Places</h1>
        <p>Find the best food and destinations near you</p>
        <button className="hero-btn">Explore Now</button>

        {/* Search bar at bottom */}
        <div className="search-bar">
          <Search size={40} color="gray" />
          <input type="text" placeholder="What are you craving for today?" />
          
        </div>
      </div>
    </section>
  );
}
