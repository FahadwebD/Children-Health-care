import React from 'react';

import './Inspiration.css'

const Inspiration = () => {
    return (
        <div className="main-container">
        <div className="heading">
          <h1 className="heading__title">It's Easy</h1>
         
        </div>
        <div className="cardss">
          <div className="card card-1">
            
            <h2 className="card__title">Make an Appointment <br />Schedule an appointment with a pediatric specialist.

</h2>
            
            <p className="card__apply">
              <a className="card__link" href="/#">Apply Now </a>
            </p>
          </div>
          <div className="card card-2">
            
            
            <h2 className="card__title">Find a Location <br />
Get directions and search for specialty locations.</h2>
            <p className="card__apply">
              <a className="card__link" href="/#">Apply Now </a>
            </p>
          </div>
          <div className="card card-3">
          
            <h2 className="card__title">
Check Wait Times <br />
View the wait times at our Urgent Care Centers and ERs.</h2>
            <p className="card__apply">
              <a className="card__link" href="/#">Apply Now</a>
            </p>
          </div>
          <div className="card card-4">
          
            <h2 className="card__title">
Find a Doctor <br />
Search for doctors by specialty, name or location.</h2>
            <p className="card__apply">
              <a className="card__link" href="/#">Apply Now </a>
            </p>
          </div>
         
        </div>
      </div>
    );
};

export default Inspiration;