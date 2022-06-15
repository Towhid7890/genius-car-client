import React from 'react';
import { Helmet } from 'react-helmet-async';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
   
    return (
        <div>
            <Helmet>
        <title>Home-genius car</title>
    </Helmet>
            <Slider></Slider>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;