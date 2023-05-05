import React, { useEffect, useState } from "react";

export const ProductsList = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
    )
      .then((response) => response.json())
      .then(setData);
  }, []);

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const item = data[key];
      setData(item);
    }
  }

  return (
    <section>
      <div>
        <span></span>
        <h2>Produtos relacionados</h2>
        <span></span>
      </div>

      <div className="carouselContainer">
        <button>{"<"}</button>
        <div className="carousel">
          {/* {data.map((produto) => console.log(produto.productName))} */}
        </div>
        {console.log(data)}
        <button>{">"}</button>
      </div>
    </section>
  );
};
