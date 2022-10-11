import React from "react";

const LandingPage = () => {
  const Header = React.lazy(() => import("../component/Header"));
  const Footer = React.lazy(() => import("../component/Footer"));

  return (
    <>
      <Header></Header>
      LandingPage
      <Footer></Footer>
    </>
  );
};

export default LandingPage;
