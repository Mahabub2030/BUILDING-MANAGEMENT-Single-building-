import React from "react";

import { Helmet } from "react-helmet";
import Banner from "../../components/Banner";
import CarouselSlider from "./Banner/CarouselSlider";
import LocationSection from "../../components/SharedComponents/LocationSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Building Management (BMS) || Home </title>
      </Helmet>
      <Banner></Banner>
      <CarouselSlider></CarouselSlider>
      <div className="mt-10">
        <LocationSection></LocationSection>
      </div>
    </div>
  );
};

export default Home;
