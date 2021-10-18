import React from 'react';
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
    
    
    <h1 id='head'>How We Make a Difference</h1>
    
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
            
        </div>
    );
};

export default Researches;