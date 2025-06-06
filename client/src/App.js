import React from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import PeakySlider from "./components/PeakySlider";
import "./App.css";

const App = () => {
  return (
    <div>
      {/* <Navbar />
      <Banner />
      <LogosSection /> */}
      <Hero />
      <PeakySlider />
      <Footer />
    </div>
  );
};

export default App;
