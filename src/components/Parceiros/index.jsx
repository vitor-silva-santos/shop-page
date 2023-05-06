import React from "react";

import ImageParceiros from "../../assets/image-parceiros.png";
import { Button } from "../Button";
import "../../styles/parceiros.scss";

export const Parceiros = () => {
  return (
    <section className="containerParceiros">
      <div>
        <figure className="boxImage">
          <img src={ImageParceiros} alt="Imagem da Empresa Parceira da Loja" />
        </figure>
        <div className="shadow"></div>
        <div className="content">
          <h3>Parceiros</h3>
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
          <img src={ImageParceiros} alt="Imagem da Empresa Parceira da Loja" />
        </figure>
        <div className="shadow"></div>
        <div className="content">
          <h3>Parceiros</h3>
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
