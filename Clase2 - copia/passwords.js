const span = document.querySelector("#password");
const range = document.getElementById("length"); // Aquí es donde seleccionas el input con el id 'length'
const lengthValue = document.getElementById("lengthValue");

const uppercaseCheckbox = document.getElementById('uppercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');

// Muestra el valor de la longitud en tiempo real
range.addEventListener("input", () => {
    lengthValue.textContent = range.value;
});

const letters = "abcdefghijklmnopqrstuvwxyz";
const mayus = letters.toUpperCase();
const numbers = "0123456789";
const simbolos = "!@#$%&/()=?";

const genPass = () => {
    let allValues = letters;  // Comienza con las letras minúsculas

    if (uppercaseCheckbox.checked) { // Verifica si el checkbox de mayúsculas está marcado
        allValues += mayus;
    }

    if (numbersCheckbox.checked) { // Verifica si el checkbox de números está marcado
        allValues += numbers;
    }

    if (symbolsCheckbox.checked) { // Verifica si el checkbox de símbolos está marcado
        allValues += simbolos;
    }

    // Genera la contraseña
    let accumulatePass = "";
    for (let i = 0; i < range.value; i++) {
        const seed = Math.floor(Math.random() * allValues.length); // Elige un carácter aleatorio de allValues
        accumulatePass += allValues.charAt(seed);
    }

    span.innerText = accumulatePass; // Muestra la contraseña generada
    copyToClip(accumulatePass); // Copia la contraseña al portapapeles
}

function copyToClip(pass) {
    if (pass === '') return;
    navigator.clipboard.writeText(pass); // Copia la contraseña al portapapeles
}
