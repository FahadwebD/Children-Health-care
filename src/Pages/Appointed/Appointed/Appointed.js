import React from 'react';
import { useParams } from 'react-router';

const Appointed = () => {

    const {serviceId} = useParams()
   
    return (
        <div>
            <h2>Booked{serviceId}</h2>
        </div>
    );
};

export default Appointed;