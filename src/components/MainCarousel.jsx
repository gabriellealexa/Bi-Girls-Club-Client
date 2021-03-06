import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'

class MainCarousel extends React.Component {

  render() {
  return (
      
    <div> 
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://code.gabriellealexa.com/bgccarousel1.png"
      samesite="None"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>New Acessories!</h3>
      <Button>Shop Now</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://code.gabriellealexa.com/carousel3.png"
      samesite="None"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Summer is here ;)</h3>
      <p>Get your gear for Pride.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

 </div>
    
    
  
    )}
  }

export default MainCarousel;