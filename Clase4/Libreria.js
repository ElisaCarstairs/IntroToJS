const readline = require("readline"); 

// Array para almacenar los libros leídos
let librosLeidos = [];

// LEE lo que se ingreas en la terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para agregar un libro
function agregarLibro() {
    rl.question("Ingresar título del libro (escribir 'SALIR' para finalizar): ", (titulo) => {
        if (titulo.toLowerCase() === "salir") {
            mostrarLibrosLeidos();
            rl.close();
        } else {
            librosLeidos.push(titulo);
            console.log(`Libro agregado: ${titulo}`);
            agregarLibro(); 
        }
    });
}

// Función para mostrar los libros leídos
function mostrarLibrosLeidos() {
    console.log("\nLibros leídos:");
    if (librosLeidos.length === 0) {
        console.log("Aún no has leído ningún libro.");
    } else {
        librosLeidos.forEach(libro => console.log(`- ${libro}`));
    }
}

// Iniciar la captura de libros
agregarLibro();
