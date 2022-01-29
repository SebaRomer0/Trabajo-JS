// Promociones de Banco

const promociones = [
  {
    id: 1,
    banco: "Banco Patagonia",
    tarjeta: "VISA",
    precioDesde: "1000$",
    imagen: "./estilo/imagen/tarjetas/banco/banco patagonia.jpg",
  },
  {
    id: 2,
    banco: "Banco Rio",
    tarjeta: "MASTERCARD",
    precioDesde: "900$",
    imagen: "./estilo/imagen/tarjetas/banco/banco rio.png",
  },
  {
    id: 3,
    banco: "Banco Santa Fe",
    tarjeta: "LINK",
    precioDesde: "1200$",
    imagen: "./estilo/imagen/tarjetas/banco/banco santafe.png",
  },
  {
    id: 4,
    banco: "Banco Nacion",
    tarjeta: "MUNICIPAL",
    precioDesde: "1500$",
    imagen: "./estilo/imagen/tarjetas/banco/banco nacion.jpg",
  },
];


const contenedor = document.getElementById("cont")
contenedor.innerHTML = "";

// Funcion para Mostrarlo por el HTML con el ID para mostrar los Bancos con Promos

function promoTarjeta (){
  promociones.forEach((promocion,i) => {
      console.log(i);
      let card = document.createElement("div");
      card.classList.add("card", "col-sm-12","col-lg-3");
      let html = `                       
                  <img src="${promocion.imagen}" class="card-img-top  img-fluid" alt="...">
                  <div id="banco" class="card-body text-center">
                      <h5 class="card-title fs-2">${promocion.banco}</h5>
                      <p class="card-text fs-3">Tarjeta ${promocion.tarjeta}</p>
                      <p class="card-text">Promocion a partir de los ${promocion.precioDesde}</p>
                  </div>  
              `;
        card.innerHTML = html;
        contenedor.appendChild(card);
  });
}


class CeniceroModel{
    togglePulido(){
      this.pulido = !this.pulido;
      return this.pulido;
    }
}

cen1 = new CeniceroModel();
cen2 = new CeniceroModel();
cen1.togglePulido();
console.log(cen1.pulido, cen2.pulido);
