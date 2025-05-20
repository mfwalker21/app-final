function renderJoke(jokeData) { const app = document.getElementById('app');
  let jokeContent = '';

  if (jokeData.type ==='single') {
    jokeContent='<p>'+jokeData.joke+'</p>';
  }

 if (jokeData.type === 'twopart') {
  jokeContent=`<p><strong>Setup:</strong> ${jokeData.setup}</p>
    <p id="punchline" style="display: none;"><strong>Punchline:</strong> ${jokeData.delivery}</p>
    <button id="revealPunchline" class="revealBttn">Reveal Punchline</button>
  `;
}

  app.innerHTML=
    '<h1>Wanna Hear A Joke?</h1>'+ jokeContent+
    '<button id="getJoke">Another Joke</button>';

  const revealBttn = document.getElementById('revealPunchline');
  const punchline = document.getElementById('punchline');

  if (revealBttn && punchline) {
    revealBttn.addEventListener('click', function () {
      punchline.style.display = 'block';
      revealBttn.style.display = 'none';
    });
  }
}
export { renderJoke };


