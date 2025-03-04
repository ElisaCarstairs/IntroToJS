const libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    year: 1967,
    estado: "disponible",
    capitulos: ["Capítulo 1", "Capítulo 2", "Capítulo 3"],
  
    // Método para describir el libro
    describirLibro() {
      console.log(
        `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.year}, el estado es: ${this.estado}.`
      );
    },
  
    // Método para agregar un capítulo
    agregarCapitulo(capitulo) {
      this.capitulos.push(capitulo);
      console.log(`Capítulo "${capitulo}" agregado.`);
    },
  
    // Método para eliminar un capítulo
    eliminarCapitulo(capitulo) {
      const indice = this.capitulos.indexOf(capitulo);
      if (indice !== -1) {
        this.capitulos.splice(indice, 1);
        console.log(`Capítulo "${capitulo}" eliminado.`);
      } else {
        console.log(`El capítulo "${capitulo}" no se encontró.`);
      }
    }
  };
  
  // 🔹 Uso del objeto
  libro.describirLibro(); // Muestra la información del libro
  libro.agregarCapitulo("Capítulo 4"); // Agrega un nuevo capítulo
  libro.eliminarCapitulo("Capítulo 2"); // Elimina un capítulo existente
  
  console.log(libro.capitulos); // Muestra la lista actualizada de capítulos
  