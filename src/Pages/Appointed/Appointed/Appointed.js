import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useServices from '../../../hooks/useServices';
import AppointmentDetails from '../AppointmentDetails/AppointmentDetails';

const Appointed = () => {
    const [services , setServices] = useState([]);

    useEffect(()=>{
       
        fetch('https://raw.githubusercontent.com/FahadwebD/newdata/main/data.json')
        .then(res=>res.json())
        .then(data=>setServices(data))

    },[])
    const {serviceId} = useParams()
  
    console.log(services)
   
    const [detail , setDetail] = useState({})


    useEffect(()=>{
  
      if (services.length){
          const id = serviceId;
  
          const newP = services.find(service => service.id == id)
          setDetail(newP)
      }
      
    } ,[serviceId ,services])
    
    console.log(detail)
   
    return (
        <div className='container'>
            
                <div className='container'>
                <AppointmentDetails detail={detail} ></AppointmentDetails>
                </div>
            
            
        </div>
    );
};

export default Appointed;