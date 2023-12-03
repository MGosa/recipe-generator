function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 10,
  });
}

function recipeGenerator(event) {
  event.preventDefault();

  let instructionElement = document.querySelector("#user-instructions");

  let apiKey = `off12bea02cd1ft1f4f0c632ee3ca6b4`;
  let prompt = `generate a short and quick recipe, the recipe have to include ${instructionElement.value}`;
  let context = ` You are experienced home cook who specializes in quick and simple meals. Generate a recipe that has no more than 10 ingredients and will take no longer than 40 min to prepare. Display the recipre in HTML format.Do not include images `;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeForm = document.querySelector("#recipe-form");
recipeForm.addEventListener("submit", recipeGenerator);
