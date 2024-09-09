import React from "react";
import { NavBar } from "../components/NavBar";
import { ImageShow } from "../components/ImageShow";
import { ProductCard } from "../components/ProductCard";
import { Footers } from "../components/Footers";

export const Home = () => {
  return (
    <>
      <NavBar />
      <ImageShow />
      <div className="home-cards">
        <ProductCard />
      </div>
      <div className="btn-home">
        <a href="/products">
          <button type="button">View All</button>
        </a>
      </div>

      <Footers />
    </>
  );
};
