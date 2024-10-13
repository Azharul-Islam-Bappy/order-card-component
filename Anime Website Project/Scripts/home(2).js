// Array for API URL's id
const animeIDs = [1, 27, 20, 21, 34, 99];
const animeIDsTwo = [3,5,7,9,11,13,15,17,19,500,102];
const baseURL = "https://api.jikan.moe/v4/anime/";
const mainContent = document.querySelector('.main-content');

// Function to add class name
function addClass(elem, className) {
    elem.classList.add(className);
}

// Function to append a child element
function appendChild(parentElem, childElem) {
    parentElem.appendChild(childElem);
}

// Function to toggle description between truncated and full view
function toggleDescription(descriptionElem, toggleLink) {
    if (descriptionElem.classList.contains('expanded')) {
        descriptionElem.classList.remove('expanded');
        toggleLink.textContent = "See more...";
    } else {
        descriptionElem.classList.add('expanded');
        toggleLink.textContent = "See less...";
    }
}


// Function to fetch anime data
function fetchData(id) {

    // Set up an XHR instance
    const data = new XMLHttpRequest();

    // Setting a request
    data.open('GET', `${baseURL}${id}`, true);

    // Code to execute when firing event
    data.onreadystatechange = () => {

        if (data.readyState === 4 && data.status === 200) {
            const responseText = JSON.parse(data.responseText);
            console.log(responseText.data.title, responseText);

            // Creating HTML elements to display data
            const animeCard = document.createElement('div');
            const img = document.createElement('img');
            const title = document.createElement('h2');
            const description = document.createElement('p');
            const releaseDate = document.createElement('p');
            const toggleLink = document.createElement('a');

            // Adding class names to the elements
            addClass(animeCard, "anime-card");
            addClass(img, "anime-card-img");
            addClass(title, "anime-card-title");
            addClass(description, "anime-card-description");
            addClass(releaseDate, "anime-card-releaseDate");
            addClass(toggleLink, "read-more");

            // Adding content to the elements
            img.src = responseText.data.images.jpg.image_url;
            title.textContent = responseText.data.title;
            description.textContent = responseText.data.synopsis;
            releaseDate.textContent = responseText.data.aired.string;
            toggleLink.textContent = "See more...";

            // Set up event listener for the toggle link
            toggleLink.href = "#";
            toggleLink.onclick = () => {
                toggleDescription(description, toggleLink);
                return false; // Prevent the default link behavior
            };

            // Append the elements to the card
            appendChild(animeCard, img);
            appendChild(animeCard, title);
            appendChild(animeCard, description);
            appendChild(animeCard, toggleLink);
            appendChild(animeCard, releaseDate);
            appendChild(mainContent, animeCard);
        } else if (data.readyState === 4 && data.status < 400) {
            console.log(JSON.parse(data.responseText));
            console.log("Failed to fetch data");
        }
    };

    // Sending the request
    data.send(null);
}

// Fetch data for each anime ID
for (let id of animeIDs) {
    fetchData(id);
}
for (let id of animeIDsTwo) {
    fetchData(id);
}
