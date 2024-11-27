const users = [
    { name: "Juan", age: 30, city: "Bogotá", active: true },  // 0
    { name: "María", age: 25, city: "Medellín", active: false }, //1
    { name: "Carlos", age: 28, city: "Cali", active: true },
    { name: "Ana", age: 32, city: "Cartagena", active: false },
    { name: "Sofía", age: 22, city: "Barranquilla", active: true }
  ];


  users.forEach((i) => console.log(i))

//   for (let index = 0; index < users.length; index++) {
//     console.log(users[index])

//   }




//   for (i in users) {
//     console.log(i)
//     console.log(users[i])
//   }



//   for (i of users) {
//     console.log(i)
//   }

// let index = 0
//   while (index < users.length) {
//     console.log(users[index])
//     index = index + 1  // index++
//   }



// let i = 0
//   do {
//     console.log(users[i])
//     i++

//   } while (i < users.length )









// Funciones


function suma (a, b) {
    return a+ b

}


console.log(suma(4, 5))


// Arrow functions

const suma1 = (a, b) => a+ b

console.log(suma1(5, 4))



