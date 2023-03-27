let productObject = {
  id: 2,
  productname: "Футболка Styssi черная оверсайз",
  description: "Премиум качество",
  price: 2790,
};

let id = document.getElementById("id");
let productname = document.getElementById("productname");
let description = document.getElementById("description");
let price = document.getElementById("price");

id.innerHTML = `ид: ${productObject.id}`;
productname.innerHTML = `название: ${productObject.productname}`;
description.innerHTML = `описание: ${productObject.description}`;
price.innerHTML = `цена: ${productObject.price}`;
