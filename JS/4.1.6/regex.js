// **1. Anclas**

// ^: Indica el inicio de un string
console.log(/^Hola/.test("Hola mundo")); // true
console.log(/^Hola/.test("Mundo Hola")); // false

// $: Indica el final de un string
console.log(/mundo$/.test("Hola mundo")); // true
console.log(/mundo$/.test("mundo Hola")); // false


// **2. Clases de caracteres**

// \d: Representa cualquier dígito (0-9)
console.log("abc123xyz".match(/\d+/)); // ["123"]

// \w: Representa cualquier carácter alfanumérico
console.log("Hola_mundo123".match(/\w+/g)); // ["Hola_mundo123"]

// \s: Representa cualquier espacio en blanco
console.log("Hola   mundo".match(/\s+/g)); // ["   "]

// .: Representa cualquier carácter excepto saltos de línea
console.log("Hola mundo".match(/H.*/)); // ["Hola mundo"]


// **3. Modificadores**

// g: Busca todas las coincidencias
console.log("123 y 456".match(/\d+/g)); // ["123", "456"]

// i: Ignora mayúsculas y minúsculas
console.log(/hola/i.test("Hola mundo")); // true

// m: Permite que ^ y $ funcionen en múltiples líneas
let texto = "Hola\nmundo";
console.log(/^mundo/m.test(texto)); // true


// **4. Cuantificadores**

// +: Coincide con uno o más
console.log("123".match(/\d+/)); // ["123"]

// *: Coincide con cero o más
console.log("bbb".match(/a*/g)); // ["", "", "", ""]

// ?: Coincide con cero o uno
console.log(/colou?r/.test("color")); // true
console.log(/colou?r/.test("colour")); // true

// {n}: Exactamente n repeticiones
console.log("123456".match(/\d{3}/)); // ["123"]

// {n,}: Al menos n repeticiones
console.log("123456".match(/\d{2,}/)); // ["123456"]

// {n,m}: Entre n y m repeticiones
console.log("123456".match(/\d{2,4}/)); // ["1234"]


// **5. Grupos y Alternancias**

// (): Agrupa expresiones
let match = "123-4567".match(/(\d{3})-(\d{4})/);
console.log(match[1]); // "123"
console.log(match[2]); // "4567"

// |: OR lógico
console.log(/gato|perro/.test("Tengo un perro")); // true


// **6. Límite de palabras**

// \b: Coincide con un límite de palabra
console.log(/\bJavaScript\b/.test("Amo JavaScript")); // true
console.log(/\bJavaScript\b/.test("Amo JavaScripting")); // false

// \B: Coincide con un no límite de palabra
console.log(/\Bcat/.test("bobcat")); // true
console.log(/\Bcat/.test("catnap")); // false





// 1. Verificar si un string contiene solo números
let regexNumeros = /^\d+$/;
console.log("Solo números:");
console.log(regexNumeros.test("12345")); // true
console.log(regexNumeros.test("abc123")); // false

// 2. Verificar si un email es válido
let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log("\nEmail válido:");
console.log(regexEmail.test("usuario@example.com")); // true
console.log(regexEmail.test("usuario@mal@correo.com")); // false

// 3. Extraer todas las palabras de un string
let regexPalabras = /\b\w+\b/g;
let textoPalabras = "Hola mundo, esto es JavaScript.";
console.log("\nPalabras extraídas:");
console.log(textoPalabras.match(regexPalabras)); // ["Hola", "mundo", "esto", "es", "JavaScript"]

// 4. Reemplazar múltiples espacios con uno solo
let regexEspacios = /\s+/g;
let textoEspacios = "Hola     mundo,   esto es     JavaScript.";
console.log("\nReemplazar múltiples espacios:");
console.log(textoEspacios.replace(regexEspacios, " ")); // "Hola mundo, esto es JavaScript."

// 5. Validar una fecha en formato dd/mm/yyyy
let regexFecha = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
console.log("\nFecha válida:");
console.log(regexFecha.test("15/08/2023")); // true
console.log(regexFecha.test("32/13/2023")); // false

// 6. Verificar si un string comienza con una palabra específica
let regexInicio = /^Hola/;
console.log("\nComienza con 'Hola':");
console.log(regexInicio.test("Hola mundo")); // true
console.log(regexInicio.test("Adiós mundo")); // false

// 7. Encontrar números dentro de un string
let regexNumerosTexto = /\d+/g;
let textoNumeros = "Hay 3 manzanas y 25 naranjas.";
console.log("\nNúmeros en el texto:");
console.log(textoNumeros.match(regexNumerosTexto)); // ["3", "25"]

// 8. Validar un número de teléfono (10 dígitos)
let regexTelefono = /^\d{10}$/;
console.log("\nNúmero de teléfono válido:");
console.log(regexTelefono.test("1234567890")); // true
console.log(regexTelefono.test("12345")); // false

// 9. Verificar si un string contiene solo letras
let regexSoloLetras = /^[a-zA-Z]+$/;
console.log("\nSolo letras:");
console.log(regexSoloLetras.test("JavaScript")); // true
console.log(regexSoloLetras.test("JavaScript123")); // false