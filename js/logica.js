//productos cargados por defecto
const productos = [{id:1, nombre:"producto 1",precio: 250},{id:2, nombre:"producto 2",precio: 500},{id:3, nombre:"producto 3",precio: 750}];
const carrito = [];
//esta funcion agrega un producto nuevo al array de productos
function agregarProductosATienda() {
  let respAgr = prompt("¿Desea agregar productos? 1 Si, 0 No");

  while (respAgr != "0") {
    const nombre = prompt("Nombre del producto");
    const precio = parseFloat(prompt("Precio del producto"));

    if (!isNaN(precio)) {
      productos.push({
        id: productos.length+1,
        nombre: nombre,
        precio: precio,
      });
    } else {
      alert("Precio no válido. El producto no se agregó.");
    }

    respAgr = prompt("¿Desea agregar otro? 1 Si, 0 No");
  }
}
//esta funcion muestra los productos cargados en la tienda y permite agregar un producto al carrito
function agregarProductosACarrito() {
  let prodAAgregar = prompt("¿Desea agregar productos al carrito? 1 Si, 0 No");

  while (prodAAgregar != "0") {
    let textProductos = "";
    for (const producto of productos) {
      textProductos += `codigo:${producto.id} producto: ${
        producto.nombre
      } precio:${producto.precio}\n`;
    }
    prodAAgregar = prompt(
      textProductos +
        "Ingrese el número del producto a agregar en el carrito, 0 para dejar de agregar"
    );
    prodAAgregar = parseInt(prodAAgregar);

    if (
      !isNaN(prodAAgregar) &&
      prodAAgregar >= 0 &&
      prodAAgregar <= productos.length
    ) {
      if (prodAAgregar > 0) {
        carrito.push(productos[prodAAgregar - 1]);
        alert("Producto agregado al carrito.");
      }
    } else {
      alert("Número de producto no válido.");
    }
  }
}
//finaliza el proceso de compra y muestra los productos comprados
function comprarProductosEnCarrito() {
  let total = 0;
  let textProductos = "Productos en el carrito:\n";

  for (const producto of carrito) {
    textProductos += `codigo:${producto.id + 1} producto: ${
      producto.nombre
    } precio:${producto.precio}\n`;
    total += producto.precio;
  }

  alert(textProductos);
  alert(`Total a pagar: $${total.toFixed(2)}`);
  carrito = [];
}
//permite ver los productos que se agregaron en el carrito
function verCarrito() {
  let cart = "Productos en el carrito:\n";

  for (const producto of carrito) {
    cart += `num:${producto.id+1} producto: ${producto.nombre} precio:${producto.precio}\n`;
  }

  alert(cart);
}

let accion = "";
//bucle del menu principal
while (accion != "5") {
  accion = prompt(
    "¿Qué desea hacer?\n1 => Agregar productos a la tienda\n2 => Agregar productos al carrito\n3 => Comprar productos en el carrito\n4 => Ver carrito\n5 => Salir"
  );
  switch (accion) {
    case "1":
      agregarProductosATienda();
      break;
    case "2":
      agregarProductosACarrito();
      break;
    case "3":
      comprarProductosEnCarrito();
      break;
    case "4":
      verCarrito();
      break;
    case "5":
      alert("Gracias por su compra");
      break;
    default:
      alert("Opción incorrecta");
      break;
  }
}
