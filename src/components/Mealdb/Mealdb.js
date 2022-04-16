import React from 'react';
import CustomLink from '../CustomLink';
import './Mealdb.css';

const Mealdb = () => {
    return (
        <div>
            <div className='mealdb'>
                <CustomLink to='/home/breakfast'>Breakfast</CustomLink>
                <CustomLink to='/home/lunch'>Lunch</CustomLink>
                <CustomLink to='/home/dinner'>Dinner</CustomLink>
            </div>

        </div>
    );
};

export default Mealdb;