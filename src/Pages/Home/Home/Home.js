import React from 'react';
import Explore from '../Explore/Explore';
import HomeHeader from '../HomeHeader/HomeHeader';
import Packeges from '../Packeges/Packeges';
import SearchTrip from '../SearchTrip/SearchTrip';

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <SearchTrip />
            <Packeges />
            <Explore />
        </div>
    );
};

export default Home;