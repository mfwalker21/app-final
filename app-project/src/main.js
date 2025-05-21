// importing css and JS for jokes to appear
import'./style.css';
import{renderJoke} from './render.js';

// Function needed to fetch jokes from the API with then and catch
function JokeFromAPI(){
  fetch('https://v2.jokeapi.dev/joke/Any')
    .then(function(response) {
      return response.json(); 
    })
    .then(function(data) {
      renderJoke(data);       
      addButtonClickListener(); 
    })
    .catch(function(error) {
      const app= document.getElementById('app');
      app.innerHTML = '<p>Darn, No More Jokes</p>';
      console.log(error); 
    });
}
// Will need button for user to click to get another joke
function addButtonClickListener(){
  const button = document.getElementById('getJoke');
  if (button) { button.addEventListener('click', function() {JokeFromAPI();
    });
  }
}
// immediately allows for a joke to appear
JokeFromAPI();
