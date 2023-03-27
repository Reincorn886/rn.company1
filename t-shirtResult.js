let productObject = {
  id: 2,
  productname: "Футболка Styssi черная оверсайз",
  description: "Премиум качество",
  price: 2790,
};

function getResult() {
  let result = document.getElementById("result");
  result.innerHTML = ` id - ${productObject.id} 
      </br> 
      productname -${productObject.productname} 
      </br> 
      description - ${productObject.description} 
      </br>
      price - ${productObject.price}`;
}
getResult();
