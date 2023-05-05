import React from "react";
import {
  CategoryNav,
  HeaderBanner,
  NavBar,
  ProductsList,
} from "../../components";
import "../../styles/globalStyle.scss";

const Home = () => {
  return (
    <div className="containerHome">
      <NavBar />
      <HeaderBanner />
      <main>
        <CategoryNav />
        <ProductsList />
      </main>
    </div>
  );
};

export default Home;
