import React from "react";
import {
  CardProducts,
  CategoryNav,
  Footer,
  HeaderBanner,
  Marcas,
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
        <CardProducts />
        <Marcas />
        <ProductsList />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
