let ropaMujer = [
    {
      id: 1,
      nombre: "Camisa Rite",
      precio: 1250,
      imagen: "../estilo/imagen/ropa-mujer/Vestido Sofia.jpeg",
    },
    {
      id: 2,
      nombre: "Camisa Hop",
      precio: 850,
      imagen: "../estilo/imagen/ropa-mujer/Vestido Andy.jpeg",
    },
    {
      id: 3,
      nombre: "Camisa Pop",
      precio: 900,
      imagen: "../estilo/imagen/ropa-mujer/Sweter Panal.jpeg",
    },
    {
      id: 4,
      nombre: "Remera Code",
      precio: 450,
      imagen: "../estilo/imagen/ropa-mujer/Remera Welcome.jpeg",
    },
    {
      id: 5,
      nombre: "Remera Zip",
      precio: 500,
      imagen: "../estilo/imagen/ropa-mujer/Remera Trust.jpeg",
    },
    {
      id: 6,
      nombre: "Remera Zip-T",
      precio: 450,
      imagen: "../estilo/imagen/ropa-mujer/Remera Paris.jpeg",
    },
    {
      id: 7,
      nombre: "Remera Back",
      precio: 500,
      imagen: "../estilo/imagen/ropa-mujer/Remera New York.jpeg",
    },
    {
      id: 8,
      nombre: "Remera Low",
      precio: 550,
      imagen: "../estilo/imagen/ropa-mujer/Remera Andy.jpeg",
    },
    {
      id: 9,
      nombre: "Remera Zata",
      precio: 550,
      imagen: "../estilo/imagen/ropa-mujer/Short Mon.jpeg",
    },
    {
      id: 10,
      nombre: "Short Teen",
      precio: 550,
      imagen: "../estilo/imagen/ropa-mujer/Short Sky.jpeg",
    },
    {
      id: 11,
      nombre: "Short ComeBack",
      precio: 550,
      imagen: "../estilo/imagen/ropa-mujer/Pantalon Retro.jpeg",
    },
    {
      id: 12,
      nombre: "Pantalon Chino",
      precio: 1550,
      imagen: "../estilo/imagen/ropa-mujer/Pantalon Queen.jpeg",
    },
    {
      id: 13,
      nombre: "Pantalon Bond",
      precio: 1500,
      imagen: "../estilo/imagen/ropa-mujer/Pantalon Pit.jpeg",
    },
    {
      id: 14,
      nombre: "Pantalon Look",
      precio: 1800,
      imagen: "../estilo/imagen/ropa-mujer/Pantalon Mon.jpeg",
    },
    {
      id: 15,
      nombre: "Pantalon Re-4",
      precio: 1200,
      imagen: "../estilo/imagen/ropa-mujer/Pantalon Miley.jpeg",
    },
    {
      id: 16,
      nombre: "Pantalon Misck",
      precio: 1350,
      imagen: "../estilo/imagen/ropa-mujer/Pantalon Artic.jpeg",
    },
  ];
  
  const contenedor = document.getElementById("contenido");
  contenedor.innerHTML = "";
  
  ropaMujer.forEach((producto, indice) => {
    let card = document.createElement("div");
    card.classList.add("card", "col-sm-12", "col-lg-3");
    let html = `
        <img src="${producto.imagen}" class="card-img-top" alt="...">
        <div class="card-body text-center">
          <h5 class="card-title fs-2">${producto.nombre}</h5>
          <p class="card-text fs-3">${producto.precio}$</p>
          <p class="card-text fs-4">6 cuotas de ${(producto.precio / 6).toFixed(2)}$</p>
          <a href="#cart" class="btn btn-primary" onClick="abrirCarrito(${indice})">Comprar</a>
        </div>
          `;
    card.innerHTML = html;
    contenedor.appendChild(card);
  });
  
  const ropa = [];
  
  const abrirCarrito = (indiceProducto) => {
    const indiceEncontrar = ropa.findIndex((elemento) => {
      return elemento.id === ropa[indiceProducto].id;
    });
    if (indiceEncontrar === -1) {
      //Agrego el producto aca
      const productoAgregar = ropa[indiceProducto];
      productoAgregar.cantidad = 1;
      ropa.push(productoAgregar);
      actualizarCarrito();
    } else {
      //Incremento la cantidad por si elije el mismo
      ropa[indiceEncontrar].cantidad += 1;
      actualizarCarrito();
    }
  };
  
  let modalCarrito = document.getElementById("cart");
  
  const actualizarCarrito = () => {
    let totalP = 0;
    modalCarrito.className = "cart";
    modalCarrito.innerHTML = "";
    if (ropa.length > 0) {
      ropa.forEach((producto, indice) => {
        totalP = totalP + producto.precio * producto.cantidad;
        const carritoContenido = document.createElement("div");
        carritoContenido.className = "producto-carrito";
        carritoContenido.innerHTML = `
            <img class="car-img" src="${producto.imagen}"/>
            <div class="product-details">
              ${producto.nombre}
            </div>
            <div class="product-details" > Cantidad: ${producto.cantidad}</div>
            <div class="product-details"> Precio: $ ${producto.precio}</div>
            <div class="product-details"> Hasta 6 Cuotas de : $ ${(
              (producto.precio * producto.cantidad) /
              6
            ).toFixed(2)}</div>
            <div class="product-details"> Subtotal: $ ${
              producto.precio * producto.cantidad
            }</div>
            <button class="btn btn-danger"  id="remove-product" onClick="removeProduct(${indice})">Eliminar Producto</button>
             `;
        modalCarrito.appendChild(carritoContenido);
      });
      // Dibujo el total y lo appendeo en el div capturado y guardado en la variable modalCarrito
      const totalContainer = document.createElement("div");
      totalContainer.className = "total-carrito";
      totalContainer.innerHTML = `<div class= "total"> Total $ ${totalP}</div>
        <button class= "btn btn-danger fs-3 finaliza" id="finalizar" onClick="finalizarCompra()"> Finalizar Compra </button>`;
      modalCarrito.appendChild(totalContainer);
    } else {
      modalCarrito.classList.remove("cart");
    }
  };
  
  const removeProduct = (indice) => {
    ropa.splice(indice, 1);
    actualizarCarrito();
  };
  const finalizarCompra = () => {
    const total = document.getElementsByClassName("total")[0].innerHTML;
    modalCarrito.innerHTML = "";
    const compraFinalizada = `<div class="compra-finalizada text-center"><p class="compra-parrafo"> Excelente Compra!, El pago total es  ${total}</div>
      <p class="datos-parrafo text-center">Revisa que todo este Bien y Completa el <strong>Formulario</strong> con sus datos para coordinar la entrega</p>
      <div class="formulario-ropa">
      <button class= "btn btn-danger fs-3" id="formulario" onClick="formu()"> FORMULARIO </button>
      </div>
      </div>`;
    modalCarrito.innerHTML = compraFinalizada;
  };
  const formu = () => {
    modalCarrito.innerHTML = "";

    const formulario = `
  <div class="container-fluid letra-formulario">
      <div class="row align-items-center">
          <div class="col-6 d-flex align-items-center">
              <img class="form-tamanio" src="../estilo/imagen/logo007.png" alt="Imagen para formulario">
          </div>
          <div class="col-6">
              <h2 id="contacto" class="text-center fs-1">Completa tus Datos</h2>
              <form class="g-3">        
                  <div class="col">
                      <label for="validationDefault01" class="form-label">Nombre</label>
                      <input type="text" class="form-control" id="nombre" required>
                  </div>
                  <div class="col">
                      <label for="validationDefault02" class="form-label">Apellido</label>
                      <input type="text" class="form-control" id="apellido" required>
                  </div>
                  <div class="col">
                      <label for="validationDefaultUsername" class="form-label letraFormulario">Email</label>
                      <div class="input-group">
                          <span class="input-group-text" id="inputGroupPrepend2">@</span>
                          <input type="email" class="form-control" id="email"
                              aria-describedby="inputGroupPrepend2" required>
                      </div>
                  </div>
                  <div class="col">
                      <label for="validationDefault03" class="form-label">Ciudad</label>
                      <input type="text" class="form-control" id="ciudad" required>
                  </div>
                  <div class="col">
                      <label for="validationDefault03" class="form-label">Domicilio</label>
                      <input type="text" class="form-control" id="domicilio" required>
                  </div>
                  <div class="col">
                      <label for="validationDefault03" class="form-label ">Usuario</label>
                      <input type="text" class="form-control" id="usuario" required>
                  </div>
                  <div class="col">
                      <label for="validationDefault03" class="form-label ">Contraseña</label>
                      <input type="password" class="form-control" id="contraseña" required>
                  </div>
                  <div class="col-12 text-center pt-4">
                      <button class="btn btn-primary fs-3 envio" type="button"
                          onclick="mostrarMensaje()">Registro</button>
                      <button class="btn btn-danger fs-3 envio" type="reset">Limpiar formulario</button>
                  </div>        
              </form>
          </div>
      </div>
  </div>
      `;
    modalCarrito.innerHTML = formulario;
  };
  
  const mostrarMensaje = () => {
    const nombreCliente = document.getElementById("nombre").value;
    const domicilioCliente = document.getElementById("domicilio").value;
    const emailCliente = document.getElementById("email").value;
    debugger;
    modalCarrito.innerHTML = "";
    let mensaje = `<div class="mensaje-final">Gracias <strong>${nombreCliente}</strong>  por su compra! en Instantes se enviara un Email a su correo Electronico <strong>${emailCliente}</strong>  para su seguimiento a la Direccion <strong>${domicilioCliente}</strong>  </div>`;
    modalCarrito.innerHTML = (mensaje);
  };
  