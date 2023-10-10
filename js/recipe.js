// Create Recipe Object
// This will list 5 ingredients, the name and an image

function Recipe(name, items, imageUrl) {
  this.name = name;
  this.items = items;
  this.imageUrl = imageUrl;
}

const recipeCards = [
  new Recipe(
    "Chicken Quesadillas",
    ["tortillas", "chicken breast", "cheddar cheese", "salsa", "sour cream"],
    "./images/Chicken-Quesadillas-7.jpg"
  ),
  new Recipe(
    "Pesto Chicken",
    [
      "pesto sauce",
      "chicken breast",
      "mozarella cheese",
      "cherry tomatoes",
      "spinach",
    ],
    "./images/chicken-pesto-recipe-9.jpg"
  ),
  new Recipe(
    "Pesto Pasta",
    ["pasta", "pesto sauce", "cherry tomatoes", "parmesan cheese", "pine nuts"],
    "./images/pesto-pasta-recipe.jpg"
  ),
  new Recipe(
    "Spinach and Feta Stuffed Chicken",
    ["spinach", "chicken breast", "feta cheese", "garlic", "olive oil"],
    "./images/stuffed-feta-chicken.jpg"
  ),
  new Recipe(
    "Black Bean Tacos",
    ["tortillas", "black beans", "lettuce", "salsa", "avocado"],
    "./images/crispy-black-bean-tacos_feat.jpg"
  ),
  new Recipe(
    "Teriyaki Salmon",
    ["salmon fillets", "teriyaki sauce", "broccoli", "rice", "sesame seeds"],
    "./images/teriyaki-salmon-1.jpg"
  ),
  new Recipe(
    "Beef Stir Fry",
    ["beef strips", "teriyaki sauce", "rice", "peppers", "broccoli"],
    "./images/quick-beef-stir-fry.jpg"
  ),
  new Recipe(
    "Mushroom and Spinach Quesadillas",
    ["tortillas", "mushrooms", "spinach", "salsa", "cheddar cheese"],
    "./images/Spinach-and-Mushroom-Quesadillas-stack.jpg"
  ),
  new Recipe(
    "Bacon Cheeseburger",
    ["burgers", "lettuce", "cheddar cheese", "bacon", "red onion"],
    "./images/Bacon Cheeseburger.jpg"
  ),
];
// populateRecipeCards();
// // Function to populate the recipe cards from the object
// function populateRecipeCards() {
//   const recipeList = document.getElementById("recipeList");

//   recipeCards.forEach((recipe) => {
//     const recipeDiv = document.createElement("div");
//     recipeDiv.classList.add("recipe");

//     // Display the recipe image, name and list
//     const image = document.createElement("img");
//     image.src = recipe.imageUrl;
//     image.alt = recipe.name;
//     recipeDiv.appendChild(image);

//     const recipeName = document.createElement("h3");
//     recipeName.textContent = recipe.name;
//     recipeDiv.appendChild(recipeName);

//     const ingredientsList = document.createElement("ul");
//     recipe.items.forEach((item) => {
//       // check if item is in Array of localstorage
//       // if (recipe.items === pantryList) {
//       const listItem = document.createElement("li");
//       listItem.textContent = item;
//       ingredientsList.appendChild(listItem);
//     });
//     recipeDiv.appendChild(ingredientsList);

//     recipeList.appendChild(recipeDiv);
//   });
// }
// populateRecipeCards();
// store the items in local storage

// Your existing Recipe and recipeCards array definitions...

function populateRecipeCards() {
  const recipeList = document.getElementById("recipeList");

  recipeCards.forEach((recipe) => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");

    const recipeCardInner = document.createElement("div");
    recipeCardInner.classList.add("recipe-card-inner");

    const recipeCardFront = document.createElement("div");
    recipeCardFront.classList.add("recipe-card-front");

    const image = document.createElement("img");
    image.src = recipe.imageUrl;
    image.alt = recipe.name;

    const recipeName = document.createElement("h3");
    recipeName.textContent = recipe.name;

    recipeCardFront.appendChild(image);
    recipeCardFront.appendChild(recipeName);

    const recipeCardBack = document.createElement("div");
    recipeCardBack.classList.add("recipe-card-back");

    const ingredientsList = document.createElement("ul");
    recipe.items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      ingredientsList.appendChild(listItem);
    });

    recipeCardBack.appendChild(ingredientsList);

    recipeCardInner.appendChild(recipeCardFront);
    recipeCardInner.appendChild(recipeCardBack);

    recipeCard.appendChild(recipeCardInner);

    recipeList.appendChild(recipeCard);
  });
}

populateRecipeCards();

localStorage.setItem("recipes", JSON.stringify(recipeCards));
