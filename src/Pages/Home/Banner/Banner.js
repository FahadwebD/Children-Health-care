import React from 'react';
import { Carousel } from 'react-bootstrap';
import Bone from '../../../images/Banner/check-in-at-pediatric-urgent-care-1440x748.jpg';
import Btwo from '../../../images/Banner/children-smiling-in-bed-with-nurse-1440x748.jpg';
import Bthree from '../../../images/Banner/covid-19-testing.jpg';
import Bfour from '../../../images/Banner/grady-jarrett-teen-football-player-1440x748.jpg';
const Banner = () => {
    return (
        <>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Bone}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Wait Times</h3>
      <p>We are experiencing high volumes, which has led to increased wait times. Thank you for your patience.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Btwo}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Come to Work Where Your Work Matters More</h3>
      <p>When your work makes a difference in others’ lives, it can change your life, too. We are recruiting caring, talented people to join us in our mission to make kids healthier today and better tomorrow.

.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Bthree}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Does Your Child Need a COVID-19 Test?</h3>
      <p>If your child has no or mild symptoms, or just needs a test, go to a community testing site..</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Bfour}
      alt="Fourth slide"
    />

    <Carousel.Caption>
      <h3 >Come to Work Where Your Work Matters More</h3>
      <p>We have Georgia’s only nationally ranked orthopedics and sports medicine program for kids and teens. See why pediatric care is the best option for your athlete.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;