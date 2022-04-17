import React from 'react';
import HomeHeader from '../HomeHeader/HomeHeader';
import SearchTrip from '../SearchTrip/SearchTrip';

const Home = () => {
    return (
        <div className='relative'>
            <HomeHeader />
            <SearchTrip />
        </div>
    );
};

export default Home;