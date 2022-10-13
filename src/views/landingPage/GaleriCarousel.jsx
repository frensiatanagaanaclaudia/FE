// import React from "react";
// import Carousel from "react-multi-carousel";
// import { GaleriResponsive } from "../../service/responsive";
// import Fade from "react-reveal/Fade";
// import { CCard } from "@coreui/react";
// const GaleriCarousel = ({ deviceType, items }) => {
//   console.log(items);
//   return (
//     <>
//       <Fade left>
//         <Carousel responsive={GaleriResponsive} deviceType={deviceType}>
//           {items?.map((item) => (
//             <div key={item._id}>
//               <CCard> {item.judulKegiatan}</CCard>
//             </div>
//           ))}
//         </Carousel>
//       </Fade>
//     </>
//   );
// };
// export default GaleriCarousel;
import React from "react";
import Carousel from "react-multi-carousel";
import { GaleriResponsive } from "../../service/responsive";
import Fade from "react-reveal/Fade";
import { CCardBody, CCardFooter, CCardHeader } from "@coreui/react";
const GaleriCarousel = ({ deviceType, items }) => {
  console.log(items);
  return (
    <>
      <section className="container">
        <Fade right>
          {" "}
          <h1>Galeri</h1>
          <Carousel responsive={GaleriResponsive} deviceType={deviceType}>
            {items?.map((item) => (
              <div key={item._id}>
                <CCardHeader>
                  {" "}
                  <CCardBody>
                    <h4 className="mb-3">
                      <strong>{item.judulKegiatan}</strong>
                    </h4>
                    <figure>
                      <img
                        style={{ width: "100%" }}
                        src={`https://ukmdb.herokuapp.com/` + item.imageUrl}
                        alt="Galeri"
                      ></img>
                    </figure>
                  </CCardBody>
                  <CCardFooter>
                    {/* <h5>Periode:{item.periode}</h5> */} {item.keterangan}
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
export default GaleriCarousel;
