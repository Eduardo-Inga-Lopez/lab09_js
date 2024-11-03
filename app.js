/* /* //Caso 01: cambio de colores
const colorDeFondo = prompt("Hola Usuario, por favor escribe un color en inglés:");
        
// Verifica si el usuario ingresó un color y si no fue cancelado
if (colorDeFondo) {
    document.body.style.backgroundColor = colorDeFondo;
    console.log("Color aplicado:", colorDeFondo);
} else {
    console.log("No se aplicó ningún color");
}

// Caso 02: Ingreso de edad

// Guarda el valor ingresado en la variable 'edadIngresada'
const edadIngresada = prompt("Ingrese Edad: ");

// Convierte el valor ingresado a número
const edad = Number(edadIngresada);

// Verifica si la edad es un número válido y si es mayor o igual a 18
if (isNaN(edad) || edad < 18) {
    alert("Debes ingresar una edad válida.");
} else {
    alert(`Bienvenido! Tu edad es ${edad}.`);
}

// Caso 03: Eliminar pedido

const deseaEliminar = confirm("¿Estás seguro de que deseas eliminar el pedido?");

if (deseaEliminar) {
    alert("El pedido ha sido eliminado.");
} else {
    alert("Eliminación cancelada.");
}

// Caso 04: Buscar productos
const productoBuscado = prompt("Ingrese el nombre del producto a buscar:");

// Crea un array con los nombres de productos
const productos = ["Pepinillos", "Zanahoria", "Durazno", "Manzanas", "Berengena", "Brocoli"];

// Busca el producto en el array y muestra un mensaje con el resultado
const productoEncontrado = productos.includes(productoBuscado);

if (productoEncontrado) {
    alert(`El producto "${productoBuscado}" se encuentra en la lista.`);
} else {
    alert(`El producto "${productoBuscado}" no se encuentra en la lista.`);
}

// Caso 05: Ordenar productos
const productosOrdenados = [...productos].sort();

alert(`Los productos ordenados alfabéticamente son: ${productosOrdenados.join(", ")}`);

// Caso 06: Agregar productos al carrito
const carrito = [];

const agregarProducto = prompt("Ingrese el nombre del producto a agregar al carrito:");

if (agregarProducto) {
    carrito.push(agregarProducto);
    alert(`El producto "${agregarProducto}" ha sido agregado al carrito.`);
} else {
    alert("No se agregó ningún producto al carrito.");
} */



/* -------------------- Desarrollo Laboratorio 10: Arreglos y Control de Flujo  -------------------- */

// Funcion de cambio de colores
function changeBackgroundColor() {
    // Solicita al usuario que ingrese un color para el fondo de la página web
    const backgroundColor = prompt("Ingrese un color de fondo para la WEB");

    // Cambia el color de fondo de la página web al color ingresado por el usuario
    document.body.style.backgroundColor = backgroundColor;
}

changeBackgroundColor();



// Ingresar lista de hermanos

function registerBrothers() {
    // Solicita al usuario que ingrese la cantidad de hermanos y la convierte a un número
    const brothersQuantity = Number(prompt("Ingrese la cantidad de hermanos"));

    // Crea un arreglo vacío para almacenar los nombres de los hermanos
    const brothers = [];

    // Inicializa un contador en 0 para llevar el seguimiento del número de hermanos ingresados
    let counter = 0;

    // Bucle que se ejecuta hasta que el contador alcance la cantidad de hermanos ingresada
    while (counter < brothersQuantity) {
        // Solicita al usuario que ingrese el nombre de un hermano y lo almacena en 'brotherName'
        const brotherName = prompt("Ingrese el nombre de tu hermano " + counter);

        // Agrega el nombre ingresado al arreglo 'brothers'
        brothers.push(brotherName);

        // Incrementa el contador para avanzar al siguiente hermano
        counter++;
    }

    // Muestra en la consola el arreglo completo con los nombres de los hermanos ingresados
    console.log("Nombres de los hermanos:", brothers);
}


// Función para generar un color hexadecimal aleatorio

function generateRandomHexColor() {
    // Genera un número aleatorio entre 0 y 16777215 (equivalente a #FFFFFF)
    const randomColor = Math.floor(Math.random() * 16777215);

    // Convierte el número en una cadena hexadecimal y lo formatea con 6 caracteres
    return `#${randomColor.toString(16).padStart(6, '0')}`;
}

