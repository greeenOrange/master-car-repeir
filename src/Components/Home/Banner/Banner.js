// import React from 'react';
// const images = [
//     "https://i.ibb.co/N3gKHJn/img-3.jpg",
//     "https://i.ibb.co/h1bWsfr/img-8.jpg",
//     "https://i.ibb.co/fYGNpZm/img-1.jpg"
// ]

// let imgIndex = 0;
// const Banner = () => {
//     const imgElement = document.getElementById()
//     setInterval(() => {
//         if(imgIndex >= images.length){
//             imgIndex = 0
//         }
//         const imgurl = images[imgIndex]
//         console.log(imgurl);
//         imgIndex++;
//     }, 1000);
//     return (
//         <div>
//             <img src={images} alt="" />
//         </div>
//     );
// };

// export default Banner;


import React from 'react';
import './Banner.css';
import video from '../../../web-images/mechanic/video.mp4'
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='my-3'>
            <Carousel interval={1400}>
  <Carousel.Item>
  <video id="video" muted autoplay="autoplay" loop="loop" preload="auto">
        <source className='video' src={video}></source>
      </video>
    <Carousel.Caption>
      <h3>Robotic Surgary</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-slider"
      src="https://i.ibb.co/N3gKHJn/img-3.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Hand instulement</h3>
      <p>amet consectetur adipisicing elit. Eos, ipsam?</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-slider"
      src="https://i.ibb.co/h1bWsfr/img-8.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Best Typers machines</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-slider"
      src="https://i.ibb.co/fYGNpZm/img-1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Quick and firs services</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;