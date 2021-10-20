// let prodData;

const start = () => {
  console.log("app iniciada");
  // pegar o html como objeto
  // fazer o fetch do catálogo, filtros, entre outros
  // exibir dados do fetch no html
};

const fetchData = () => {
  const baseUrl = "http://makeup-api.herokuapp.com/api/v1/products.json";
  fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => {
      assembleItems(data);
    })
    .catch((e) => console.log(e));
  console.log("fetch data goes here");
};

const assembleItems = (fetchData) => {
  const app = document.getElementById("main");
  const module = document.createElement("section");
  const data = [...fetchData];
  data.map((d) => {});
  module.innerHTML = "testing";

  app.appendChild(module);
  console.log(`fetched data: ${data}`);
};

window.addEventListener("load", (e) => {
  start();
});
