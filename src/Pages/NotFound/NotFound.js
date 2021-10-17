import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fouofou from '../../images/404/ezgif.com-gif-maker.jpg'

const NotFound = () => {
    return (
        <div className='container p-5'>
            <div className='d-flex justify-content-center align-items-center'>
                <div><img src={fouofou} alt="" /></div>
                
            </div>
            <div ><Link to='/'><Button style={{backgroundColor:'#a8cce2' , border:'none'}}>Go Back</Button></Link></div>
        </div>
    );
};

export default NotFound;