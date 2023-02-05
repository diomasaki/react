import React from "react";
import Category from "../components/Category";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider/>
      <Category/>
      <Product/>
    </div>
  );
};

export default Home;
