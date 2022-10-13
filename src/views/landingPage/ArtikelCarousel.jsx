import React from "react";
import Carousel from "react-multi-carousel";
import { ArtikelResponsive } from "../../service/responsive";
import Fade from "react-reveal/Fade";
import { CCardBody, CCardFooter, CCardHeader } from "@coreui/react";
import { Link } from "react-router-dom";
const ArtikelCarousel = ({ deviceType, items }) => {
  console.log(items);
  return (
    <>
      <section className="container">
        <Fade bottom>
          {" "}
          <h1 className="mt-4">Artikel</h1>
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
                      <Link to="{/artikel}">
                        <img
                          style={{ width: "100%" }}
                          src={`https://ukmdb.herokuapp.com/` + item.imageUrl}
                          alt="Artikel"
                        ></img>
                      </Link>
                    </figure>
                  </CCardBody>
                  <CCardFooter> 
                    {/* <div className="col-10"> {item.keterangan}</div> */}
                    <figcaption>
                      Periode:{item.periode}
                      {" "}
                     
                    </figcaption>
                   </CCardFooter>
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
