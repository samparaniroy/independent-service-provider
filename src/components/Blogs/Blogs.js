import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h2 className='mt-4 mb-4'>Difference between authorization and authentication</h2>
                    <p>authentication is the process of verifying who someone is.whereas authorization is the process of verifying what specific applications, files, and data a user has access to.The first step is to confirm the identity of the passenger so that they know who they are talking about. The second step is to serve any subject that has passenger access.In the digital world, authentication and authorization accomplish these same goals</p>
                </div>
                <div>
                    <h2 className='mt-4 mb-4'> Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p>Firebase helps build and run successful apps. Firebase handles all data in real time. Data exchange from database is made easy and firm. Firebase is used for many purposes. Which helps apps to develop, grow and build quality apps</p>
                </div>
                <div>
                    <h2 className='mt-4 mb-4'>What other services does firebase provide other than authentication</h2>
                    <p className='pb-4'>Firebase is originally developed by Firebase inc and later acquired by Google.There are more services besides Firebase Grameen. E.g., Cloud Firestore,
                    Cloud Functions, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging.Google Analytics The service provides visualization of all this information on just a single tap.Predictions service helps you in making predictions about your product decisions</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;