// comentario simple
/* comentarios extensos .... */

// Declaración de variables
var edad;

// Inicialización de variables
edad = 18;

// Se pueden declarar e inicializar variables en una sola línea
var num = 3;
num = 5;
console.log(num);

let casa = "lugar favorito";
casa = "+ChicasTec";
console.log(casa);

const lista = 100;
// lista = 120; error las variables de tipo const no pueden cambiar su valor
console.log(lista);

// TIPOS DE DATOS PRIMITIVOS
// Undefined: las varoables estan declaradas pero no inicializadas con ningun valor
var nota_ciencias;
console.log(typeof (nota_ciencias));

// Boolean
var luz = true; //false
console.log(typeof (luz));

// Number
var altura = 1.65;
console.log(typeof (altura));

// String
var parrafo = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";
console.log(typeof (parrafo));

var trabalengua = "Como quieres que te quiera" + "\nsi el que quiero que me quiera" + "\nno me quiere como quiero que me quiera";
console.log(trabalengua);

var nombre = "Arelly";
var apellido = "Machaca";
console.log(nombre + apellido);

var nombreabuelo = "Daniel"
var nombreabuela = "Pilar"
console.log(
  "El nombre de tu abuelo es: " + nombreabuelo + "\nEl nombre de tu abuela es: " + nombreabuela
);

var precio = 32;
var promocion = 1;
console.log("La promoción: " + promocion + " de producto, tiene un precio de: " + precio);