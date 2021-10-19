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
    COVID-19 is an infectious respiratory illness caused by a newly discovered coronavirus called SARS-CoV-2. ‘CO’ stands for corona, ‘VI’ for virus, and ‘D’ for disease.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Offering COVID-19 Testing on a Case-By-Case Basis</Accordion.Header>
    <Accordion.Body>
    There are many COVID-19 testing sites throughout Atlanta offering testing to children. Your pediatrician may also have access to testing.In collaboration with Emory University, Atlanta Public Schools (APS) and Viral Solutions, Children’s offers testing that also contributes to research through the National Institutes of Health (NIH) RADx Program. This pediatric-friendly site is open to the general public and provides testing for kids and adults who are symptomatic or have been exposed to COVID‐19.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Steps We're Taking to Keep Your Family Safe</Accordion.Header>
    <Accordion.Body>
    At Children’s Healthcare of Atlanta, we know how important it is to be able to trust the people who care for your family. That’s why we’re taking every precaution to help make sure you feel safe bringing your family to our facilities during the COVID-19 pandemic. Providing safe, specialized care for kids is what we do.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>COVID-19 Vaccines</Accordion.Header>
    <Accordion.Body>
    We know that you have many questions about the COVID-19 vaccines and when they will be available to children. Our team is here to help.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
       </div>
       <div className='p-2 mt-4'>
            <img style={{height:400 , width:300}} src="https://pngfile.net/download/Ot7EVvckNDNuYc6NG5Vt93ArNwKLUgTy0LS5A6p82h5DLMGMLcoNW00bdqmI5bTWm1y0NNLltsOH8pBcfHqtG34XVgU2bXrT4TtrIdoXT0Qx8tSOzaRqO6jndlnWy3twsZJm8SUOtvtwPOEm8G0QcGUd7gK1jhQifOOYYaWFeuuFwYH7zXC3V8kOQTiZhS2PpdgjkntS/large" alt="" />

       </div>
    </div>
    </div>
    );
};

export default Covid;