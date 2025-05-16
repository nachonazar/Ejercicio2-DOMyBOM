class Persona {
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
}

const formulario = document.getElementById("miFormulario");
const botones = document.getElementById("botones");
const resultado = document.getElementById("resultado");
let persona1 = null;

const mostrarBotones = (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const dni = document.getElementById("dni").value;
  const sexo = document.getElementById("sexo").value;
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;
  const nacimiento = parseInt(document.getElementById("anioNacimiento").value);

  persona1 = new Persona(nombre, edad, dni, sexo, peso, altura, nacimiento);

  botones.classList.remove("d-none");
  document.getElementById("resultado").textContent = "";
};

formulario.addEventListener("submit", mostrarBotones);

document
  .getElementById("btnMostrarGeneracion")
  .addEventListener("click", () => {
    if (persona1) {
      resultado.textContent = alert(persona1.mostrarGeneracion());
    }
  });
document
  .getElementById("btnesMayorDeEdad")
  .addEventListener("click", () => {
    if (persona1) {
      resultado.textContent = alert(persona1.esMayorDeEdad());
    }
  });
  document
  .getElementById("btnMostrarDatos")
  .addEventListener("click", () => {
    if (persona1) {
      resultado.textContent = alert(persona1.mostrarDatos());
    }
  });