import React from "react";

//SCSS
import "../../styles/headerBanner.scss";

//Images
import Banner from "../../assets/banner-header.svg";
import { Button } from "../Button";

export const HeaderBanner = () => {
  return (
    <header className="containerHeader">
      <figure className="boxImage">
        <img
          src={Banner}
          alt="Imagem onde possui placas com descontos de 50% e 30%"
        />
      </figure>
      <div className="shadow"></div>
      <div className="content">
        <h1>Venha conhecer nossas promoções</h1>
        <h2>50% Off nos produtos</h2>
        <Button
          label="Ver produto"
          width={227}
          height={60}
          size={18}
          weight={600}
          radius={5}
        />
      </div>
    </header>
  );
};
