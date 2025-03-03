// Declaramos el arreglo de frutas
const frutas = ['manzana', 'plátano', 'manzana', 'naranja', 'plátano', 'manzana', 'uva', 'naranja', 'mango', 'uva', 'manzana', 'kiwi', 'kiwi', 'kiwi', 'kiwi'];

// Objeto para almacenar la cantidad de cada tipo de fruta
const contadorFrutas = {};

// Usando un bucle for para contar las frutas
for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];
    if (contadorFrutas[fruta]) {
        contadorFrutas[fruta]++;
    } else {
        contadorFrutas[fruta] = 1;
    }
}

console.log("Conteo usando For:", contadorFrutas);

const contadorFrutasW = {}; //Reiniciamos el valor del contador de frutas

let i = 0;
while (i < frutas.length) {
    let fruta = frutas[i];
    if (contadorFrutasW[fruta]) {
        contadorFrutasW[fruta]++; // Si ya existe, suma 1
    } else {
        contadorFrutasW[fruta] = 1; // Si no existe, inicializa en 1
    }    
    i++;
}

console.log("Conteo usando While:", contadorFrutasW);