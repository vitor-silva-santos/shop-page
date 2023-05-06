import React from "react";
import {
  CategoryNav,
  HeaderBanner,
  NavBar,
  Parceiros,
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
        <ProductsList navProduct={"flex"} verTodos={"none"} />
        <Parceiros />
        <ProductsList />
      </main>
    </div>
  );
};

export default Home;
