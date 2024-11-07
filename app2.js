// FUNCIONES REUTILIZABLES
function isValidColor(color) {
  const hexPattern = /^#([0-9A-Fa-f]{3}){1,2}$/;
  const rgbPattern = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;
  const tempElement = document.createElement("div");
  tempElement.style.color = color;
  return (
    hexPattern.test(color) ||
    rgbPattern.test(color) ||
    tempElement.style.color !== ""
  );
}

/* ------------------ Variables para Buscar Elementos ------------------- */

const inputColor = document.getElementById("input-color");
const btnChangeColor = document.getElementById("btn-change-color");
const inputRegisterBrothers = document.getElementById("input-register-brothers");
const inputRegisterBlocks = document.getElementById("input-register-blocks");
const brothersContainer = document.getElementById("brothers-container");
const gameArea = document.getElementById("game-area");



/* -------------------- Función para Cambiar Color  -------------------- */

function generateRandomHexColor() {
  const randomColor = Math.floor(Math.random() * 16777215);
  return `#${randomColor.toString(16).padStart(6, "0")}`;
}

btnChangeColor.addEventListener("click", function () {
  const color = inputColor.value;
  // Verificar si el color es válido
  if (isValidColor(color)) {
    document.body.style.backgroundColor = color;
    gameArea.innerHTML = ""; // Limpiar mensajes anteriores si el color es válido
  } else {
    // Mostrar mensaje de error si el color no es válido
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "El color ingresado no es válido. Por favor, ingrese un color válido.";
    errorMessage.style.color = "red";
    gameArea.innerHTML = ""; // Limpiar mensajes anteriores
    gameArea.appendChild(errorMessage);
  }
});


/* ----------------- Función para Registrar Hermanos --------------- */

function registerBrothers() {
  const brotherQuantity = Number(inputRegisterBrothers.value);

  const brothers = [];

  let counter = 0;

  while (counter < brotherQuantity) {
    const newDiv = document.createElement("div"); // <div></div>
    // crear un input
    const newInput = document.createElement("input"); // <input />
    newInput.placeholder = "Ingresa el nombre de tu hermano " + counter;
    newInput.type = "text";
    newInput.id = "input-name-" + counter;
    newInput.classList.add("input-brother-name");

    newDiv.appendChild(newInput); // <div> <input /> </div>

    brothersContainer.appendChild(newDiv);

    counter++;
  }

  // AGREGAMOS UN BOTON PARA IMPRIMIR LA LISTA DE HERMANOS
  const newButton = document.createElement("button");
  newButton.textContent = "Imprimir nombres";

  newButton.addEventListener("click", function () {
    // BUSCAR POR CLASE UNA LISTA DE ELEMENTOS
    const inputs = document.querySelectorAll(".input-brother-name");
    // COMO RECORREMOS UNA LISTA?
    for (let input of inputs) {
      const newP = document.createElement("p");
      newP.textContent = input.value;

      gameArea.appendChild(newP);
    }
  });

  brothersContainer.appendChild(newButton);

  console.log(brothers);
}

/* -------------------- Función para Crear Bloques -------------------- */

// Función para generar los bloques dentro de game-area
function generateBlocks() {
  // Tomar el número de bloques del input en lugar de prompt
  const blocksNumber = Number(inputRegisterBlocks.value);

  // Verificar si el número de bloques es válido
  if (isNaN(blocksNumber) || blocksNumber <= 0) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent =
      "Por favor, ingrese un número válido de bloques.";
    errorMessage.style.color = "red";
    gameArea.innerHTML = ""; // Limpiar mensajes anteriores
    gameArea.appendChild(errorMessage);
    return;
  }

  gameArea.innerHTML = ""; // Limpiar bloques previos

  let counter = 0;
  while (counter < blocksNumber) {
    const newDiv = document.createElement("div");
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.backgroundColor = generateRandomHexColor();
    newDiv.style.margin = "5px";
    newDiv.style.display = "inline-block";
    gameArea.appendChild(newDiv); // Agregar al game-area
    counter++;
  }
}

// Función para limpiar los bloques en game-area
function clearBlocks() {
  gameArea.innerHTML = ""; // Elimina todos los hijos dentro de game-area

  // Limpia el campo de entrada de los bloques
  const inputChoice = document.getElementById("input-register-blocks");
  if (inputChoice) {
    inputChoice.value = ""; // Limpia el valor del input
  }
}


/* ------------------ Función para Juego Yanquenpo ----------------- */

function playRockPaperScissors() {
  // Opciones del juego
  const options = ["piedra", "papel", "tijera"];

  // Obtén la elección del usuario desde el input
  const userChoice = document
    .getElementById("input-user-choice")
    .value.toLowerCase();

  // Verifica si la elección del usuario es válida
  if (!options.includes(userChoice)) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent =
      "Opción no válida. Por favor, elige entre 'piedra', 'papel' o 'tijera'.";
    errorMessage.style.color = "red";
    gameArea.innerHTML = ""; // Limpia cualquier mensaje anterior
    gameArea.appendChild(errorMessage);
    return;
  }

  // Genera una elección aleatoria para la computadora
  const randomIndex = Math.floor(Math.random() * options.length);
  const computerChoice = options[randomIndex];

  // Determina el resultado
  let resultMessage = "";
  let resultClass = "";

  if (userChoice === computerChoice) {
    resultMessage = `Tu elección: ${userChoice}\nElección de la computadora: ${computerChoice}\n¡Es un empate!`;
    resultClass = "result-draw";
  } else if (
    (userChoice === "piedra" && computerChoice === "tijera") ||
    (userChoice === "tijera" && computerChoice === "papel") ||
    (userChoice === "papel" && computerChoice === "piedra")
  ) {
    resultMessage = `Tu elección: ${userChoice}\nElección de la computadora: ${computerChoice}\n¡Ganaste!`;
    resultClass = "result-win";
  } else {
    resultMessage = `Tu elección: ${userChoice}\nElección de la computadora: ${computerChoice}\nPerdiste. Intenta de nuevo.`;
    resultClass = "result-lose";
  }

  // Limpia el área de juego y muestra el resultado
  gameArea.innerHTML = ""; // Limpia cualquier resultado anterior

  // Crear un nuevo elemento <p> para el resultado
  const resultElement = document.createElement("p");
  resultElement.textContent = resultMessage;
  resultElement.classList.add("result", resultClass);

  // Agrega el resultado al área de juego
  gameArea.appendChild(resultElement);
}

// Agrega estilos para los mensajes de resultado
const style = document.createElement("style");
style.innerHTML = `
  .result-win { color: green; }
  .result-lose { color: red; }
  .result-draw { color: gray; }
`;
document.head.appendChild(style);

// Función para limpiar en el game-area
function clearRockPaperScissors() {
  gameArea.innerHTML = ""; // Elimina todos los hijos dentro de game-area

  // Limpia el campo de entrada del juego Yanquenpo
  const inputChoice = document.getElementById("input-user-choice"); // Reemplaza con el ID de tu campo input
  if (inputChoice) {
    inputChoice.value = ""; // Limpia el valor del input
  }
}
/* -------------------------------------------------------------------------- */