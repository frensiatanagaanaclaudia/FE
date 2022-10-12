import React from 'react'
import Carousel from "react-multi-carousel";
import { Galeriresponsive } from "../../service/responsive";

import Fade from 'react-reveal/Fade';

const GaleriCarousel=({deviceType}) =>{
  return (
    <Fade left>
        <Carousel responsive={Galeriresponsive} deviceType={deviceType}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
  </Carousel>
  </Fade> 
  )
}
export default  GaleriCarousel;
