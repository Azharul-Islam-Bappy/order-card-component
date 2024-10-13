// Creating an E-commerse site.

let products = [{
  image: 'Images/harrypoter.jpg',
  name: 'Harrypoters Three books Together',
  price: '$' + 165,
},
{
  image: 'Images/silentpatient.jpg',
  name: 'The Silent Patient Book',
  price: '$' + 85,
},
{
  image: 'Images/htmlcss.jpg',
  name: 'HTML and CSS Book Together',
  price: '$' + 115,
}];

let productsHTML = ''; 

products.forEach((product) => {
    productsHTML += `
        <div class="books_container">
            <img  src=${product.image} width="150px"   class="books_image">
            
            <p id="harrypoters_data"  class="books_data">${product.name}</p>
            
            <p  class="price" >${product.price}</p>
            <button  class="order" data-product-book = "${product.name}">Order</button>
        </div>`;
});

document.querySelector('.js-HTML-container').innerHTML = productsHTML;