import React from 'react';
import { Button } from 'react-bootstrap';
import './Researches.css';

const Researches = () => {
    return (
        <div>
            <div className='research-box d-flex justify-content-center align-items-center' >
            <h1 className='animate__animated animate__bounceInDown'>BREAKTHROUG DISCOVERIES FOR KIDS</h1>
            </div>
            <div className='container my-4'>
           <p id='para'> We have been conducting different types of projects since 1989. We started our initial projects with local resources. Since the completion we had the opportunity to collaborate with Nagasaki and WHO for pneumococcal carriage and meningitis surveillance. This led us to begin clinical trials in early 2000.

Our first big project was PneumoADIP in 2004 which helped develop CHRF laboratory network in a different hospital. Currently, we are continuing Invasive Bacterial diseases surveillance since 2009 at some of those laboratory networks. We also measured the Hib burden before and after the introduction of Vaccine at 2009.

We got ANISA during 2010 which is one of the biggest projects in our history. Simultaneously, we are conducting Microbiome and PCV impact study.</p>


            </div>

            <div>
            <div className="header">
    
    
    <h1 className='animate__animated animate__fadeInLeft' id='head'>How We Make a Difference</h1>
    
  </div>
  <div className="row1-container">
    <div className="boxs box-down green">
      
      <p>240+ clinical trials, 400+ publications and 470+ research and educational presentations last year</p>
      <img id='img-k' className='img-fluid' src="https://icons555.com/images/icons-green/image_icon_dna_helix_pic_512x512.png" alt=""/>
    </div>

    <div className="boxs red">
    
      <p>100+ physician scientists, 210+ research support staff, and 28 PhD lab heads</p>
      <img id='img-k' className='img-fluid' src="http://online.focusky.com/lovc/ghlm/files/extfiles/ext_02015920163725989.png" alt=""/>
    </div>

    <div className="boxs box-down blue">
      <p>$43+ million invested each year on research activities</p>
      <img id='img-k' className='img-fluid' src="https://www.cpp.edu/admissions/img/icons/checklist_icon_blue.png" alt=""/>
    </div>
  </div>
  <div className="row2-container">
    <div className="boxs orange">
      <p>11 research centers</p>
      <img id='img-k' className='img-fluid' src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/microscope-icon.png" alt=""/>
    </div>
  </div>
            </div>

            <div className='container my-4 p-4'>
              <div>
                <h1>Our Research</h1>
                </div>
                <div>
                  <p>Nemours has been at the forefront of pediatric research and care for more than 80 years. Our physician researchers, clinicians and scientists bring insights and discoveries to patients — fast. We share our findings so we can help kids everywhere, even those we’ll never meet.</p>
                </div>
                <div> <Button  className='px-5 ' style={{backgroundColor:'#58baed' , border:"none"}}>See Our Researches</Button></div>
            </div>
            <div className="main-container">
       
        <div className="cardss">
         
          <div className="card card-2">
            
            
            <h2 className="card__title">Nemours researchers and partners use our technologically advanced core, diagnostic and research lab facilities, with highly specialized equipment, methods and staff. .</h2>
            <p className="card__apply">
              <a className="card__link" href="/#">Learn More </a>
            </p>
          </div>
          <div className="card card-3">
          
            <h2 className="card__title">
            We protect the health and safety of every child. Each project goes through a strict review process. We follow the highest standards of ethics and conduct from start to finish. </h2>
            <p className="card__apply">
              <a className="card__link" href="/#">Learn More</a>
            </p>
          </div>
         
         
        </div>
      </div>
            
        </div>
    );
};

export default Researches;