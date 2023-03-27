let productObject = {
  id: 1,
  productname: "Худи Styssi",
  description: "Премиум качество",
  price: 4990,
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
