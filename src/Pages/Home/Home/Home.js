import React from 'react';
import Banner from '../Banner/Banner';
import Covid from '../Covid/Covid';
import Experts from '../Experts/Experts';
import Inspiration from '../Inspiration/Inspiration';

import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inspiration/>
           <Services></Services>
           
           
           <Experts></Experts>
           <Covid/>
        </div>
    );
};

export default Home;