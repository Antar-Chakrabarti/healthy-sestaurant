import React from 'react';
import './Banner.css';
import banner1 from '../../images/banner1.png';
const Banner = () => {
    return (
        <div
            style={{ backgroundImage: `url(${banner1})`}}
        className='banner-section'>
            <div>
                <h2>Best food waiting for our belly!</h2>
                <div className="input-grup">
                    <input className='field' type="text" name="search"  placeholder='Search food items' id="" />
                    <input className='bttn' type="button" value="Search" />
                </div>
            </div>
        </div>
    );
};

export default Banner;