function recipeGenerator(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: ".....",
    autoStart: true,
    cursor: "",
    delay: 10,
  });
}

let recipeForm = document.querySelector("#recipe-form");
recipeForm.addEventListener("submit", recipeGenerator);
