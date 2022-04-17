import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
            <div className='banner-area'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="home-content">
                                <h1>Tutor class</h1>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                                <a href="explore">Explore</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="image-content">
                                <img src="images/image.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Banner;