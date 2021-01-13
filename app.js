const textJoke = document.querySelector('#textJoke');
const getJokeBtn = document.querySelector('#getJokeBtn');

getJokeBtn.addEventListener('click', jokeBtn);

async function jokeBtn(e) {
  let respond = await fetch(`https://icanhazdadjoke.com/`, {
    headers: {
      Accept: 'application/json',
    },
  });
  let joke = await respond.json();
  console.log(joke);

  e.preventDefault();
}
