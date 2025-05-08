import React from "react";

import { Helmet } from "react-helmet";
import Banner from "../../components/Banner";
import CarouselSlider from "./Banner/CarouselSlider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Building Management (BMS) || Home </title>
      </Helmet>
      <Banner></Banner>
      <CarouselSlider></CarouselSlider>
    </div>
  );
};

export default Home;
