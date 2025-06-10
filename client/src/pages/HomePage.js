import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import PeakySlider from "../components/PeakySlider";

import ReviewSection from "../components/ReviewSection";
import InstagramSection from "../components/InstagramSection";
import NewArrivals from "../components/NewArrivals";
import DealsSection from "../components/DealsSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <DealsSection />
      <NewArrivals />
      <PeakySlider />
      <InstagramSection />
      <ReviewSection />
      <Footer />
    </>
  );
};

export default HomePage;
