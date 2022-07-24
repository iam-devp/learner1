import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slideshow.css';

export default function Slideshow() {
  return (
    <div >
<Carousel fade className="myslide" >
  <Carousel.Item interval={3000}>
    <img
      className="myslide"
      src="https://www.pngitem.com/pimgs/m/224-2245184_transparent-sports-equipment-png-physical-activity-and-sports.png"
       alt="First slide"
    />
 
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="myslide"
      src="https://thumbs.dreamstime.com/b/many-used-modern-electronic-gadgets-use-white-floor-reuse-recycle-concept-top-view-164230611.jpg"
     
      alt="Second slide"
    />

 
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="myslide"
      src="https://media.istockphoto.com/photos/musical-instruments-picture-id894058154?k=20&m=894058154&s=170667a&w=0&h=xAcy32UYrnS-IOtrp8HbFjofk8ivjDJHmrROyroLzAU="
      alt="Third slide"
    />

 
  </Carousel.Item>
</Carousel>

</div>
  )
}