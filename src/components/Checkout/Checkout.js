import React from 'react';
import './checkout.css'

const Checkout = () => {
    return (
        <div className='checkout-form-area'>
           <form action="">
                <input type="text" name="name" placeholder='name'/>
                <br />
                <input type="email" name="email" id="" placeholder='email'/>
                <br />
                <input type="password" name="password" id="" placeholder='password'/>
                <br />
                <input type="address" name="address" id="" placeholder='address'/>
                <br/>
                <input type="city" name="city" id="" placeholder='city'/>
           </form>
        </div>
    );
};

export default Checkout;