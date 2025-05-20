
import './style.css';
import { renderJoke } from './render.js';


function getJokeFromAPI() {
  fetch('https://v2.jokeapi.dev/joke/Any')
    .then(function(response) {
      return response.json(); 
    })
    .then(function(data) {
      renderJoke(data);       
      addButtonClickListener(); 
    })
    .catch(function(error) {
      const app = document.getElementById('app');
      app.innerHTML = '<p>Oops! Could not load a joke right now.</p>';
      console.log(error); 
    });
}


function addButtonClickListener() {
  const button = document.getElementById('getJoke');
  if (button) {
    button.addEventListener('click', function() {
      getJokeFromAPI();
    });
  }
}


getJokeFromAPI();
