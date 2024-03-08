/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Jackson Heslop";
let currentYear = new Date().getFullYear();
let profilePicture = "images/heslop.jpg";


/* Step 3 - Element Variables */
let nameElement = document.getElementById("name");
let foodElement = document.getElementById("food");
let yearElement = document.querySelector("#year");
let imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */
let favoriteFoods = ["Pizza", "Spaghetti", "Nachos"];
foodElement.innerHTML = favoriteFoods;

// Add new food item to the end of the array
let newFoodItem = "Maultaschen";
favoriteFoods.push(newFoodItem);
foodElement.innerHTML += `<br>${favoriteFoods}`;

// Remove the first food item from the array 
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;

// Remove the last element from the favorite food array.
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;


