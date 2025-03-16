//Manipulación del DOM con javascript

//Sintaxis


//Suponiendo que queremos modificar la sección  <h2>Últimas recetas</h2> del archivo index.html
//Element = document.childNodes[1].childNodes[2].childNodes[4];
//console.log(Element);

// Espera a que cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.getElementById('form-comentario');
    const listaComentarios = document.getElementById('lista-comentarios');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que se recargue la página al enviar el formulario

        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if (nombre === "" || mensaje === "") {
            alert("Por favor completa todos los campos.");
            return;
        }

        // Crear un nuevo elemento de comentario
        const nuevoComentario = document.createElement('div');
        nuevoComentario.classList.add('comentario');

        nuevoComentario.innerHTML = `
            <strong>${nombre}</strong>
            <p>${mensaje}</p>
        `;

        // Agregar el nuevo comentario a la lista
        listaComentarios.appendChild(nuevoComentario);

        // Limpiar el formulario
        form.reset();
    });

});
