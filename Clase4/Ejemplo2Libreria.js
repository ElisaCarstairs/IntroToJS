// Array para almacenar los libros leídos
let librosLeidos = [];

// Función para agregar un libro a la lista
function agregarLibro(titulo) {
    librosLeidos.push(titulo);
    console.log(`Libro agregado: ${titulo}`);
}

// Función para mostrar todos los libros leídos
function mostrarLibrosLeidos() {
    if (librosLeidos.length === 0) {
        console.log("Aún no has leído ningún libro.");
    } else {
        console.log("Libros leídos:");
        librosLeidos.forEach(libro => console.log(`- ${libro}`));
    }
}

// Ejemplo de uso
agregarLibro("Ciudad de Hueso"); // Cambiado por un libro de Cassandra Clare
agregarLibro("El Marciano");
mostrarLibrosLeidos();
