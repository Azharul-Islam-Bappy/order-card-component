
// Array for api url's id
const animeIDs = [1,27,20, 21, 40,99];
const baseURL = "https://api.jikan.moe/v4/anime/";
const mainContent = document.querySelector('.main-content');

// function to add class name 
function addClass(elem,className) {
  // elem should be an html element
  elem.classList.add(className);
}
function appendChild(parentElem,childElem) {
  parentElem.appendChild(childElem);
}

//  function to fetch anime data
function fetchData(id) {
  
  // set up an xhr instance
  const data = new XMLHttpRequest();
  
  // setting a request 
  data.open('GET', `${baseURL}${id}`,true);
  
  // code to execute when firing event
  data.onreadystatechange = () => {
    
    if (data.readyState === 4 && data.status === 200 )  {
      const responseText = JSON.parse(data.responseText);
      console.log(responseText.data.title,responseText);
      
      // creating html element to display data 
      const animeCard = document.createElement('div');
      const img = document.createElement('img');
      const title = document.createElement('h2');
      const description = document.createElement('p');
      const releaseDate = document.createElement('p');
      
      
      // adding class name to the elements
      addClass(animeCard,"anime-card");
      addClass(img,"anime-card-img");
      addClass(title,"anime-card-title");
      addClass(description,"anime-card-description");
      addClass(releaseDate,"anime-card-releaseDate");
      
      
      // adding content to the elements
      img.src = responseText.data.images.jpg.image_url;
      title.textContent = responseText.data.title;
      description.textContent = responseText.data.synopsis;
      releaseDate.textContent = responseText.data.aired.string;
      
      
      appendChild(animeCard,img);
      appendChild(animeCard,title);
      appendChild(animeCard,description);
      appendChild(animeCard,releaseDate);
      appendChild(mainContent,animeCard);
      
      
    }
    
    else if (data.readyState === 4 && data.status < 400) {
      console.log(JSON.parse(data.responseText));
      console.log("failed to fetch data");
      
    }
  }
  // sending the request
  data.send(null);
}

for (let id of animeIDs) {
  fetchData(id);
}