// Función para generar los bloques
function generateBlocks() {
    // Solicita al usuario la cantidad de bloques a generar y convierte a número
    const blocksNumber = Number(prompt("Ingrese la cantidad de bloques que desea dibujar"));

    let counter = 0;

    // Bucle para crear cada bloque
    while (counter < blocksNumber) {
        // Crea un nuevo elemento div
        const newDiv = document.createElement("div");

        // Configura el estilo del div (tamaño y color de fondo aleatorio)
        newDiv.style.width = "100px";
        newDiv.style.height = "100px";
        newDiv.style.backgroundColor = generateRandomHexColor();

        // Opcional: agrega un pequeño margen para separar los bloques
        newDiv.style.margin = "5px";
        newDiv.style.display = "inline-block";

        // Agrega el div al elemento <main> en la página
        document.querySelector("main").appendChild(newDiv);

        counter++; // Incrementa el contador para crear el siguiente bloque
    }
}

// Función para jugar el juego de piedra, papel, o tijera
function playRockPaperScissors() {
    // Opciones del juego
    const options = ["piedra", "papel", "tijera"];

    // Pide al usuario que elija una opción
    const userChoice = prompt("Elige una opción: piedra, papel o tijera").toLowerCase();

    // Verifica si la elección del usuario es válida
    if (!options.includes(userChoice)) {
        alert("Opción no válida. Por favor, elige entre 'piedra', 'papel' o 'tijera'.");
        return;
    }

    // Genera una elección aleatoria para la computadora
    const randomIndex = Math.floor(Math.random() * options.length);
    const computerChoice = options[randomIndex];

    // Muestra las elecciones del usuario y la computadora en una alerta
    alert(`Tu elección: ${userChoice}\nElección de la computadora: ${computerChoice}`);

    // Compara las elecciones y determina el resultado
    if (userChoice === computerChoice) {
        alert("¡Es un empate!");
    } else if (
        (userChoice === "piedra" && computerChoice === "tijera") ||
        (userChoice === "tijera" && computerChoice === "papel") ||
        (userChoice === "papel" && computerChoice === "piedra")
    ) {
        alert("¡Ganaste!");
    } else {
        alert("Perdiste. Intenta de nuevo.");
    }
}


// Calculadora de Edad

function calculateAge() {
    // Solicita al usuario su año de nacimiento
    const anioNacimiento = prompt("Por favor, ingresa tu año de nacimiento:");
    
    // Verifica si el usuario ingresó un valor válido
    if (anioNacimiento && !isNaN(anioNacimiento)) {
        // Obtiene el año actual
        const anioActual = new Date().getFullYear();
        // Calcula la edad restando el año de nacimiento del año actual
        const edad = anioActual - parseInt(anioNacimiento, 10);
        // Muestra el resultado en una ventana emergente (alert)
        alert(`Tienes ${edad} años`);
        return edad; // Devuelve la edad calculada
    } else {
        // Muestra un mensaje de error si el año ingresado no es válido
        alert("Por favor, ingresa un año válido.");
    }
}


// Conversor Celsius a Fahrenheit
function temperatureConverter() {
    // Solicita la temperatura en Celsius al usuario
    const celsius = prompt("Ingresa la temperatura en Celsius:");
    // Usa la fórmula de conversión
    const fahrenheit = (celsius * 9 / 5) + 32;
    // Muestra el resultado en una ventana emergente (alert)
    alert(`${celsius}°C son ${fahrenheit}°F`);
}


// Contador de Vocales

function VowelCounter() {
    // Solicita la palabra al usuario
    const palabra = prompt("Ingresa una palabra:");
    // Convierte la palabra a minúsculas para facilitar la comparación
    const minuscula = palabra.toLowerCase();
    // Define las vocales
    const vocales = "aeiou";
    let contador = 0;
    // Recorre cada letra de la palabra
    for (let letra of minuscula) {
        // Verifica si la letra es una vocal
        if (vocales.includes(letra)) {
            contador++; // Aumenta el contador si es vocal
        }
    }
    // Muestra el número de vocales en una ventana emergente (alert)
    alert(`La palabra "${palabra}" tiene ${contador} vocales`);
}



// Generador de Tablas de Multiplicar

function MultiplicationTableGenerator() {
    // Solicita el número al usuario
    const numero = prompt("Ingresa un número para ver su tabla de multiplicar:");
    let tabla = `Tabla de multiplicar del ${numero}:\n`;
    // Genera la tabla del 1 al 10
    for (let i = 1; i <= 10; i++) {
        tabla += `${numero} x ${i} = ${numero * i}\n`;
    }
    // Muestra la tabla completa en una ventana emergente (alert)
    alert(tabla);
}

