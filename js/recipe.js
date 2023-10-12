// Create Recipe Object
// This will list 5 ingredients, the name and an image

function Recipe(name, items, imageUrl, method) {
	this.name = name;
	this.items = items;
	this.imageUrl = imageUrl;
	this.method = method;
}

const recipeCards = [
	new Recipe(
		"Chicken Quesadillas",
		["Tortillas", "Chicken breast", "Cheddar Cheese", "Salsa", "Sour cream"],
		"./images/Chicken-Quesadillas-7.jpg",
		"This is how you need to make this amazing bit of grub!  Chuck it all in the magic bowl, mix it up, cook it in a hot thing and eat it!!!"
	),
	new Recipe(
		"Pesto Chicken",
		[
			"Pesto Sauce",
			"Chicken Breast",
			"Mozarella Cheese",
			"Cherry Tomatoes",
			"Spinach",
		],
		"./images/chicken-pesto-recipe-9.jpg",
		"This is how you need to make this amazing bit of grub!  Chuck it all in the magic bowl, mix it up, cook it in a hot thing and eat it!!!"
	),
	new Recipe(
		"Pesto Pasta",
		["Pasta", "Pesto Sauce", "Cherry Tomatoes", "Parmesan Cheese", "Pine Nuts"],
		"./images/pesto-pasta-recipe.jpg",
		"This is how you need to make this amazing bit of grub!  Chuck it all in the magic bowl, mix it up, cook it in a hot thing and eat it!!!"
	),
	new Recipe(
		"Spinach and Feta Stuffed Chicken",
		["Spinach", "Chicken Breast", "Feta Cheese", "Garlic", "Olive Oil"],
		"./images/stuffed-feta-chicken.jpg",
		"This is how you need to make this amazing bit of grub!  Chuck it all in the magic bowl, mix it up, cook it in a hot thing and eat it!!!"
	),
	new Recipe(
		"Black Bean Tacos",
		["Tortillas", "Black Beans", "Lettuce", "Salsa", "Avocado"],
		"./images/crispy-black-bean-tacos_feat.jpg",
		"This is how you need to make this amazing bit of grub!  Chuck it all in the magic bowl, mix it up, cook it in a hot thing and eat it!!!"
	),
	new Recipe(
		"Teriyaki Salmon",
		["Salmon Fillets", "Teriyaki Sauce", "Broccoli", "Rice", "Sesame Seeds"],
		"./images/teriyaki-salmon-1.jpg",
		"This is how you need to make this amazing bit of grub!  Chuck it all in the magic bowl, mix it up, cook it in a hot thing and eat it!!!"
	),
	new Recipe(
		"Beef Stir Fry",
		["Beef Strips", "Teriyaki Sauce", "Rice", "Peppers", "Broccoli"],
		"./images/quick-beef-stir-fry.jpg",
		"This is how you need to make this amazing bit of grub!  Chuck it all in the magic bowl, mix it up, cook it in a hot thing and eat it!!!"
	),
	new Recipe(
		"Mushroom and Spinach Quesadillas",
		["Tortillas", "Mushrooms", "Spinach", "Salsa", "Cheddar Cheese"],
		"./images/Spinach-and-Mushroom-Quesadillas-stack.jpg",
		"This is how you need to make this amazing bit of grub!  Chuck it all in the magic bowl, mix it up, cook it in a hot thing and eat it!!!"
	),
	new Recipe(
		"Bacon Cheeseburger",
		["Burgers", "Lettuce", "Cheddar Cheese", "Bacon", "Red Onion"],
		"./images/Bacon Cheeseburger.jpg",
		"This is how you need to make this amazing bit of grub!  Chuck it all in the magic bowl, mix it up, cook it in a hot thing and eat it!!!"
	),
];

const pantryItems = JSON.parse(localStorage.getItem("ingredients")) || [];

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

			// Check if the item is in the pantry
			if (!pantryItems.includes(item)) {
				listItem.style.color = "#540B0B"; // Add color or another way of doing through text maybe a stretch goal MVP this is enough for now?
			}

			ingredientsList.appendChild(listItem);
		});

		const methodParagraph = document.createElement("p");
		methodParagraph.textContent = recipe.method;

		recipeCardBack.appendChild(ingredientsList);
		recipeCardBack.appendChild(methodParagraph);

		recipeCardInner.appendChild(recipeCardFront);
		recipeCardInner.appendChild(recipeCardBack);

		recipeCard.appendChild(recipeCardInner);

		recipeList.appendChild(recipeCard);
	});
}

populateRecipeCards();

localStorage.setItem("recipes", JSON.stringify(recipeCards));
