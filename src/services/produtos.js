export const getProducts = async () => {
  const baseUrl =
    "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

  let response = [];

  try {
    response = await fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => data.products);
    return response;
  } catch (error) {
    console.log(error);
  }
};
