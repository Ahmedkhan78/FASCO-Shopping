import React from "react";
import ProductList from "../components/Product/ProductList";
import Navbar from "../components/Product/Navbar";
import PeakySlider from "../components/PeakySlider";
import InstagramSection from "../components/InstagramSection";
import Footer from "../components/Footer";

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold text-center mt-6">Fashion</h1>
      <p className="text-xl  text-center mt-4">
        Home <span>{">"}</span> Fashion
      </p>
      <ProductList />
      <PeakySlider />
      <InstagramSection />
      <Footer />
    </div>
  );
};

export default ProductPage;
