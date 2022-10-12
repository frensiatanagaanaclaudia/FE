import React from "react";
import Carousel from "react-multi-carousel";
import { ArtikelResponsive } from "../../service/responsive";
import Fade from "react-reveal/Fade";
import { CCard } from "@coreui/react";
const ArtikelCarousel = ({ deviceType, items }) => {
  console.log(items);
  return (
    <>
      {!items ? (
        <h1>Loading</h1>
      ) : (
        <Fade left>
          <Carousel responsive={ArtikelResponsive} deviceType={deviceType}>
            {items.map((item) => (
              <div key={item._id}>
                <CCard> {item.judulKegiatan}</CCard>
              </div>
            ))}
          </Carousel>
        </Fade>
      )}
    </>
  );
};
export default ArtikelCarousel;
