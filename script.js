// Simple interactive example
document.addEventListener("DOMContentLoaded", () => {
  const recipes = document.querySelectorAll(".recipe");

  recipes.forEach((recipe) => {
    recipe.addEventListener("click", () => {
      alert(`You clicked on: ${recipe.querySelector("h2").textContent}`);
    });
  });
});
