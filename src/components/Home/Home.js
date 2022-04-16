import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Mealdb from '../Mealdb/Mealdb';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Mealdb/>
            <Outlet />
        </div>
    );
};

export default Home;