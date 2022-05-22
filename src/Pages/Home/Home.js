import React from 'react';
import Banner from './Banner';
import Parts from './Parts';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Parts></Parts>
           <Summary></Summary>
        </div>
    );
};

export default Home;