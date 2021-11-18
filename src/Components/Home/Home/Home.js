import React from 'react';
import StaffShow from '../../DashBoard/StaffShow/StaffShow';

import Services from '../../Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>

            <Banner></Banner>

            <Services></Services>
            <StaffShow></StaffShow>
        </div>
    );
};

export default Home;