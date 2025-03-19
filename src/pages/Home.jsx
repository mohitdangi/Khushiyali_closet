import React from 'react';
import Carousel from '../components/Carousel';
import FeatureSection from '../components/FeatureSection ';
import NewArrivals from '../components/NewArrivals';

const Home = () => {
  return (
    <div>
      <Carousel />
       <FeatureSection/>
       <NewArrivals/>
    </div>
  );
};

export default Home;
