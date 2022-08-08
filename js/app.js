// Modelo predefinidos //

// Funcion constructora de objetos //

class Modelo {
	constructor(id,foto,nombre,metraje,habitaciones,ruedas,precio,detalles){
	this.id=id 
	this.foto=foto
	this.nombre=nombre;
	this.metraje=metraje;
	this.habitaciones=habitaciones;
	this.ruedas=ruedas
	this.precio=precio
	this.detalles=detalles
	}
}

// Creacion de objetos //

// Funcion creadora del Array

function crearArray(){
	const array=[]
	array.push(new Modelo(1,"../assets/Galeria 3.png", 'Modelo Brandy', 60, 3, 'sin ruedas', 42000,"Catalogo.html#Modelobrandy"))
	array.push(new Modelo(2,"../assets/Galeria 4.png",'Modelo July', 40, 2, 'sin ruedas', 28000,"Catalogo.html#Modelojuly"))
	array.push(new Modelo(3,"../assets/Galeria 8.jpg",'Modelo Mia', 25, 1, 'con ruedas', 18500,"Catalogo.html#Modelomia"))
	array.push(new Modelo(4,"../assets/Modelo Lilo.png",'Modelo Lilo', 60, 2, 'sin ruedas', 38000,"Catalogo.html#Modelolilo"))
	array.push(new Modelo(5,"../assets/Modelo Dora.png",'Modelo Dora', 30, 1, 'con ruedas', 21000,"Catalogo.html#Modelodora"))
	array.push(new Modelo(6,"../assets/Modelo Ron.png",'Modelo Ron', 40, 2, 'con ruedas', 30000,"Catalogo.html#Modeloron"))

	return array
}
 
// Esta funcion se llama cuando presiono "Filtrar" desde el HTML
function filtrarModelos() {
 
	//tomo las claves de busqueda del HTML
	let metraje = document.getElementById("metraje").value.toLowerCase()
	let habitaciones = document.getElementById("habitaciones").value.toLowerCase()
	let ruedas = document.getElementById("ruedas").value.toLowerCase()
  
	listarModelos(metraje, habitaciones, ruedas)
  }

// Genero listado en HTML
function listarModelos(metraje, habitaciones, ruedas){

	//selecciono elemento HTML dentro del cual se mostraran los resultados de la busqueda
	const htmlfiltromodelos = document.getElementById("resultados")
  
	let fragment = ""
	
	//recorro el array
	modelos.forEach((mod) => {
    
	  if((metraje == mod.metraje || metraje == "metraje") & 
		(habitaciones == mod.habitaciones || habitaciones == "habitaciones") &
		(ruedas == mod.ruedas.toLowerCase() || ruedas == "ruedas")){
		
		//agrego propiedad al fragment  
		//fragment += templateVentaCasa(mod)
		fragment += templateModelo(mod)
		}
	})
  
  
	if(fragment == ""){
		fragment += templateNotFound()
	  }
  
	//agrego fragment al HTML
	htmlfiltromodelos.innerHTML = fragment
  } 
  
  // ================== TEMPLATES =================== //


// genero fragmento HTML
function templateModelo (mod){
	fragment = ``

	fragment += `<div class="col-lg-4 mx-auto p-1 d-flex justify-content-center">
					<div class="card cotizacion__card" style="width: 18rem;">
					<img src="${mod.foto}" class="card-img-top">
					<div class="card-body text-center p-4">
						<h5 class="card-title text-center"><strong>${mod.nombre}</strong></h5>
						<p class="card-text ">Metraje: ${mod.metraje}</p>
						<p class="card-text">Habitaciones: ${mod.habitaciones}</p>
						<p class="card-text">${mod.ruedas}</p>
						<hr class="cotizacion__card--hr"></hr>
						<p class="card-text">Precio: ${mod.precio} USD</p>
						<a href="${mod.detalles}" class="cotizacion__card--boton">Ver Detalles</a>
					</div>
					</div>
				</div>`
	return fragment

}
  
  // No hay Modelos que coincidan con el criterio de busqueda
  function templateNotFound(){
	let card =
	`<div class="row justify-item-center">
		<div class="col-12">
		  <h3 class="mt-5 mb-5 text-center cotizacion__notfound">No se encontraron resultados <i class="bi bi-emoji-frown"></i></h3>
		</div>
	  </div>`
	return card
  }
  
// ============================ EJECUCION ========================= //


//creo array de modelos
const modelos = crearArray()

listarModelos("metraje", "habitaciones", "ruedas")

