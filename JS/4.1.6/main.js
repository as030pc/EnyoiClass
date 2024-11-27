// Template string
let age = 2+4
console.log("Nueva" + age)

//  String literal

let nueva = `Nueva variable ${2 + 3}`

// Operador ternario



//charAt
let charAtExample = 'Nueva Variable'.charAt(0)


// Lower case y uppercase

console.log(nueva.toLowerCase())
console.log(nueva.toUpperCase())





// 1. toUpperCase()
let texto1 = "javascript";
console.log("toUpperCase:", texto1.toUpperCase()); // "JAVASCRIPT"

// 2. toLowerCase()
let texto2 = "JAVASCRIPT";
console.log("toLowerCase:", texto2.toLowerCase()); // "javascript"

// 3. trim()
let texto3 = "   Hola Mundo   ";
console.log("trim:", texto3.trim()); // "Hola Mundo"

// 4. split(separator)
let texto4 = "manzana,naranja,plátano";
console.log("split:", texto4.split(",")); // ["manzana", "naranja", "plátano"]

// 5. indexOf(substring)
let texto5 = "Hola JavaScript";
console.log("indexOf (encontrado):", texto5.indexOf("Java")); // 5
console.log("indexOf (no encontrado):", texto5.indexOf("Python")); // -1

// 6. substring(start, end)
let texto6 = "JavaScript";
console.log("substring:", texto6.substring(0, 4)); // "Java"

// 7. slice(start, end)
console.log("slice (positivo):", texto6.slice(0, 4)); // "Java"
console.log("slice (negativo):", texto6.slice(-6)); // "Script"

// 8. replace(searchValue, newValue)
let texto7 = "Hola mundo";
console.log("replace:", texto7.replace("mundo", "JavaScript")); // "Hola JavaScript"

// 9. includes(substring)
let texto8 = "Aprender JavaScript es divertido";
console.log("includes (true):", texto8.includes("JavaScript")); // true
console.log("includes (false):", texto8.includes("Python")); // false

// 10. charAt(index)
let texto9 = "JavaScript";
console.log("charAt (primera letra):", texto9.charAt(0)); // "J"
console.log("charAt (quinta letra):", texto9.charAt(4)); // "S"

// 11. concat(...strings)
let saludo = "Hola";
let nombre = "Mundo";
console.log("concat:", saludo.concat(" ", nombre)); // "Hola Mundo"

// 12. length
let texto10 = "JavaScript";
console.log("length:", texto10.length); // 10



