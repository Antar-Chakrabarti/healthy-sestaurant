import React from 'react';
import { Link } from 'react-router-dom';
import './Mealdb.css';

const Mealdb = () => {
    return (
        <div className='mealdb'>
            <Link to='/breakfast'>Breakfast</Link>
            <Link to='/lunch'>Lunch</Link>
            <Link to='/dinner'>Dinner</Link>
        </div>
    );
};

export default Mealdb;