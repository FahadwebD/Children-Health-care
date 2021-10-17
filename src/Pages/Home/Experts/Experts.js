import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';
import './Experts.css'

const Experts = () => {
    const[experts , setExperts] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/FahadwebD/doctors-data/main/experts.json')
        .then(res=>res.json())
        .then(data=>setExperts(data))
    },[])
    return (
        <div className='container'>
            <br />
            <br />
            <h2>Our Doctors</h2>
            <br />
            <br />
            <div  className='container mapGridE mt-3 '>
            {
                experts.map(expert=> <Expert 
                    key={expert.name}
                    expert={expert}
                ></Expert>)
            }
        </div>
        </div>
    );
};

export default Experts;