import React from 'react';
import { Button } from 'react-bootstrap';

const AppointmentDetails = (props) => {
   
    const {name , img,why ,what} = props.detail;
    console.log(props)
 
    return (
        <div className='container mb-3'>
            <img className='img-fluid' src={img} alt="" />
            <div>
            <h1 style={{color:'dark'}}>{name}</h1>
            <p> <span style={{color:'red'}} >What is {name}</span>  {why}</p>
            <p><span  style={{color:'red'}}>Why Choose Us </span>{what}</p>
            </div>
            <Button className='px-5' style={{backgroundColor:'#58baed' , border:"none"}}>Talk To Us Today</Button>
        </div>
    );
};

export default AppointmentDetails;