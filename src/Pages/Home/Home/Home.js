import React from 'react';
import HomeHeader from '../HomeHeader/HomeHeader';
import Packeges from '../Packeges/Packeges';
import SearchTrip from '../SearchTrip/SearchTrip';

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <SearchTrip />
            <Packeges />
        </div>
    );
};

export default Home;