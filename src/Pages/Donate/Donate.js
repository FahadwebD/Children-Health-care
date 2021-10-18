import React from 'react';
import './Donate.css'

const Donate = () => {
    return (
        <div>
            <div className='animate__animated animate__swing banner-box d-flex justify-content-center align-items-center'>
            <h1 id='h' >COVID-19 Solidarity Response Fund</h1>
            </div>
            <div className='container my-4'>
                <p id='para'>The world has never faced a crisis like COVID-19. The pandemic is impacting communities everywhere. It’s never been more urgent to support the global response, led by the World Health Organization (WHO).

              Donations to the COVID-19 Solidarity Response Fund (SRF) support WHO’s work, including with partners to suppress transmission, reduce exposure, counter misinformation, protect the vulnerable, reduce mortality and morbidity and accelerate equitable access to new COVID-19 tools.

                Some donations also support additional Fund partners: African Union/African CDC, the Big 6 Youth Organizations, the Coalition for Epidemic Preparedness Innovations (CEPI), the UN Refugee Agency (UNHCR), United Nations International Children’s Emergency Fund (UNICEF), the UN Relief and Works Agency for Palestine Refugees in the Near East (UNRWA), the World Food Programme (WFP).

                The Fund is powered by the WHO Foundation, in collaboration with the UN Foundation and a global network of fiduciary partners. Donations can be made via this website from anywhere in the world, with online tax benefits provided to donors based in Switzerland, the USA and Canada. Donors from certain European countries, the UK, China, Japan, and the USA, who desire tax receipts may wish to give online to our Fund partners in these</p>
            </div>

            <div className=' container donatetwo d-flex flex-column justify-content-center align-items-center'>
                <div>As of Oct 10, 2021 SRF partners have raised and received pledges for</div>
                <div className='money my-3'><h1>USD $ 256 230 578</h1></div>
                <div>from over 675 704 donors</div>
            </div>

            <div id="donateNow" className='container my-2 d-flex justify-content-center align-items-center'><h3>Donate Now</h3></div>


            <div>
                
            </div>


        </div>
    );
};

export default Donate;