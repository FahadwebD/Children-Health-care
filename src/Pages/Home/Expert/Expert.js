import React from 'react';
import './Expert.css'

const Expert = ({expert}) => {

    const {img , name , chamber} =expert
    
    return (
      
   <div className='container ms-4 mb-3'>
        <div  style={{backgroundColor:'#8dd1fe'}} className="profile ">
        <div className="image"> <img style={{height:300 , width:300}} src={img} alt=''/> </div>
        <div className="content "> <span>{name}</span> <span>{chamber}</span> </div>
    </div>
   </div>

    );
};

export default Expert;