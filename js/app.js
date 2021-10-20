// let prodData;

const start = () => {
  fetchData();
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
  const data = [...fetchData];
  data.map((d) => {
    createItem(d);
  });

  //   console.log(`fetched data: ${data}`);
};

const createItem = (d) => {
  const img = document.createElement("img");
  img.src = d.image_link;
  img.alt = d.description;

  const fig = document.createElement("figure");
  fig.className = "product-image";
  fig.appendChild(img);

  const productName = document.createElement("h2");
  productName.innerText = d.name;
  productName.className = "product-name";

  const brand = document.createElement("span");
  brand.innerText = d.brand;
  brand.className = "product-brand";

  const price = document.createElement("span");
  price.innerText = d.price;
  price.className = "product-price";

  const product = document.createElement("section");
  product.className = "product";
  product.id = d.id;

  product.appendChild(fig);
  product.appendChild(productName);
  product.appendChild(brand);
  product.appendChild(price);

  const app = document.getElementById("main");
  app.appendChild(product);
};

window.addEventListener("load", (e) => {
  start();
});
