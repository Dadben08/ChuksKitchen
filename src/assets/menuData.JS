import React from "react";  
import Joloff from "./JollofDellight.png";
import FriedRice from "./Jollof2.png";
import Eba from "./Eba.png";
import Amala from "./Amala.jpg";
import Fufu from "./Fufu.jpg";
import Snail from "./SnailSoup.jpg";

import JollofSal from "./JollofSalld.jpg";
import BBQ from "./BBQ.png";
import PepperSoup from "./PepperSoup.png";
import Grill from "./Grill.png";






const menuData = [
  // ================= RICE =================
  {
    id: 1,
    category: "rice",
    title: "Jollof Rice",
    description: "Smoky Nigerian party-style jollof rice.",
    price: 3500,
    image: Joloff,
  },
  {
    id: 2,
    category: "rice",
    title: "Fried Rice",
    description: "Classic fried rice with vegetables and chicken.",
    price: 4000,
    image: JollofSal,
  },
  {
    id: 3,
    category: "rice",
    title: "Coconut Rice",
    description: "Rich coconut infused rice with spices.",
    price: 3800,
    image: FriedRice,
  },

  // ================= SOUP =================
  {
    id: 4,
    category: "soup",
    title: "Egusi Soup",
    description: "Rich melon seed soup with assorted meat.",
    price: 4500,
    image: PepperSoup,
  },
  {
    id: 5,
    category: "soup",
    title: "Ogbono Soup",
    description: "Thick and delicious draw soup with beef.",
    price: 4200,
    image: Snail,
  },
  {
    id: 6,
    category: "soup",
    title: "Okro Soup",
    description: "Fresh okra soup cooked with assorted meats.",
    price: 4000,
    image: PepperSoup,
  },

  // ================= GRILL =================
  {
    id: 7,
    category: "grill",
    title: "Beef Suya",
    description: "Spicy grilled beef with traditional suya spice.",
    price: 3000,
    image: Grill,
  },
  {
    id: 8,
    category: "grill",
    title: "Grilled Chicken",
    description: "Juicy flame-grilled chicken with signature sauce.",
    price: 5000,
    image: Grill,
  },
  {
    id: 9,
    category: "grill",
    title: "Grilled Fish",
    description: "Fresh whole fish grilled with pepper sauce.",
    price: 6500,
    image: BBQ,
  },



    // ================= swallow =================
    {
      id: 13,
      category: "swallow",
        title: "Amala",
        description: "Juicy beef burger with cheese",
        price: 3000,
        image: Amala,
    },

    {
        id: 14,
        category: "swallow",
        title: "Eba",
        description: "Juicy beef burger with cheese",
        price: 3000,
        image: Eba,

    },

    {
        id: 15,
        category: "swallow",
        title: "Fufu",
        description: "Juicy beef burger with cheese",
        price: 3000,
        image: Fufu,

    }


];

export default menuData;
