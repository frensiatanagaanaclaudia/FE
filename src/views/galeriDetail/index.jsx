import React from "react";

const GaleriDetail = () => {
  const Header = React.lazy(() => import("../component/Header"));
  const Footer = React.lazy(() => import("../component/Footer"));

  return (
    <>
      <Header></Header>
      GaleriDetail
      <Footer></Footer>
    </>
  );
};

export default GaleriDetail;
