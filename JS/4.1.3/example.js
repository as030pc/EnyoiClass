// 1. Variables: Declaración de productos y carrito
const productos = [
    { id: 1, nombre: "Manzana", precio: 100 },
    { id: 2, nombre: "Pera", precio: 120 },
    { id: 3, nombre: "Uva", precio: 150 }
];

let carrito = []; // Carrito de compras (vacío inicialmente)

// 2. Función para mostrar productos disponibles
function mostrarProductos() {
    console.log("Productos disponibles:");
    productos.forEach(producto => {
        console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}`);
    });
}

// 3. Función para agregar un producto al carrito
function agregarAlCarrito(idProducto, cantidad) {
    const producto = productos.find(p => p.id === idProducto);
    if (producto) {
        carrito.push({ ...producto, cantidad });
        console.log(`${producto.nombre} agregado al carrito. Cantidad: ${cantidad}`);
    } else {
        console.log("Producto no encontrado.");
    }
}

// 4. Función para mostrar el contenido del carrito
function mostrarCarrito() {
    console.log("Carrito de compras:");
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        carrito.forEach(item => {
            console.log(`${item.nombre} - Cantidad: ${item.cantidad} - Total: $${item.precio * item.cantidad}`);
        });
    }
}

// 5. Función para calcular el total a pagar
function calcularTotal() {
    const total = carrito.reduce((acumulado, item) => acumulado + item.precio * item.cantidad, 0);
    console.log(`Total a pagar: $${total}`);
    return total;
}

// 6. Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    console.log("El carrito ha sido vaciado.");
}

// Ejecución del programa
mostrarProductos(); // Mostrar los productos iniciales

// Simulando acciones del usuario
agregarAlCarrito(1, 2); // Agregar 2 manzanas al carrito
agregarAlCarrito(3, 1); // Agregar 1 uva al carrito
mostrarCarrito(); // Mostrar el carrito
calcularTotal(); // Calcular el total

// Vaciar el carrito y mostrar su estado
vaciarCarrito();
mostrarCarrito();