// Template Strings
const producto = {
  nombre: 'Tablet de 12 Pulgadas',
  precio: 300,
  disponible: true,
  marca: 'Orange'
}

function textoFuncion() {
  return 'Este texto viene de la funcion';
}

const { nombre, precio, marca } = producto
console.log(`Nombre: ${nombre} - Precio: ${precio} - Marca: ${marca} - ${textoFuncion()}`);