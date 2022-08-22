// 		MODELOS PREDEFINIDOS	 //


// Funcion constructora de objetos //

class Modelo {
	constructor(id,foto,nombre,metraje,habitaciones,ruedas,precio,detalles,cantidad){
	this.id=id 
	this.foto=foto
	this.nombre=nombre;
	this.metraje=metraje;
	this.habitaciones=habitaciones;
	this.ruedas=ruedas
	this.precio=precio
	this.detalles=detalles
    this.cantidad=cantidad
	}
}

// Creacion de objetos //

// Funcion creadora del Array

function crearArray(){
	const array=[]
	array.push(new Modelo(1,"../assets/Galeria 3.png", 'Modelo Brandy', 60, 3, 'sin ruedas', 42000,"Catalogo.html#Modelobrandy",1))
	array.push(new Modelo(2,"../assets/Galeria 4.png",'Modelo July', 40, 2, 'sin ruedas', 28000,"Catalogo.html#Modelojuly",1))
	array.push(new Modelo(3,"../assets/Galeria 8.jpg",'Modelo Mia', 25, 1, 'con ruedas', 18500,"Catalogo.html#Modelomia",1))
	array.push(new Modelo(4,"../assets/Modelo Lilo.png",'Modelo Lilo', 60, 2, 'sin ruedas', 38000,"Catalogo.html#Modelolilo",1))
	array.push(new Modelo(5,"../assets/Modelo Dora.png",'Modelo Dora', 30, 1, 'con ruedas', 21000,"Catalogo.html#Modelodora",1))
	array.push(new Modelo(6,"../assets/Modelo Ron.png",'Modelo Ron', 40, 2, 'con ruedas', 30000,"Catalogo.html#Modeloron",1))

	return array
}

// Esta funcion se llama cuando presiono "Filtrar" desde el HTML

const botonFiltrar=document.getElementById("filtrar")
botonFiltrar.addEventListener("click", llamarModelos)


function llamarModelos() {
 
	//tomo las claves de busqueda del HTML
	let metraje = document.getElementById("metraje").value.toLowerCase()
	let habitaciones = document.getElementById("habitaciones").value.toLowerCase()
	let ruedas = document.getElementById("ruedas").value.toLowerCase()
  
	listarModelos(metraje, habitaciones, ruedas)
}
      
// Genero listado en HTML

function listarModelos(metraje, habitaciones, ruedas){
	let fragment = ""
	const htmlfiltromodelos = document.getElementById("resultados")
	lista = filtrarModelos(metraje, habitaciones, ruedas)
	console.log(lista)
	lista.forEach((mod) => {
	  fragment += templateModelo(mod)
	})
	if(fragment == ""){
		fragment += templateNotFound()
	  }
	htmlfiltromodelos.innerHTML = fragment
}  

function filtrarModelos(metraje, habitaciones, ruedas){
	return modelos
	.filter(mod => metraje == mod.metraje || metraje == "metraje")
	.filter(mod => habitaciones == mod.habitaciones || habitaciones == "habitaciones")
	.filter(mod => ruedas == mod.ruedas.toLowerCase() || ruedas == "ruedas")
}

//  	TEMPLATES 	 //

// Genero fragmento HTML

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
						<div class="pb-3">
						<a href="${mod.detalles}" class="cotizacion__card--a">Ver Detalles</a>
						</div>
						<div class="pt-2">
						<button id="agregar${mod.id}" class="cotizacion__card--boton" onclick="agregarAlCarrito(${mod.id})">Agregar <i class="bi bi-cart-fill"></i></button>
						</div>
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


// 		 EJECUCION 		 //


//creo array de modelos

const modelos = crearArray()
listarModelos("metraje", "habitaciones", "ruedas")


//   	COTIZACION PERSONALIZADA	  //


// Definicion de variables //

let valorMetroCuadrado=500
let valorHabitacion=4000
let valorRuedas=2000

let rueda
let conOsin

// Funcion para calculo de precio //

function valor(a, b, c, d, e, f){
	let resultado= Math.round(a*b)+(c*d)+(e*f)
	return resultado
}  

// Funciones para detectar si los valores ingresados son validos //

function valido(max,min,valor,variable){
	if(isNaN(valor) || valor>max || valor<min){
		document.getElementById(variable).innerHTML = "Debe ingresar un valor entre " + min + " y " + max
		return true
	} else {
		document.getElementById(variable).innerHTML =""
		return false}	
} 

