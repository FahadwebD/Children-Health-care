import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Covid.css'

const Covid = () => {
    return (
    <div className='my-2'>
        <h2 style={{color:'black' , fontSize:22}}>We are committed to keeping families safe during COVID-19 and are here to answer your questions.</h2>
        <div className='container gridP my-5'>
       <div>
       <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>COVID-19: What You Need to Know</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Offering COVID-19 Testing on a Case-By-Case Basis</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Steps We're Taking to Keep Your Family Safe</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>COVID-19 Vaccines</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
       </div>
       <div className='p-2 mt-4'>
            <img style={{height:400 , width:380}} src="https://pngfile.net/download/Ot7EVvckNDNuYc6NG5Vt93ArNwKLUgTy0LS5A6p82h5DLMGMLcoNW00bdqmI5bTWm1y0NNLltsOH8pBcfHqtG34XVgU2bXrT4TtrIdoXT0Qx8tSOzaRqO6jndlnWy3twsZJm8SUOtvtwPOEm8G0QcGUd7gK1jhQifOOYYaWFeuuFwYH7zXC3V8kOQTiZhS2PpdgjkntS/large" alt="" />

       </div>
    </div>
    </div>
    );
};

export default Covid;