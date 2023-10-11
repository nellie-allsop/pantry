"use strict";

const ingredientsForm = document.getElementById("ingredientsForm");

const ingredientName = document.getElementById("ingredientName");
const recipeForm = document.getElementById("recipeForm");
const recipeIngredients = document.getElementById("recipeIngredients");
let yourPantry = document.getElementById("yourPantry");

let pantryList = [];

// render list function, call outside

function populateList() {
  if (localStorage.getItem("ingredients")) {
    pantryList = JSON.parse(localStorage.getItem("ingredients"));

    for (let i = 0; i < pantryList.length; i++) {
      const li = document.createElement("li");
      li.textContent = pantryList[i];
      yourPantry.appendChild(li);
    }
  }
}

populateList();

function addIngredient(event) {
  event.preventDefault();
  let addedIngredient = event.target.ingredientName.value;
  pantryList.push(addedIngredient);

  localStorage.setItem("ingredients", JSON.stringify(pantryList));
  const ul = document.getElementById("ul");
  const li = document.createElement("li");
  li.textContent = addedIngredient;
  yourPantry.appendChild(li);
}

ingredientsForm.addEventListener("submit", addIngredient);

function addRecipeIngredient(event) {
  event.preventDefault();
  let addedIngredient = event.target.recipeIngredients.value;
  pantryList.push(addedIngredient);

  localStorage.setItem("ingredients", JSON.stringify(pantryList));
  const ul = document.getElementById("ul");
  const li = document.createElement("li");
  li.textContent = addedIngredient;
  yourPantry.appendChild(li);
}
recipeForm.addEventListener("submit", addRecipeIngredient);
