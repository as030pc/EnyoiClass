// // Operadores Matematicos
// // PEMDAS

// // let operacionCompleja = ((2 + 5)**2)/4 + 56/ 4 + (7 * 5)

// // //  ((2 + 5)**2)/4 + 56/ 4  + 35
// // // (7** 2)/4 + 56/4 + 35
// // // 49/4 + 56/4 + 35
// // // 12.25 + 14 + 35
// // console.log((49/4 ))
// // console.log(operacionCompleja)

// let variable = 56
// variable *= 6

// console.log(variable)

let numero1 = 67
let numero2 = 78
let numero3 = 90
let numero4 = 45
// Logica proposicional
// 

console.log(67  < 90) //Verdadero
console.log(78 < 0)  //Falso
console.log(numero1  < numero3 || numero2 < 0 ) //True

console.log(! numero1  < numero3) //False


// Mostrar al usuario solo los nombres de los productos que tienen stock y que su stock es mayor a 80
const productos = [{
    name:"Mandarinas",
    isStock: true,
    stock:82
    
}, {
    name: 'Huevos',
    isStock: true,
    stock: 77
} ]


for (const producto of productos) {

    if (producto.isStock  && producto.stock  > 80) {
        console.log(producto.name)
        
    }
   

}


