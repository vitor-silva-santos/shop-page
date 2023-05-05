import React from "react";

import "../../styles/categoryNav.scss";

import IconTech from "../../assets/icons/monitor-icon.png";
import IconMarket from "../../assets/icons/market-icon.png";
import IconDrink from "../../assets/icons/drink-icon.png";
import IconFerramenta from "../../assets/icons/ferramenta-icon.png";
import IconSaude from "../../assets/icons/saude-icon.png";
import IconSports from "../../assets/icons/sport-icon.png";
import IconModa from "../../assets/icons/moda-icon.png";

export const CategoryNav = () => {
  return (
    <aside className="containerCategoryNav">
      <div className="boxIten">
        <figure>
          <img src={IconTech} alt="icone de uma monitor, tablete e celular" />
        </figure>
        <p>Tecnologia</p>
      </div>

      <div className="boxIten">
        <figure>
          <img src={IconMarket} alt="icone de mercado" />
        </figure>
        <p>Supermercado</p>
      </div>

      <div className="boxIten">
        <figure>
          <img src={IconDrink} alt="icone de bebida" />
        </figure>
        <p>Bebidas</p>
      </div>

      <div className="boxIten">
        <figure>
          <img src={IconFerramenta} alt="icone de ferramentas" />
        </figure>
        <p>Ferramentas</p>
      </div>

      <div className="boxIten">
        <figure>
          <img src={IconSaude} alt="icone de um coração" />
        </figure>
        <p>Saúde</p>
      </div>

      <div className="boxIten">
        <figure>
          <img src={IconSports} alt="icone de uma pessoa correndo na esteira" />
        </figure>
        <p>Esportes e Fitness</p>
      </div>

      <div className="boxIten">
        <figure>
          <img
            src={IconModa}
            alt="icone de uma vestido, um diamante e um salto alto"
          />
        </figure>
        <p>Moda</p>
      </div>
    </aside>
  );
};
