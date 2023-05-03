import React from "react";

//Images
import IconSeguro from "../../assets/icons/seguro-icon.png";
import IconTruck from "../../assets/icons/truck-icon.png";
import IconCard from "../../assets/icons/card-icon.png";
import IconLupa from "../../assets/icons/lupa-icon.svg";
import IconBox from "../../assets/icons/box-icon.svg";
import IconCoracao from "../../assets/icons/coracao-icon.svg";
import IconUser from "../../assets/icons/user-icon.svg";
import IconCart from "../../assets/icons/cart-icon.svg";
import IconCoroa from "../../assets/icons/icon-coroa.png";
import Logo from "../../assets/logo-vtex.png";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <img src={IconSeguro} alt="icone de compra segura" />
          <p>
            Compra <span>100% segura</span>
          </p>
        </li>
        <li>
          <img src={IconTruck} alt="icone de frete grátis" />
          <p>
            <span>Frete grátis</span> acima de R$ 200
          </p>
        </li>
        <li>
          <img src={IconCard} alt="icone de cartão" />
          <p>
            <span>Parcele</span> suas comprar
          </p>
        </li>
      </ul>

      <div>
        <img
          src={Logo}
          alt="logo da VTEX onde é uma seta em rosa apontada na diagonal e ao lado escrito VTEX"
        />
        <div>
          <input type="text" name="buscar" id="buscar" />
          <button>
            <img src={IconLupa} alt="icone da lupa" />
          </button>
        </div>
        <div>
          <button>
            <img src={IconBox} alt="icone de caixa" />
          </button>
          <button>
            <img src={IconCoracao} alt="icone de coração" />
          </button>
          <button>
            <img src={IconUser} alt="icone de usuario" />
          </button>
          <button>
            <img src={IconCart} alt="icone de carrinho de compra" />
          </button>
        </div>
      </div>

      <ul>
        <li>TODAS CATEGORIAS</li>
        <li>SUPERMERCADO</li>
        <li>LIVRO</li>
        <li>MODA</li>
        <li>LANÇAMENTO</li>
        <li>OFERTAS DO DIA</li>
        <li>
          <img src={IconCoroa} alt="icone de coroa" />
          ASSINATURA
        </li>
      </ul>
    </nav>
  );
};