function ruedasValido(ruedas){
	if (ruedas!='si' & ruedas!='no'){
		document.getElementById("valor3").innerHTML = "Debe ingresar si o no"
		return true
	} else {
		document.getElementById("valor3").innerHTML =""
		return false
	}
}

// Esta funcion se llama cuando presiono "Cotizar" desde el HTML

const botonCotizar=document.getElementById("cotizar")
botonCotizar.addEventListener("click", calculo)

function calculo() {

	let metrosCuadrados = document.getElementById("metraje1").value.toLowerCase()
	let cantidadHabitaciones = document.getElementById("habitaciones1").value.toLowerCase()
	let ruedas = document.getElementById("ruedas1").value.toLowerCase()
  
	validar(metrosCuadrados, cantidadHabitaciones, ruedas)
}

// Esta funcion se llama cuando presiono "Borrar" desde el HTML

const botonBorrar=document.getElementById("borrar")
botonBorrar.addEventListener("click", borrar)


function borrar(){
	document.getElementById("valor").innerHTML =""
	document.getElementById("valor1").innerHTML =""
	document.getElementById("valor2").innerHTML =""
	document.getElementById("valor3").innerHTML =""
}

// funcion validar

function validar(metrosCuadrados, cantidadHabitaciones, ruedas){
	let text
  
	while (text !== "valor válido"){ 

	//se repite hasta obtener un valor valido
	  
	  if ((valido(60,15,metrosCuadrados,"valor1")) || (valido(3,0,cantidadHabitaciones,"valor2")) || (ruedasValido(ruedas))) {        
		// si el valor ingresado no es valido
		text = "Ingrese un valor válido!!"
		console.log((valido(60,15,metrosCuadrados,"valor1")))
		console.log((valido(3,0,cantidadHabitaciones,"valor2")))
		console.log((ruedasValido(ruedas)))
		document.getElementById("valor").innerHTML =""
		break
	  } else {
		// si el valor ingresado es valido
		text = "valor válido"
		if(ruedas=='si'){
			rueda=1
			conOsin='con'
		} else {
			rueda=0
			conOsin='sin'
		}
		document.getElementById("valor1").innerHTML =""
		document.getElementById("valor2").innerHTML =""
		document.getElementById("valor3").innerHTML =""
		document.getElementById("valor").innerHTML = "El precio de una Tiny House de "  + metrosCuadrados + " m<sup>2</sup>, " + cantidadHabitaciones + " habitaciones y " + conOsin + " ruedas, es de " + valor(metrosCuadrados, valorMetroCuadrado, cantidadHabitaciones, valorHabitacion, rueda, valorRuedas) + " USD"
	  }
	}   
}

//  Carrito de compra  //

let carrito=[]

const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

//  AGREGAR AL CARRITO  //


const agregarAlCarrito = (prodId) => {

    //PARA AUMENTAR LA CANTIDAD Y QUE NO SE REPITA
    const existe = carrito.some (prod => prod.id === prodId) //comprobar si el elemento ya existe en el carrito

    if (existe){ //SI YA ESTÁ EN EL CARRITO, ACTUALIZAMOS LA CANTIDAD
        const prod = carrito.map (prod => { //creamos un nuevo arreglo e iteramos sobre cada curso y cuando
            // map encuentre cual es el q igual al que está agregado, le suma la cantidad
            (prod.id === prodId)? (prod.cantidad++) : (prod.cantidad)
            })
    } else { //EN CASO DE QUE NO ESTÉ, AGREGAMOS EL CURSO AL CARRITO
        const item = modelos.find((prod) => prod.id === prodId)//Trabajamos con las ID
        //Una vez obtenida la ID, lo que haremos es hacerle un push para agregarlo al carrito
        carrito.push(item)
    }
    //Va a buscar el item, agregarlo al carrito y llama a la funcion actualizarCarrito, que recorre
    //el carrito y se ve.
    actualizarCarrito() 
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "" 
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="bi bi-trash3"></i></button>
        `
        contenedorCarrito.appendChild(div)
    })
	localStorage.setItem('carrito', JSON.stringify(carrito))
    contadorCarrito.innerText = carrito.length // actualizamos con la longitud del carrito.
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    //Por cada producto q recorro en mi carrito, al acumulador le suma la propiedad precio, con el acumulador
    //empezando en 0.
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)

    carrito.splice(indice, 1) 
    actualizarCarrito()
    console.log(carrito)
}

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})
