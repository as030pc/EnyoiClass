// Aplicaciones
function normalizarBusqueda(busqueda) {
    return busqueda.trim().toLowerCase().replace(/[^\w\s]/g, "");
  }
  
  const termino = "   JavaScript!!!   ";
  console.log(normalizarBusqueda(termino)); // "javascript"




function validarContrasena(contrasena) {
    const tieneMinLongitud = contrasena.length >= 8;
    const tieneNumero = /\d/.test(contrasena);
    const tieneCaracterEspecial = /[!@#$%^&*]/.test(contrasena);
  
    return tieneMinLongitud && tieneNumero && tieneCaracterEspecial;
  }
  
  console.log(validarContrasena("Password123!")); // true
  console.log(validarContrasena("abc123")); // false




  function generarIDUnico() {
    return `id-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }
  
  console.log(generarIDUnico()); // "id-1637590982367-9xv2pzs"





  function generarSlug(titulo) {
    return titulo
      .trim()
      .toLowerCase()
      .replace(/[\s]+/g, "-")
      .replace(/[^\w-]/g, ""); // Eliminar caracteres no válidos
  }
  
  const titulo = "   Cómo Usar Métodos de String en JavaScript   ";
  console.log(generarSlug(titulo)); // "como-usar-metodos-de-string-en-javascript"