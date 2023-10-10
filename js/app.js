"use strict";

const ingredientsForm = document.getElementById("ingredientsForm");

const ingredientName = document.getElementById("ingredientName");

let pantryList = [];

if (localStorage.getItem("ingredients")) {
  pantryList = JSON.parse(localStorage.getItem("ingredients"));
}

function addIngredient(event) {
  event.preventDefault();
  let addedIngredient = event.target.ingredientName.value;
  pantryList.push(addedIngredient);

  localStorage.setItem("ingredients", JSON.stringify(pantryList));
}

ingredientsForm.addEventListener("submit", addIngredient);
