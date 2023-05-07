import React from "react";

import Logo from "../../assets/logo-marcas.png";
import Arrow from "../../assets/arrowMarca.png";
import "../../styles/marcas.scss";

export const Marcas = () => {
  return (
    <section className="containerMarcas">
      <h2>Navegue por marcas</h2>
      <div className="carousel">
        <div>
          <img src={Logo} alt="logo das marcas" />
        </div>
        <div>
          <img src={Logo} alt="logo das marcas" />
        </div>
        <div>
          <img src={Logo} alt="logo das marcas" />
        </div>
        <div>
          <img src={Logo} alt="logo das marcas" />
        </div>
        <div>
          <img src={Logo} alt="logo das marcas" />
        </div>
        <button>
          <img src={Arrow} alt="botãode seta" />
        </button>
      </div>
    </section>
  );
};
