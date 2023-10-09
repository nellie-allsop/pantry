// Create Recipe Object
// This will list 5 ingredients, the name and an image

function Recipe(name, items, imageUrl) {
  this.name = name;
  this.items = items;
  this.imageURL = imageUrl;
}

const recipeCards = [
  new Recipe(
    "Chicken Quesadillas",
    ["tortillas, chicken breast, cheddar cheese, salsa, sour cream"],
    "./PantryPet/pantry/images/Chicken-Quesadillas-7.jpg"
  ),
  new Recipe(
    "Pesto Chicken",
    ["pesto sauce, chicken breast, mozarella cheese, cherry tomatos, spinach"],
    "https://placehold.co/250"
  ),
  new Recipe(
    "Pesto Pasta",
    ["pasta, pesto sauce, cherry tomatos, parmesan cheese, pine nuts"],
    "https://placehold.co/250"
  ),
  new Recipe(
    "Spinach and Feta Stuffed Chicken",
    ["spinach, chicken breast, feta cheese, garlic, olive oil"],
    "https://placehold.co/250"
  ),
  new Recipe(
    "Black Bean Tacos",
    ["tortillas, black beans, lettuce, salsa, avocado"],
    "https://placehold.co/250"
  ),
  new Recipe(
    "Teriyaki Salmon",
    ["salmon fillets, teriyaki sauce, broccoli, rice, sesame seeds"],
    "https://placehold.co/250"
  ),
  new Recipe(
    "Beef Stir Fry",
    ["beef strips, teriyaki sauce, rice, peppers, broccoli"],
    "https://placehold.co/250"
  ),
  new Recipe(
    "Mushroom and Spinach Quesadillas",
    ["tortillas, mushrooms, spinach, salsa, cheddar cheese"],
    "https://placehold.co/250"
  ),
  new Recipe(
    "Beef and Bacon Burger",
    ["burgers, lettuce, cheddar cheese, bacon, red onion"],
    "https://placehold.co/250"
  ),
];
// Function to populate the recipe cards from the object
function populateRecipeCards() {
  const recipeList = document.getElementById("recipeList");

  recipeCards.forEach((recipe) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");

    // Display the recipe image, name and list - images do not show on the page these should be showing dynamiclly
    const image = document.createElement("img");
    image.src = recipe.imageUrl;
    image.alt = recipe.name;
    recipeDiv.appendChild(image);

    const recipeName = document.createElement("h3");
    recipeName.textContent = recipe.name;
    recipeDiv.appendChild(recipeName);

    const ingredientsList = document.createElement("ul");
    recipe.items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      ingredientsList.appendChild(listItem);
    });
    recipeDiv.appendChild(ingredientsList);

    recipeList.appendChild(recipeDiv);
  });
}

// Call the function to populate recipe cards
populateRecipeCards();

// store the items in local storage

localStorage.setItem("recipes", JSON.stringify(recipeCards));
