const ApiKey = "3440d5dfff934b3423fac58530b1";


const jokeId = document.getElementById("joke")
const btnId  = document.getElementById("btn")


async function getJoke(){

    const ApiURL = "https://hindi-jokes-api.onrender.com/jokes/2?api_key=3440d5dfff934b3423fac58530b1"

    jokeId.innerText = "Loading..."
    btnId.disabled = true;
    const respons = await fetch(ApiURL)
    const data = await respons.json()
    const joke = data.data[0].jokeContent

    btnId.disabled = false;
    jokeId.innerText = joke

}

btnId.addEventListener("click", getJoke)

