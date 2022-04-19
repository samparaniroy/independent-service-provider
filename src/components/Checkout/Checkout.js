import React from 'react';
import './checkout.css'

const Checkout = () => {
    return (
        <div className='checkout-content'>
            <h2>Please checkout your booking</h2>
           <div className='checkout-form-area'>
            <form action="">
                    <input type="text" name="name" placeholder='name'/>
                    <br />
                    <input type="email" name="email" id="" placeholder='email'/>
                    <br />
                    <input type="phone number" name="phone number" id="" placeholder='phone number'/>
                    <br />
                    <input type="address" name="address" id="" placeholder='address'/>
                    <br/>
                    <input type="city" name="city" id="" placeholder='city'/>
                    <br />
                    <input className='submit-button' type="submit" value="submit" />
            </form>
           </div>
        </div>
    );
};

export default Checkout;