import React from 'react';
import Banner from './Banner';
import Brands from './Brands';
import HomeReview from './HomeReview';
import Package from './Package/Package';
import Parts from './Parts';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Parts></Parts>
           <Summary></Summary>
           <HomeReview></HomeReview>
           <Package></Package>
           <Brands></Brands>
        </div>
    );
};

export default Home;