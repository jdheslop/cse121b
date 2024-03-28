/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = async (temples) => {
    temples.forEach((temple) => {
        let article = document.createElement("article");
        
        let h3 = document.createElement("h3");
        h3.innerHTML = temple.templeName;

        let image = document.createElement("img");
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", temple.location);

        article.appendChild(h3);
        article.appendChild(image);

        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const data = await response.json();
    templeList = data;
    displayTemples(templeList);
}; 

/* reset Function */
const reset = () => {
    let articles = templesElement.querySelectorAll("article");
    articles.forEach((article) => {
        article.parentNode.removeChild(article);
    });
}

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    let filter = document.querySelector("#filtered").value;

    switch (filter) {
        case "utah":
            displayTemples(temples.filter(item => item.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(item => !item.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(item => new Date(item.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(templeList);
            break;
        default:
            displayTemples(templeList);
    }
};

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList)});
