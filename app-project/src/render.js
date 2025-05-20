
function renderJoke(jokeData) {
 
  const app = document.getElementById('app');

  let jokeHTML = '';

  if (jokeData.type === 'single') {
    jokeHTML = '<p>' + jokeData.joke + '</p>';
  }

  if (jokeData.type === 'twopart') {
    jokeHTML =
      '<p><strong>Setup:</strong> ' + jokeData.setup + '</p>' +
      '<p><strong>Punchline:</strong> ' + jokeData.delivery + '</p>';
  }

  app.innerHTML =
    '<h1>Random Joke Generator</h1>' +
    jokeHTML +
    '<button id="getJoke">Get Another Joke</button>';
}

export { renderJoke };