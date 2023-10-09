// Create Recipe Object
// This will list 5 ingredients, the name and an image

function Recipe(name, items, image) {
  this.name = name;
  this.items = items;
  this.image = image;
}

const recipeCards = [
  new Recipe(
    "Chicken Quesadillas",
    ["tortillas, chicken breast, cheddar cheese, salsa, sour cream"],
    "https://placehold.co/250"
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
    ["beef strips, teriyaki sauce, noodles, peppers, broccoli"],
    "https://placehold.co/250"
  ),
  new Recipe(
    "Mushroom and Spinach Quesadillas",
    ["tortillas, mushrooms, spinach, salsa, cheddar cheese"],
    "https://placehold.co/250"
  ),
  new Recipe(
    "Beef and Bacon Burger",
    ["burgers, lettuce, cheddar cheese, bacon, bbq sauce"],
    "https://placehold.co/250"
  ),
];

console.log(recipeCards);

// store the items in local storage

localStorage.setItem("recipes", JSON.stringify(recipeCards));

// Display Recipe as a list for now

// Toggle the items on and off based on the user data stored.
