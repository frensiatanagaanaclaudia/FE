import { CSpinner } from "@coreui/react";
import React, { useEffect, useState } from "react";
import axios from "../../service/api";
import "react-multi-carousel/lib/styles.css";
const LandingPage = () => {
  const Header = React.lazy(() => import("../component/Header"));
  const Footer = React.lazy(() => import("../component/Footer"));
  const Hero = React.lazy(() => import("./Hero"));
  const GaleriCarousel = React.lazy(() => import("./GaleriCarousel"));
  const ArtikelCarousel = React.lazy(() => import("./ArtikelCarousel"));
  const [pageData, SetPageData] = useState([]);
  const [pageDataGaleri, SetPageDataGaleri] = useState([]);

  useEffect(() => {
    document.title = " UKM PMK || Home";
    async function getData() {
      try {
        let { data } = await axios.get("/artikel/read");
        SetPageData(data);
        // console.log(pageData)
        // console.log(data);
      } catch (err) {
        console.log(err.response.data);
      }
    }
    async function getDataGaleri() {
      try {
        let { data } = await axios.get("/galeri/read");
        SetPageDataGaleri(data);
        // console.log(data);
        // console.log(pageDataGaleri);
      } catch (err) {
        console.log(err.response.data);
      }
    }
    getData();
    getDataGaleri();
  }, []);
  return (
    <>
      <Header></Header>
      {!pageData ? (
        <CSpinner
          style={{ width: "4rem", height: "4rem" }}
          color="primary"
          variant="grow"
        />
      ) : (
        <Hero />
      )}
      <GaleriCarousel items={pageDataGaleri}></GaleriCarousel>
      <div>
        <ArtikelCarousel items={pageData}></ArtikelCarousel>
      </div>
      <Footer></Footer>
    </>
  );
};

export default LandingPage;
