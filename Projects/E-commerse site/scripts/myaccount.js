// Creating a multi page website

let orders = JSON.parse(localStorage.getItem("orders"))  ||[];
let orderButton = document.querySelectorAll('button');

orderButton.forEach( (product) => {
  product.addEventListener("click", () => {
    let bookOrder = product.dataset.productBook;
    
    for (let i = 0; i<products.length; i++) {
      if (bookOrder === products[i].name) {
        orders.push(products[i]); // storing the order inside an array in the order.js file
        
      }
    }
    localStorage.setItem("orders", JSON.stringify(orders));
  });
});
