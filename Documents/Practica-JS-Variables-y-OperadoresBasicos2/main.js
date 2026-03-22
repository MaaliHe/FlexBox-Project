//práctica de variables y constantes así como la forma en que los veré en la consola del live server //

let nombre="Malinally";
let edad=39;

const sexo="Femenino";

console.log(nombre);
console.log(edad);
console.log(sexo);

//a continuación practicaré un error con una constante, ya que no se pueden reasignar valores a una constante, por lo tanto, el siguiente código me dará un error.//

// const ciudad="CDMX"; //
// ciudad="Guadalajara"; //

// console.log(ciudad); //

// operadores básicos //
//Matemáticos: suma, resta, multiplicación, división, módulo, incremento y decremento//

let x= 10; //aqui el " = " no es igualdad, es asignación de un valor a la variable x //

// operadores combinados // 

let y= 10;
y += 5; // x = x + 5 = 15
y -= 3; // x = x - 3 = 12
y *= 2; // x = x * 2 = 24
y /= 4; // x = x / 4 = 6
y %= 3; // x = x % 3 = 0        

// Operadores matemáticos // 

let precio = 100;
let descuento = 20;
let precioFinnal = precio - descuento; 
console.log("precioFinal"); // El precio final después del descuento es: 80

let esMayorDeEdad = true;
let TieneDinero = true; 
console.log(esMayorDeEdad && TieneDinero); // true
console.log(esMayorDeEdad || TieneDinero); // true

let resultado = 10 + 5 * 2;
console.log(resultado); // El resultado es: 20 por PRIORIDAD MATEMÁTICA//

let c = 5;
let d = "5";
console.log(c == d);
console.log(c === d);

// Condicionales: if, else, else if //

let años= 20;
if (años >= 18) {
    console.log("Puedes votar");
    }

let edad2= 16;
if (edad2 >= 18) {
    console.log("puede pasar");
} else {
    console.log("no puede pasar");
}

let nota = 85;

if (nota >= 90) {
    console.log("Aprobado con excelencia");
    } else if (nota >= 70) {
        console.log("aprobado");
    } else {
        console.log("reprobado");
    }

    let temperatura = 35;
    if (temperatura > 28) {
        console.log("hace mucho calor");
    } else {
                console.log("está templado");
    }

let numero = 7;
if (numero % 2 === 0) {
    console.log("es numero par");
} else {
    console.log("es numero impar");
}
let edad3 = 20;
let tieneIDoficial = false;
if (edad && tieneIDoficial) {
    console.log("puede pasar al Bar");
    } else {
        console.log("no puede pasar al bar");
    }

    // for ("inicialización, condición, ejecucción, incremento") //
    for (let i = 0; i < 5; i++) {
        console.log("estoy aprendiendo javascript");
    }

    for (let i=2; i < 6; i++){ // aqui, empezamos en dos, se imprime "i" desde el 2 hasta e 5 //
        console.log(i);
    }
    
