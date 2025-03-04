const persona = {

    nombre: "Juan",
  
    edad: 30,
  
    ocupacion: "Desarrollador"
  
  };

  console.log(persona);
  
const coche = new Object();

coche.marca = "Toyota";
  
coche.modelo = "Corolla";
  
coche.año = 2020;

console.log(coche)


class Animal {

    constructor(especie, sonido) {
  
      this.especie = especie;
  
      this.sonido = sonido;
  
    }
  
    hacerSonido() {
  
      console.log(this.sonido);
  
    }
  
  }
  
  const perro = new Animal("Perro", "Guau");

  