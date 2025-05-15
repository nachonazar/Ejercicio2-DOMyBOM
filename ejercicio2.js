/*class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, nacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.nacimiento = nacimiento;
  }

  mostrarGeneracion() {
    if (this.nacimiento >= 2011 && this.nacimiento <= 2025) {
      return "Generación Alfa - Rasgo: Hiperconectividad 🤯";
    } else if (this.nacimiento >= 1994 && this.nacimiento <= 2010) {
      return "Generación Z - Rasgo: Irreverencia 😛";
    } else if (this.nacimiento >= 1981 && this.nacimiento <= 1993) {
      return "Generación Y (millennials) - Rasgo: Frustración 😟";
    } else if (this.nacimiento >= 1969 && this.nacimiento <= 1980) {
      return "Generación X - Rasgo: Obsesión por el éxito 😤";
    } else if (this.nacimiento >= 1949 && this.nacimiento <= 1968) {
      return "Baby Boom - Rasgo: Ambición 😎";
    } else if (this.nacimiento >= 1930 && this.nacimiento <= 1948) {
      return "Silent Generation - Rasgo: Austeridad 😐";
    } else {
      return "Generación no registrada 🤷‍♂️";
    }
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      return "Es mayor de edad";
    } else {
      return "No es mayor de edad";
    }
  }

  mostrarDatos() {
    return `Nombre: ${this.nombre}, Edad: ${this.edad}, DNI: ${this.dni}, Sexo: ${this.sexo}, Peso: ${this.peso}, Altura: ${this.altura}, Año de nacimiento: ${this.nacimiento}`;
  }

  generaDNI() {
    this.dni = Math.floor(Math.random() * 90000000) + 10000000;
  }
}

const nombre = prompt("Ingrese su nombre");
const edad = prompt("Ingrese su edad");
const sexo = prompt("Ingrese su sexo");
const peso = prompt("Ingrese su peso");
const altura = prompt("Ingrese su altura");
const nacimiento = prompt("Ingrese su nacimiento");

const persona1 = new Persona(
  nombre,
  edad,
  null,
  sexo,
  peso,
  altura,
  nacimiento
);

persona1.generaDNI();

document.writeln(persona1.mostrarDatos());
document.writeln(persona1.mostrarGeneracion());
document.writeln(persona1.esMayorDeEdad());*/

const mostrarBotones = (e) => {
  e.preventDefault();
  const botones = document.getElementById("botones");
  botones.classList.remove("d-none");
};

const formulario = document.getElementById("miFormulario");
formulario.addEventListener("submit", mostrarBotones);
