


// tipos de datos

let name = 78
console.log(typeof name)
console.log(parseFloat(name))










// function division (dividiendo, divisor)

// {
//     if (divisor == 0) {

//         return "La division por cero no es posible"


//     }
//     else {
//         return dividiendo / divisor

//     }

   

// }

// console.log(division(80, 5))



// const division1 = (diviendo, divisor) => {  diviendo/divisor} 

// console.log(division1(70, 2))













let booleano = false;


let array = [10, 20, 30];

let objeto = { clave: "valor" }; 

const date = new Date("2022-03-25");

let y = 123e5;    // 12300000

d = new Date();
console.log(d.getTime())


let numero = 42;
console.log(typeof (numero.toString()));        // "42"
console.log(String(booleano)); 

console.log(typeof (678 +""))// "false"
console.log(array + "");               // "10,20,30"
console.log(JSON.stringify(objeto))


// '{"clave":"valor"}'

// String literal

console.log(`El número es ${2 + 5}`); // "El número es 42"
let x = BigInt("123456789012345678901234567890");







// condicionales
let edad = 20;
if (edad < 18) {
    console.log("Menor de edad");
} else {
    console.log("Mayor de edad");
}





let dia = 2;
switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  default:
    console.log("Otro día");
}



let edad = 18

switch (edad) {
    case 12:
        console.log("Usted es un niño")
        break;
    case 18:
        console.log("ustes es un adolescente")
        break;
    case 65:
        console.log("Ustes es un adulto mayor")
        break;
}














// Ciclos
for (let i = 0; i < 5; i++) {
    console.log(i);
}






const frutas = ["manzana", "pera", "uva", 1];

let salpicon = ""
for (let fruta of frutas) {
    salpicon += fruta
    console.log(fruta)
    console.log(salpicon)
   
}
console.log(salpicon)


// Funciones

function saludar(nombre) {
    return `Hola, ${nombre}`;
}
console.log(saludar("Andrés"));


const sumar = (a, b) => a + b;
console.log(sumar(5, 3));







let global = "Casa es global";

function ejemplo() {
    let nuevaVariable = "Soy local";
    console.log(global); // Acceso permitido
    console.log(local); // Acceso permitido
}




console.log(nuevaVariable); // Error: local no está definido




const casaPropia = 'si'  //javascript
const casa_propia = 'si'  // pYTHON
const CasaPropia = 'j'


const camelCase = 67
const snake_case = 6
const PascalCase = "k"

const UPPERCASE = 'kkkaks'













// Estructuras de datos

let frutas1 = ["manzana", "pera", "uva"];
console.log(frutas1[0]); // "manzana"


frutas1.push("naranja"); // Agregar
frutas1.pop(); // Eliminar el último
frutas1.forEach(fruta => console.log(fruta)); // Iterar



let persona = {
    nombre: "Ana",
    edad: 25,
    saludar: function() {
        console.log(`Hola, soy ${this.nombre}`);
    }
};
persona.saludar(); // "Hola, soy Ana"


// Estructuras avanzadas
let mapa = new Map();
mapa.set("clave", "valor");
console.log(mapa.get("clave")); // "valor"


let conjunto = new Set([1, 2, 3, 3]);
console.log(conjunto); // {1, 2, 3}




// Numeros
let number = 13.89; // Número positivo
let binario = number.toString(2); // Convertir a binario
console.log(binario); // "1101"

let negativo = -13.67;
let binarioNegativo = (negativo >>> 0).toString(2); // Representación binaria con signo
console.log(binarioNegativo); // "11111111111111111111111111110011" (32 bits)

