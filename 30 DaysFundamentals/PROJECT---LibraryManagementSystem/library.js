// Project --- Library Management System
// Console Version


class Book{
  constructor(title,author,numOfPages, source){
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.source = source;
  }
}

class Library{
  constructor() {
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
  }
  searchBook(query) {
    return this.books.filter(book => book.title.includes(query)  || book.author.includes(query));
  }
}

const library = new Library();
const book1 = new Book("Rich Dad Poor Dad","Robert Kiyosaki",243, "Photo/pH1.jpeg");
const book2 = new Book("The Psychology of Money", "Morgan Housel", 48, "Photo/psychologyOfMoney.jpeg");
const book3 = new Book("Life 3.0","Max Tegmark", NaN, "no-source");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);


const holder = document.querySelector(".holder");

function createHtmlElement(book) {
  const container = document.createElement("div");
  const img = document.createElement("img");
  const title = document.createElement('p');
  const author = document.createElement('p');
  
  img.src = book.source;
  title.innerText = book.title;
  author.innerText = book.author;
  
  img.classList.add("book-img");
  title.classList.add("book-title");
  author.classList.add("book-author");
  container.classList.add("book-container");
  
  
  container.appendChild(img);
  container.appendChild(title);
  container.appendChild(author);
  holder.appendChild(container);
  
}

library.books.forEach(book => {
  createHtmlElement(book);
});



function displayBook(filteredBooks) {
  holder.innerHTML = "";
  filteredBooks.forEach(book => {
    createHtmlElement(book);
  });
}

let input = document.querySelector(".search-books")

input.addEventListener("input", () => {
  const searchText = input.value.toLowerCase();
  
  const filteredBooks = library.books.filter(book => book.title.toLowerCase().includes(searchText) || book.author.toLowerCase().includes(searchText));
  if (filteredBooks.length === 0) {
    holder.innerHTML = "";
    holder.innerText = "Sorry, No books found! ";
    holder.id = "holder";
    return
  }
  displayBook(filteredBooks)
  
});