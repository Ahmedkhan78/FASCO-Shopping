import React from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import PeakySlider from "./components/PeakySlider";
import "./App.css";
import ReviewSection from "./components/ReviewSection";
import InstagramSection from "./components/InstagramSection";
import NewArrivals from "./components/NewArrivals";
import DealsSection from "./components/DealsSection";

const App = () => {
  return (
    <div>
      <Hero />
      <DealsSection />
      <NewArrivals />
      <PeakySlider />
      <InstagramSection />
      <ReviewSection />
      <Footer />
    </div>
  );
};

export default App;
