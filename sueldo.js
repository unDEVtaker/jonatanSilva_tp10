// Micro desafío 2:
// 1. En la carpeta ya creada crear un el archivo sueldo.js
// 2. En el archivo se desarrolla un código para calcular el nuevo sueldo a un
// trabajador, para ello debes declarar las siguientes variables y almacenar en ellas
// los siguientes datos del trabajador:
// a. nombre
// b. apellido
// c. sueldoActual
// d. porcentajeAumento
// 3. Almacenar en una variable el “calculoAumento”. Esta contendrá el resultado de
// la operación del aumento del trabajador (sueldoActual * porcentajeAumento)/
// 100).
// 4. En otra variable “nuevoSueldo”, almacena el resultado del cálculo del nuevo
// sueldo.
// 5. Usando el console.log() y concatenando string, muestra en la consola de Visual
// Studio Code los contenidos de cada una de las variables:

// Hola, estimad@ Fulano Mengano
// En base a su sueldo actual: $20000
// Ha recibido un aumento del 25%: $5000
// y su nuevo sueldo es de: $25000

let nombre = "Fulano";
let apellido = "Mengano";
let sueldoActual = 20000;
let porcentajeAumento = 25;

//3. variabble para calcular aumento
let calculoAumento = (sueldoActual * porcentajeAumento) / 100;

//4. variable para calcular nuevo sueldo
let nuevoSueldo = sueldoActual + calculoAumento;

//5. Mostrar por consola
console.log(`Hola, estimad@ ${nombre} ${apellido}`);
console.log(`En base a su sueldo actual: $${sueldoActual}`);
console.log(`Ha recibido un aumento del ${porcentajeAumento}%: $${calculoAumento}`);
console.log(`Y su nuevo sueldo es de: $${nuevoSueldo}`);