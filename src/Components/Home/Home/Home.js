import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Link to="/explore"><h2>Explore</h2></Link>
            <Link to="/addServices"><h2>AddServices</h2></Link>
            <Link to="/services"><h2>Services</h2></Link>
            <Services></Services>
        </div>
    );
};

export default Home;