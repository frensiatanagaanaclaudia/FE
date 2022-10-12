import Carousel from "react-multi-carousel";
import { Artikelresponsive } from "../../service/responsive";
import React from 'react'
import Fade from 'react-reveal/Fade';

const ArtikelCarousel=({deviceType}) =>{
  return (
    <Fade left>
        <Carousel responsive={Artikelresponsive} deviceType={deviceType}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
  </Carousel>
  </Fade> 
  )
}
export default  ArtikelCarousel;
