const users = [
    { name: "Juan", age: 30, city: "Bogotá", active: true },
    { name: "María", age: 25, city: "Medellín", active: false },
    { name: "Carlos", age: 28, city: "Cali", active: true },
    { name: "Ana", age: 32, city: "Cartagena", active: false },
    { name: "Sofía", age: 22, city: "Barranquilla", active: true }
  ];





  

function createDiv (user) {
    const userList = document.getElementById("users");
    // Crear un div para cada usuario
    const userDiv = document.createElement("div");
    userDiv.id = `usrer-${user.name}`
  
    // Condicional para diferenciar usuarios activos
    if (user.active) {
      userDiv.style.backgroundColor = "#d4fcd4"; // Fondo verde para activos
    } else {
      userDiv.style.backgroundColor = "#fcd4d4"; // Fondo rojo para inactivos
    }
  
    // Usando `switch` para manejar las ciudades
    let cityLabel;
    switch (user.city) {
      case "Bogotá":
        cityLabel = "Capital de Colombia";
        break;
      case "Medellín":
        cityLabel = "Ciudad de la Eterna Primavera";
        break;
      case "Cali":
        cityLabel = "Capital de la Salsa";
        break;
      default:
        cityLabel = "Otra ciudad de Colombia";
    }
  
    userDiv.innerHTML = `
      <p><strong>Nombre:</strong> ${user.name}</p>
      <p><strong>Edad:</strong> ${user.age}</p>
      <p><strong>Ciudad:</strong> ${user.city} (${cityLabel})</p>
      <p><strong>Estado:</strong> ${user.active ? "Activo" : "Inactivo"}</p>
      <hr>
    `;
    userList.appendChild(userDiv);
}

  users.forEach((user) => {createDiv(user)})









  

  const userList = document.getElementById("users");
  
//   for (let i = 0; i < users.length; i++) 
  for (let user of users) {
    // const user = users[i];
 
  
    // Crear un div para cada usuario
    const userDiv = document.createElement("div");
    userDiv.id = `user-${user.name}`
  
    // Condicional para diferenciar usuarios activos
    if (user.active) {
      userDiv.style.backgroundColor = "#d4fcd4"; // Fondo verde para activos
    } else {
      userDiv.style.backgroundColor = "#fcd4d4"; // Fondo rojo para inactivos
    }
  
    // Usando `switch` para manejar las ciudades
    let cityLabel;
    switch (user.city) {
      case "Bogotá":
        cityLabel = "Capital de Colombia";
        break;
      case "Medellín":
        cityLabel = "Ciudad de la Eterna Primavera";
        break;
      case "Cali":
        cityLabel = "Capital de la Salsa";
        break;
      default:
        cityLabel = "Otra ciudad de Colombia";
    }
  
    userDiv.innerHTML = `
      <p><strong>Nombre:</strong> ${user.name}</p>
      <p><strong>Edad:</strong> ${user.age}</p>
      <p><strong>Ciudad:</strong> ${user.city} (${cityLabel})</p>
      <p><strong>Estado:</strong> ${user.active ? "Activo" : "Inactivo"}</p>
      <hr>
    `;
    userList.appendChild(userDiv);
  }
  
  // *** 2. Usando `while` para filtrar y mostrar solo usuarios activos ***
  let index = 0;
  while (index < users.length) {
    const user = users[index];
    if (user.active) {
      const activeDiv = document.createElement("div");
      activeDiv.innerHTML = `<p>${user.name} está activo.</p>`;
      activeDiv.style.fontWeight = "bold";
      userList.appendChild(activeDiv);
    }
    index++;
  }
  

//   let doIndex = 0;
//   do {
//     const user = users[doIndex];
//     const doWhileDiv = document.createElement("div");
//     doWhileDiv.innerHTML = `<p>Procesando usuario: ${user.name}</p>`;
//     doWhileDiv.style.color = "blue";
//     userList.appendChild(doWhileDiv);
//     doIndex++;
//   } while (doIndex < users.length);
