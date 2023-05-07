import React, { useEffect, useState, useRef } from "react";
// import Modal from "react-modal";

import { getProducts } from "../../services/produtos";
import { formatCurrency } from "../../utils/formatCurrency";
import Arrow from "../../assets/arrow.png";
import "../../styles/productList.scss";
import { Button } from "../Button";

// Modal.setAppElement("#root");

function Modal({ handleClose, show, children }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button className="btnCloseModal" onClick={handleClose}>
          &#10006;
        </button>
      </section>
    </div>
  );
}

export const ProductsList = ({ navProduct, verTodos }) => {
  const [produtos, setProdutos] = useState([]);
  const [showModal, setShowModal] = useState(null);
  const carousel = useRef(null);

  const handleShowModal = (index) => {
    setShowModal(index);
  };

  const handleCloseModal = () => {
    setShowModal(null);
  };

  async function fetchProdutos() {
    const data = await getProducts();
    setProdutos(data);
  }

  useEffect(() => {
    fetchProdutos();
  }, []);

  const moveCarouselRight = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth - 646;
  };

  const moveCarouselLeft = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth - 646;
  };

  return (
    <section className="containerProducts">
      <div className="title">
        <span></span>
        <h2>Produtos relacionados</h2>
        <span></span>
      </div>

      <div className="navProducts" style={{ display: navProduct }}>
        <div>CELULAR</div>
        <div>ACESSÓRIOS</div>
        <div>TABLETS</div>
        <div>NOTEBOOKS</div>
        <div>TVS</div>
        <div>VER TODOS</div>
      </div>

      <h3 style={{ display: verTodos }}>Ver mais</h3>

      <div className="carouselContainer">
        <button className="arrowButton" onClick={moveCarouselLeft}>
          <img src={Arrow} alt="seta para esquerda" />
        </button>
        <div className="carousel" ref={carousel}>
          {produtos.map((produto, index) => (
            <div className="item" key={index}>
              <figure>
                <img src={produto.photo} alt={produto.productName} />
              </figure>
              <div className="infoProduct">
                <p className="name">{produto.productName}</p>
                <p className="oldPrice">
                  {formatCurrency(produto.price + 1500)}
                </p>
                <p className="price">{formatCurrency(produto.price)}</p>
                <p className="parcelas">
                  ou 2x de {formatCurrency(produto.price / 2)} sem juros
                </p>
                <p className="frete">Frete grátis</p>
              </div>
              <Button
                label="COMPRAR"
                width={245}
                height={44}
                size={14}
                weight={700}
                radius={4}
                onClick={() => handleShowModal(index)}
              />
            </div>
          ))}
        </div>
        <button className="arrowButton" onClick={moveCarouselRight}>
          <img className="arrowRight" src={Arrow} alt="seta para direita" />
        </button>
      </div>
      {showModal !== null && (
        <Modal show={true} handleClose={handleCloseModal}>
          <div className="shadowBox">
            <div className="containerModal">
              <img
                src={produtos[showModal].photo}
                alt={produtos[showModal].productName}
              />
              <div>
                <h2>{produtos[showModal].productName}</h2>
                <h3>{formatCurrency(produtos[showModal].price)}</h3>
                <p>{produtos[showModal].descriptionShort}</p>
                <button>Veja mais detalhe do produto {">"}</button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
