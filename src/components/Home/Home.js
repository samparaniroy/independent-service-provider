import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css'


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <div className="develop-area">
                <div className="container">
                    <div className="develop-image">
                        <img src="images/Rectangle.png" alt="" />
                    </div>
                    <div className="develop-content">
                        <h1>Develop 
                            Without Limits</h1>
                        <p>The reason we stay loyal to brands is because of their values. The best brands combine physical, emotional, and logical elements into one exceptional customer (and employee) experience that you value as much as they do.</p>
                        <a href="#">Read the  Documentation</a>
                    </div>
                </div> 
            </div>
         </div>    
    );
};

export default Home;