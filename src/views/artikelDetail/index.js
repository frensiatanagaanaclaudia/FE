import React from "react";

const ArtikelDetail = () => {
  const Header = React.lazy(() => import("../component/Header"));
  const Footer = React.lazy(() => import("../component/Footer"));

  return (
    <>
      <Header></Header>
      ArtikelDetail
      <Footer></Footer>
    </>
  );
};

export default ArtikelDetail;
