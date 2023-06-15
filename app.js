const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

getJokes();
jokeBtn.addEventListener('click', getJokes);


//1st way by using Fetch API functionality we are getting data.. Problem in fetch api is too much of using .then calls .. if it more then it will be messy.

// function getJokes() {
//     const config = {
//         headers: { "Accept": "application/json" }
//     }
//     fetch('https://icanhazdadjoke.com/', config)
//         .then(res => res.json())
//         .then(data => {
//             joke.innerHTML = data.joke;
//         });
// }

// Another way is using async/await

async function getJokes() {
    const config = {
        headers: { "Accept": "application/json" }
    }

    //storing response in a variable
    const res = await fetch('https://icanhazdadjoke.com/', config);
    const data = await res.json();
    joke.innerHTML = data.joke;
}