const animeIds = [27, 32, 45]; // Array of anime IDs you want to fetch
const baseUrl = 'https://api.jikan.moe/v4/anime/';

function fetchAnimeData(id) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${baseUrl}${id}`, true);

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      const data = JSON.parse(xhr.responseText);
      console.log(data); // Process the data as needed
    } else {
      console.log(`Failed to fetch data for ID: ${id}`);
    }
  };

  xhr.onerror = function () {
    console.log(`Network error occurred for ID: ${id}`);
  };

  xhr.send();
}

for (let id of animeIds) {
  fetchAnimeData(id);
}


      // Create a container div for each anime
      const animeContainer = document.createElement('div');
      animeContainer.classList.add('anime-container');

      // Create and append the title element
      const titleElement = document.createElement('h2');
      titleElement.textContent = responseText.data.title;
      animeContainer.appendChild(titleElement);

      // Create and append the description element
      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = responseText.data.synopsis;
      animeContainer.appendChild(descriptionElement);

      // Create and append the release date element
      const releaseDateElement = document.createElement('p');
      releaseDateElement.textContent = `Release Date: ${responseText.data.aired.string}`;
      animeContainer.appendChild(releaseDateElement);

      // Append the animeContainer to the body or a specific element
      document.body.appendChild(animeContainer);