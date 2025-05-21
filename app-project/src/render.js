// function for jokes 
function renderJoke(jokeData) 
// Using the app area to display jokes
{const app=document.getElementById('app');
  // like a placeholder
  let jokeContent = '';
// to show single line jokes. paragraph formatting
  if (jokeData.type ==='single') {
    jokeContent='<p>'+jokeData.joke+'</p>';
  }
// to show multiple line jokes and also have a reveal button for user to click for the punchline 
 if (jokeData.type === 'twopart') {
  jokeContent=`<p><strong>Setup:</strong> ${jokeData.setup}</p>
    <p id="punchline" style="display: none;"><strong>Punchline:</strong> ${jokeData.delivery}</p>
    <button id="revealPunchline" class="revealBttn">Reveal Punchline</button>
  `;
}

// title and button for seeing more jokes
  app.innerHTML=
    '<h1>Wanna Hear A Joke?</h1>'+ jokeContent+
    '<button id="getJoke">Another Joke</button>';


    // Need to locate 2 liner jokes, then reveal the hidden punchlines 
  const revealBttn = document.getElementById('revealPunchline');
  const punchline = document.getElementById('punchline');

// Check if joke is more than 1 line and to show the reveal bttn. reveal punchline bttn won't show for one liners/if already clicked
  if (revealBttn && punchline) {
    revealBttn.addEventListener('click', function () {
      punchline.style.display = 'block';
      revealBttn.style.display = 'none';
    });
  }
}
// function communication for other files
export { renderJoke };


