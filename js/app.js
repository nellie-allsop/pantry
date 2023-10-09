"use strict";

const ingredientsForm = document.getElementById("ingredientsForm");

const ingredientName = document.getElementById("ingredientName");

let pantryList = [];
// if there is something in ls

const ingredientsLS = JSON.parse(localStorage.getItem(pantryList));
if (localStorage.getItem("ingredients") === null) {
	pantryList = JSON.parse(localStorage.getItem("ingredients"));
	// localStorage.setItem("ingredients", ingredientsLS);
	// set pantryList to be ingredientsLS
}

function addIngredient(event) {
	event.preventDefault();
	let addedIngredient = event.target.ingredientName.value;
	pantryList.push(addedIngredient);

	// put the pantryList array into local storage
	localStorage.setItem("ingredients", JSON.stringify(pantryList));
}

ingredientsForm.addEventListener("submit", addIngredient);

// localStorage.setItem("ingredients", JSON.stringify(pantryList));

// const ingredientsLS = JSON.parse(localStorage.getItem("pantryList"));

console.log(pantryList);

// function addIngredientToLS() {
// const ingredientsStringified = JSON.stringify(pantryList);
