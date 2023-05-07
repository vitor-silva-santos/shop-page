import React from "react";

import { Button } from "../../components/Button";
//Images
import LogosEconVtex from "../../assets/logoEconVtex.png";
import IconFace from "../../assets/icons/facebookIcon.png";
import IconInsta from "../../assets/icons/instagramIcon.png";
import IconYoutube from "../../assets/icons/youtubeIcon.png";
import CardVisa from "../../assets/cards/cardVisa.png";
import CardElo from "../../assets/cards/cardElo.png";
import CardAlelo from "../../assets/cards/cardAlelo.png";
import CardDiners from "../../assets/cards/cardDiners.png";
import CardIfood from "../../assets/cards/cardIfood.png";
import CardMasterCard from "../../assets/cards/cardMaster.png";
import CardPix from "../../assets/cards/cardPix.png";
import CardAmerican from "../../assets/cards/cardAmerican.png";
import CardTicket from "../../assets/cards/cardTicket.png";
import CardSodexo from "../../assets/cards/cardSodexo.png";

import "../../styles/footer.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="infoTop">
        <div className="sobre">
          <h3>Sobre nós</h3>
          <p>CONHEÇA</p>
          <p>COMO COMPRAR</p>
          <p>INDICAÇÃO E DESCONTO</p>

          <div className="boxRedeSocial">
            <img src={IconFace} alt="icone do Facebook" />
            <img src={IconInsta} alt="icone do Instagram" />
            <img src={IconYoutube} alt="icone do YouTube" />
          </div>
        </div>

        <div className="infoUteis">
          <h3>INFORMAÇÕES ÚTEIS</h3>
          <p>FALE CONOSCO</p>
          <p>DÚVIDAS</p>
          <p>PRAZOS DE ENTREGA</p>
          <p>FORMAS DE PAGAMENTO</p>
          <p>POlÍTICA DE PRIVACIDADE</p>
          <p>TROCAS E DEVOLUÇÕES</p>
        </div>

        <div className="formaPagamento">
          <h3>FORMAS DE PAGAMENTO</h3>
          <div className="logoCards">
            <figure>
              <img src={CardVisa} alt="logo cartão visa" />
            </figure>
            <figure>
              <img src={CardElo} alt="logo cartão elo" />
            </figure>
            <figure>
              <img src={CardAlelo} alt="logo cartão alelo" />
            </figure>
            <figure>
              <img src={CardDiners} alt="logo cartão diners" />
            </figure>
            <figure>
              <img src={CardIfood} alt="logo cartão ifood" />
            </figure>
            <figure>
              <img src={CardMasterCard} alt="logo cartão masterCard" />
            </figure>
            <figure>
              <img src={CardPix} alt="logo cartão pix" />
            </figure>
            <figure>
              <img src={CardAmerican} alt="logo cartão american" />
            </figure>
            <figure>
              <img src={CardTicket} alt="logo cartão ticket" />
            </figure>
            <figure>
              <img src={CardSodexo} alt="logo cartão sodexo" />
            </figure>
          </div>
        </div>

        <form className="boxForm">
          <h2>
            CADASTRE-SE E RECEBA NOSSAS <strong> NOVIDADES E PROMOÇÕES</strong>
          </h2>

          <p>
            Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia
            lorem ipsum
          </p>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="SEU E-MAIL"
            />
            <Button
              label="OK"
              width={62}
              height={45}
              radius={4}
              size={14}
              weight={700}
            />
          </div>
        </form>
      </div>

      <div className="infoBot">
        <p>
          Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas
          imagens são de propriedade de seus respectivos donos. <br />É vedada a
          reprodução, total ou parcial, de qualquer conteúdo sem expressa
          autorização.
        </p>
        <img src={LogosEconVtex} alt="Logo da empresa Econverse e VTEX" />
      </div>
    </footer>
  );
};
