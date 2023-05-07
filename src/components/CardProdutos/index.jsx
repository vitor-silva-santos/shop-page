import React from "react";

import Image from "../../assets/image-parceiros.png";
import { Button } from "../Button";
import "../../styles/cardProdutos.scss";

export const CardProducts = () => {
  return (
    <section className="containerProdutos">
      <div>
        <figure className="boxImage">
          <img src={Image} alt="Imagem da Empresa Parceira da Loja" />
        </figure>
        <div className="shadow"></div>
        <div className="content">
          <h3>Produtos</h3>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <Button
            label="CONFIRA"
            width={131}
            height={48}
            size={16}
            weight={900}
            radius={10}
          />
        </div>
      </div>

      <div>
        <figure className="boxImage">
          <img src={Image} alt="Imagem da Empresa Parceira da Loja" />
        </figure>
        <div className="shadow"></div>
        <div className="content">
          <h3>Produtos</h3>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <Button
            label="CONFIRA"
            width={131}
            height={48}
            size={16}
            weight={900}
            radius={10}
          />
        </div>
      </div>
    </section>
  );
};
