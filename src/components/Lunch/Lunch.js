import React from 'react';
import './Lunch.css';
import lunch1 from '../../images/lunch/lunch1.png';
import lunch2 from '../../images/lunch/lunch2.png';
import lunch3 from '../../images/lunch/lunch3.png';
import lunch4 from '../../images/lunch/lunch4.png';
import lunch5 from '../../images/lunch/lunch5.png';
import lunch6 from '../../images/lunch/lunch6.png';

const Lunch = () => {
    return (
        <div className='breakfast'>
            <div className="cart">
                <img className='cart-img' src={lunch1} alt="" />
                <h5>Bagel and cream cheese</h5>
                <p>How we dream about out future</p>
                <h4>$6.99</h4>
            </div>
            <div className="cart">
                <img className='cart-img' src={lunch2} alt="" />
                <h5>Bagel and cream cheese</h5>
                <p>How we dream about out future</p>
                <h4>$6.99</h4>
            </div>
            <div className="cart">
                <img className='cart-img' src={lunch3} alt="" />
                <h5>Bagel and cream cheese</h5>
                <p>How we dream about out future</p>
                <h4>$6.99</h4>
            </div>
            <div className="cart">
                <img className='cart-img' src={lunch4} alt="" />
                <h5>Bagel and cream cheese</h5>
                <p>How we dream about out future</p>
                <h4>$6.99</h4>
            </div>
            <div className="cart">
                <img className='cart-img' src={lunch5} alt="" />
                <h5>Bagel and cream cheese</h5>
                <p>How we dream about out future</p>
                <h4>$6.99</h4>
            </div>
            <div className="cart">
                <img className='cart-img' src={lunch6} alt="" />
                <h5>Bagel and cream cheese</h5>
                <p>How we dream about out future</p>
                <h4>$6.99</h4>
            </div>
        </div>
    );
};

export default Lunch;