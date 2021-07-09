// DOM - Document Object Model References
const btn = document.querySelector(".btn");
const joke = document.querySelector("#item-2");

// Fetch API
const getJoke = () => {
  joke.innerHTML = "Loading Your Joke...";
  const setHeader = {
    headers: {
      Accept: "application/json",
    },
  };
  fetch("https://icanhazdadjoke.com/", setHeader)
    .then((response) => response.json())
    .then((data) => {
      joke.innerHTML = data.joke;
    })
    .catch((error) => alert(error));
};

btn.addEventListener("click", getJoke);
