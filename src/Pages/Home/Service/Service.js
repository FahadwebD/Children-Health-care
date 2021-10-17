import React from 'react';
import './Service.css'

const Service = ({service}) => {
  
    const{img ,name } = service
    
    return (
        <div>
            <div className="card">
            <div className="card-content">
                <div class="card-body"> <img style={{height:100}}  className="img img-fluid" src={img} alt=''/>
                    <div className="shadow"></div>
                    <div className="card-title">{name}</div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted">We spent thousands of hours creating on algorithm that does this for you in seconds. We collect a small fee from the professional after they meet your</small> </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Service;