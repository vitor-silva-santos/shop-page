import React from "react";
import { HeaderBanner, NavBar } from "../../components";
import "../../styles/globalStyle.scss";

const Home = () => {
  return (
    <div className="containerHome">
      <NavBar />
      <HeaderBanner />
    </div>
  );
};

export default Home;
