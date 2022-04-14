import React from 'react';
import './Dinner.css';
import dinner1 from '../../images/dinner/dinner1.png';
import dinner2 from '../../images/dinner/dinner2.png';
import dinner3 from '../../images/dinner/dinner3.png';
import dinner4 from '../../images/dinner/dinner4.png';
import dinner5 from '../../images/dinner/dinner5.png';
import dinner6 from '../../images/dinner/dinner6.png';

const Dinner = () => {
    return (
        <div className='breakfast'>
            <div className="cart">
                <img className='cart-img' src={dinner1} alt="" />
                <h5>Bagel and cream cheese</h5>
                <p>How we dream about out future</p>
                <h4>$6.99</h4>
            </div>
            <div className="cart">
                <img className='cart-img' src={dinner2} alt="" />
                <h5>Bagel and cream cheese</h5>
                <p>How we dream about out future</p>
                <h4>$6.99</h4>
            </div>
            <div className="cart">
                <img className='cart-img' src={dinner3} alt="" />
                <h5>Bagel and cream cheese</h5>
                <p>How we dream about out future</p>
                <h4>$6.99</h4>
            </div>
            <div className="cart">
                <img className='cart-img' src={dinner4} alt="" />
                <h5>Bagel and cream cheese</h5>
                <p>How we dream about out future</p>
                <h4>$6.99</h4>
            </div>
            <div className="cart">
                <img className='cart-img' src={dinner5} alt="" />
                <h5>Bagel and cream cheese</h5>
                <p>How we dream about out future</p>
                <h4>$6.99</h4>
            </div>
            <div className="cart">
                <img className='cart-img' src={dinner6} alt="" />
                <h5>Bagel and cream cheese</h5>
                <p>How we dream about out future</p>
                <h4>$6.99</h4>
            </div>
        </div>
    );
};

export default Dinner;