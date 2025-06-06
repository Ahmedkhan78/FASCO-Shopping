import React from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import PeakySlider from "./components/PeakySlider";
import "./App.css";
import ReviewSection from "./components/ReviewSection";
import InstagramSection from "./components/InstagramSection";

const App = () => {
  return (
    <div>
      {/* <Navbar />
      <Banner />
      <LogosSection /> */}
      <Hero />

      <PeakySlider />
      <InstagramSection />
      <ReviewSection />
      <Footer />
    </div>
  );
};

export default App;
