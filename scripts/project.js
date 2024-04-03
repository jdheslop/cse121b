/* W05: Programming Tasks */

/* Declare and initialize global variables */
const jokesElement = document.querySelector("#jokes");
let jokeList = [];

/* async getJokes Function using fetch()*/
const getJokes = async (jokeList) => {
    reset();

    // Get user input
    let numberOfJokes = parseInt(document.querySelector("#numberInput").value);
    let category = document.querySelector("#filtered").value;

    if (numberOfJokes >= 1 && numberOfJokes <= 3) {
        
        // Generate introduction paragraph
        let intro = document.createElement("p");
        if (numberOfJokes === 1) {
            intro.innerHTML = `Here is ${numberOfJokes} joke. The category is ${category}.`;
        } else {
            intro.innerHTML = `Here are ${numberOfJokes} jokes. The category is ${category}.`;
        };
        jokesElement.appendChild(intro);

        // Fetch jokes according to the the numberOfJokes entry.
        for (let i = 0; i < numberOfJokes; i++) {
            const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
            const data = await response.json();
            jokeList.push(data);
          };

        // Display the jokes
        displayJokes(jokeList);
        
    } else {
        let paragraph = document.createElement("p");
        paragraph.innerHTML = `You entered ${numberOfJokes}. Please enter a value between 1 and 3 and try again.`;
        jokesElement.appendChild(paragraph);
    };
}; 

/* async displayJokes Function */
const displayJokes = async (jokes) => {
    jokes.forEach((joke) => {
        let paragraph = document.createElement("p");
        paragraph.innerHTML = joke.value;
        
        jokesElement.appendChild(paragraph);
    });
};

/* reset Function */
const reset = () => {
    let paragraphs = jokesElement.querySelectorAll("p");
    paragraphs.forEach((p) => {
        p.parentNode.removeChild(p);
    });
    jokeList.length = 0;
}

/* Event Listener */
document.querySelector("#submit").addEventListener("click", () => {getJokes(jokeList)});
