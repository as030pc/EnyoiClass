// Metodos de array

// Crear un array
let numeros = [1, 2, 3, 4, 5];

// 1. push() - Agrega uno o más elementos al final del array
numeros.push(6); // [1, 2, 3, 4, 5, 6]
console.log("Después de push:", numeros);

// 2. pop() - Elimina el último elemento del array
let ultimo = numeros.pop(); // 6
console.log("Después de pop:", numeros);
console.log("Elemento eliminado:", ultimo);

// 3. shift() - Elimina el primer elemento del array
let primero = numeros.shift(); // 1
console.log("Después de shift:", numeros);
console.log("Elemento eliminado:", primero);

// 4. unshift() - Agrega uno o más elementos al principio del array
numeros.unshift(0); // [0, 2, 3, 4, 5]
console.log("Después de unshift:", numeros);

// 5. splice() - Modifica el array eliminando o reemplazando elementos
// Elimina 2 elementos a partir del índice 1 y agrega 10 y 20
numeros.splice(1, 2, 10, 20); // [0, 10, 20, 4, 5]
console.log("Después de splice:", numeros);

// 6. slice() - Crea un nuevo array con una porción del array original
let subArray = numeros.slice(1, 3); // [10, 20]
console.log("Resultado de slice:", subArray);

// 7. forEach() - Ejecuta una función en cada elemento del array
numeros.forEach(function(num, index) {
  console.log(`Elemento en el índice ${index}: ${num}`);
});

// 8. map() - Crea un nuevo array con los resultados de aplicar una función a cada elemento
let duplicados = numeros.map(num => num * 2); // [0, 20, 40, 8, 10]
console.log("Resultado de map:", duplicados);

// 9. filter() - Crea un nuevo array con los elementos que pasen una condición
let filtrados = numeros.filter(num => num > 5); // [10, 20, 8, 10]
console.log("Resultado de filter:", filtrados);

// 10. reduce() - Aplica una función acumulativa a los elementos del array
let suma = numeros.reduce((acumulador, num) => acumulador + num, 0); // 42
console.log("Resultado de reduce:", suma);

// 11. includes() - Verifica si un valor existe en el array
let contieneCinco = numeros.includes(5); // true
console.log("¿Contiene el número 5?", contieneCinco);

// 12. indexOf() - Retorna el primer índice donde se encuentra un valor
let indiceDeCinco = numeros.indexOf(5); // 4
console.log("Índice de 5:", indiceDeCinco);

// 13. join() - Convierte todos los elementos del array en una cadena
let cadena = numeros.join('-'); // "0-10-20-4-5"
console.log("Resultado de join:", cadena);

// 14. sort() - Ordena los elementos del array
numeros.sort(); // [0, 10, 20, 4, 5]
console.log("Resultado de sort:", numeros);

// 15. reverse() - Invierte el orden de los elementos del array
numeros.reverse(); // [5, 4, 20, 10, 0]
console.log("Resultado de reverse:", numeros);
