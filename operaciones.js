// Micro extra:
// 1. En la carpeta ya creada crear un nuevo archivo operaciones.js
// 2. En el archivo creado debes desarrollar un código para lograr efectuar operaciones aritméticas. Para ello, declarar dos variables, otorgando el nombre
// y los valores numéricos que consideres. Ejemplo: let numero1 = 16;
// 3. Usando el console.log() mostrar al usuario los resultados de las siguientes operaciones aritméticas, en función de los valores asignados a las variables:
// a. suma
// b. resta
// c. multiplicación
// d. división
// e. módulo
// f. ¿Cual de los valores es mayor? Si el valor es mayor, mostrará un valor
// boolean true. De lo contrario mostrará false
// g. ¿Cual de los valores es menor? Si el valor es menor mostrará un valor
// boolean true. De lo contrario mostrará false

let n1 = 2;
let n2 = 32;

//operacion aritmeticas

let suma = n1 + n2;
let resta = n1 - n2;
let multiplicacion = n1 * n2;
let division = n1 / n2;
let modulo = n1 % n2;


//si es mayor o menor con booleano

let esMayor = (n1 > n2);
let esMenor = (n1 < n2);

//mostrar por consola los resultados

console.log(`El resultado de la suma es: ${suma}`);
console.log(`El resultado de la resta es: ${resta}`);
console.log(`El resultado de la multiplicación es: ${multiplicacion}`);
console.log(`El resultado de la división es: ${division}`);
console.log(`El resultado del modulo es: ${modulo}`);
console.log(`El número ${n1} es mayor que el número ${n2}? = ${esMayor}`);
console.log(`El número ${n1} es menor que el número ${n2}? = ${esMenor}`);

