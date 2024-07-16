//comentario de una linea

/*comentario de varias lineas*/

//! rojo
//? azul
//todo naranja
//* verde clarito


//creando una variable y asignando un valor a la variable
let nombre;
nombre = "Antonio";

//crear y asignar un valor a una variable 
let apellido = "Silveira"; //!string

//puedo tambien declarar otro valor a la variable porque es una variable 
apellido = "Borges";

//variable que no podemos redefinir por ser constante

const anodeNacimiento = 1998;

//anodeNacimiento = 1998; //!incorrecto, no se puede reasignar un valor a una constante


let a111; //! las variables no pueden ser un numero, necesitan una letra anes 

//? **************************************************** */
//? **************************************************** */
//? **************************************************** */
//? **************************************************** */
//? **************************************************** */
//? **************************************************** */
//? **************************************************** */


let num1 = 3;
let num2 = 5;

let suma = num1 + num2; 

// console.log(suma)


let nombreCompleto = nombre + " " + apellido;
// console.log("hola, soy " + nombreCompleto + ". mi ano de nacimiento es: " + anodeNacimiento);


// let nombreUsuario = prompt( "ingresa tu nombre");
// console.log("El nombre de usuario es: " + nombreUsuario);


// let numero1 = parseInt(prompt("ingresa el primer numero"));
// let numero2 =  parseInt(prompt("ingresa el segundo numero"));

// console.log(numero1 + numero2);

// alert("la suma es: " + (numero1 + numero2));

// console.log( numero1 + numero2); //! tenemos que usar "parseInt" para hacer que funcione la operacion
// console.log(parseInt(numero1) + parseInt(numero2)); //? para no tener un chorizo de codigo, anidamos el prompt en un parseInt

// let entrada = prompt("ingresa una letra"); //? ponerle nombre significativo a las variables "entrada" y "salida"
// let salida  =  entrada + " ingresada"

// alert(salida);

// console.log(parseFloat(5.5)); //! permite usar numeros decimales "parseInt"no permite!.

console.log( Number("5.52"))