import React from "react";
import Carousel from "react-multi-carousel";
import { GaleriResponsive } from "../../service/responsive";
import Fade from "react-reveal/Fade";
import { CCard } from "@coreui/react";
const GaleriCarousel = ({ deviceType, items }) => {
  console.log(items);
  return (
    <>
      <Fade left>
        <Carousel responsive={GaleriResponsive} deviceType={deviceType}>
          {items?.map((item) => (
            <div key={item._id}>
              <CCard> {item.judulKegiatan}</CCard>
            </div>
          ))}
        </Carousel>
      </Fade>
    </>
  );
};
export default GaleriCarousel;
