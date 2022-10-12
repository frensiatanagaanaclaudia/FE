
import { CSpinner } from "@coreui/react";
import React, { useEffect, useState } from "react";
import axios from "../../service/api"
import "react-multi-carousel/lib/styles.css";
const LandingPage = () => {
  const Header = React.lazy(() => import("../component/Header"));
  const Footer = React.lazy(() => import("../component/Footer"));
  const Hero = React.lazy(() => import("./Hero"));
  const GaleriCarousel = React.lazy(() => import("./GaleriCarousel"));
  const ArtikelCarousel = React.lazy(() => import("./ArtikelCarousel"));
  const [pageData,SetPageData]= useState([])

  useEffect(()=>{
    document.title = " UKM PMK || Home";
    async function getData(){
      try{
        let {data}=await axios.get('/client')
        SetPageData(data)
        console.log(data)
      }catch(err){
        console.log(err.response.data)
      }
    }
    getData()
  },[])
  return (
    <>
      <Header></Header>
      {!pageData ? (
  <CSpinner style={{width:'4rem',height:'4rem'}}
  color="primary"
  variant="grow"/>
):<Hero
// ={pageData.Galeri
// }
/>}<GaleriCarousel></GaleriCarousel>
<ArtikelCarousel></ArtikelCarousel>
      
      <Footer></Footer>
    </>
  );
};

export default LandingPage;
