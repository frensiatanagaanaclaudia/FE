import React from "react";
import Carousel from "react-multi-carousel";
import { ArtikelResponsive } from "../../service/responsive";
import Fade from "react-reveal/Fade";
import { CCardBody, CCardFooter, CCardHeader } from "@coreui/react";
const ArtikelCarousel = ({ deviceType, items }) => {
  console.log(items);
  return (
    <>
      <section className="container">
        <Fade left>
          {" "}
          <h1>Artikel</h1>
          <Carousel responsive={ArtikelResponsive} deviceType={deviceType}>
            {items?.map((item) => (
              <div key={item._id}>
                <CCardHeader>
                  {" "}
                  <CCardBody>
                    <h4 className="mb-3">
                      <strong>{item.judulArtikel}</strong>
                    </h4>
                    <figure>
                      <img
                        style={{ width: "100%" }}
                        src={`https://ukmdb.herokuapp.com/` + item.imageUrl}
                        alt="Galeri"
                      ></img>
                    </figure>
                  </CCardBody>
                  <CCardFooter> {item.keterangan}</CCardFooter>
                </CCardHeader>
              </div>
            ))}
          </Carousel>
        </Fade>
      </section>
    </>
  );
};
export default ArtikelCarousel;
