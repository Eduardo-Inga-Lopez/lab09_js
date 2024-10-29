# Ejemplos de Funcionalidades en JavaScript

Este proyecto contiene ejemplos de funcionalidades en JavaScript que permiten interactuar con el usuario a través de la interfaz web. Los casos de uso incluyen cambio de color de fondo, validación de edad, confirmación de eliminación, búsqueda, ordenación y adición de productos a un carrito.

## Casos de Uso

```javascript
<script>

    // Caso 01: Cambio de colores
    // Solicita al usuario un color en inglés y cambia el color de fondo del sitio web.
    const colorDeFondo = prompt("Hola Usuario, por favor escribe un color en inglés:");

    // Verifica si el usuario ingresó un color y si no canceló el prompt
    if (colorDeFondo) {
        document.body.style.backgroundColor = colorDeFondo;
        console.log("Color aplicado:", colorDeFondo);
    } else {
        console.log("No se aplicó ningún color");
    }

    // Caso 02: Ingreso de edad
    // Solicita al usuario su edad y verifica que sea válida y mayor de 18.
    
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
    // Solicita confirmación al usuario antes de eliminar un pedido.

    const deseaEliminar = confirm("¿Estás seguro de que deseas eliminar el pedido?");

    if (deseaEliminar) {
        alert("El pedido ha sido eliminado.");
    } else {
        alert("Eliminación cancelada.");
    }

    // Caso 04: Buscar productos
    // Permite al usuario buscar un producto en una lista predeterminada.
    
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
    // Ordena alfabéticamente los productos y los muestra en una alerta.
    
    const productosOrdenados = [...productos].sort();
    
    alert(`Los productos ordenados alfabéticamente son: ${productosOrdenados.join(", ")}`);
    
    // Caso 06: Agregar productos al carrito
    // Permite al usuario agregar un producto al carrito.
    
    const carrito = [];
    
    const agregarProducto = prompt("Ingrese el nombre del producto a agregar al carrito:");
    
    if (agregarProducto) {
        carrito.push(agregarProducto);
        alert(`El producto "${agregarProducto}" ha sido agregado al carrito.`);
    } else {
        alert("No se agregó ningún producto al carrito.");
    }

</script>
