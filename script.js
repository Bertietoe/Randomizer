// Array of random cellmates
let cellmates = [
  "Murderin' Mike",
  "Stealin' Steve",
  "Pickpocket Pete",
  "Fraudulent Fiona",
  "Smuggler Sam",
  "Dangerous Debbie",
  "Johnson Jon",
  "Heistin' Harry",
  "Counterfeit Carla"
];

// Function to generate a random cellmate
function generate() {
  let nameInput = document.getElementById("nameInput").value; // Get the user's name input
  let outputDiv = document.getElementById("output"); // Get the output div element

  if (!nameInput) {
    outputDiv.textContent = "Please enter your name!"; // Prompt if no name is entered
    return;
  }

  let randomCellmate = cellmates[Math.floor(Math.random() * cellmates.length)]; // Pick a random cellmate
  outputDiv.textContent = `${nameInput}, your jail cellmate would be: ${randomCellmate}!`; // Display the assigned cellmate
}

// Function to apply random styles to the output text
function restyle() {
  let outputDiv = document.getElementById("output"); // Get the output div element

  // Arrays for random style options
  let colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#FFD133"];
  let fonts = ["Arial", "Verdana", "Georgia", "Courier New", "Tahoma"];
  let sizes = ["1.5em", "2em", "2.5em", "1.8em", "2.2em"];

  // Apply random styles
  outputDiv.style.color = colors[Math.floor(Math.random() * colors.length)];
  outputDiv.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
  outputDiv.style.fontSize = sizes[Math.floor(Math.random() * sizes.length)];
}
