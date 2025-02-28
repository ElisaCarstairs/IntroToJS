// Declaramos el arreglo de frutas
const frutas = ['manzana', 'plátano', 'manzana', 'naranja', 'plátano', 'manzana', 'uva', 'naranja', 'uva', 'manzana'];

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

console.log("Conteo usando for:", contadorFrutas);

// Reiniciar el objeto para el siguiente conteo
const contadorFrutasWhile = {};

// Usando un bucle while para contar las frutas
let index = 0;
while (index < frutas.length) {
    let fruta = frutas[index];
    if (contadorFrutasWhile[fruta]) {
        contadorFrutasWhile[fruta]++;
    } else {
        contadorFrutasWhile[fruta] = 1;
    }
    index++;
}

console.log("Conteo usando while:", contadorFrutasWhile);
