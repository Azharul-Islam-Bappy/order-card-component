let d = JSON.parse(localStorage.getItem("orders"));
let ordersContainer = document.querySelector(".order-container");
let ordersHTML = '';
let data = [];


d.forEach((product) => {
    ordersHTML += `
        <div class="books_container">
            <img  src=${product.image} width="150px"   class="books_image">
            
            <p class="books_data">${product.name}</p>
            
            <p  class="price" >${product.price}</p>
            
        </div>`;
});

ordersContainer.innerHTML = ordersHTML;