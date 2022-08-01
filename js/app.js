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

// Funcion para detectar si el valor ingresado se encuentra dentro de los rangos //

function valido(max,min,valor){
	if(isNaN(valor) || valor>max || valor<min){
		alert('Ingrese un valor entre ' + min + ' y ' + max)
		return true
	} else {
		return false}	
}

// Funcion que solicita el ingreso de datos y llama a la funcion valido //

function ingresoDatos(texto,max,min){
	let respuesta=prompt(texto)
	while (valido(max,min,respuesta)){
		respuesta=prompt(texto)
	}
	return respuesta
}

// Funcion constructora de objetos //

class Modelo {
	constructor(nombre,metraje,habitaciones,ruedas,precio){
	this.nombre=nombre;
	this.metraje=metraje;
	this.habitaciones=habitaciones;
	this.ruedas=ruedas
	this.precio=precio
	}
}

// Creacion de objetos //

const modelo1=new Modelo('Brandy', 60, 3, 'sin ruedas', 42000)
const modelo2=new Modelo('July', 40, 2, 'sin ruedas', 28000)
const modelo3=new Modelo('Mia', 25, 1, 'con ruedas', 18500)
const modelo4=new Modelo('Lilo', 60, 2, 'sin ruedas', 38000)
const modelo5=new Modelo('Dora', 30, 1, 'con ruedas', 21000)
const modelo6=new Modelo('Ron', 40, 2, 'con ruedas', 30000)

// Creacion del Array //

const modelos=[modelo1, modelo2, modelo3, modelo4, modelo5, modelo6]

// Funciones para los filtrados //

function filtroMetraje(casas, metraje){
	return casas.filter(objeto => objeto.metraje === parseInt(metraje));
}

function filtroHabitaciones(casas, habitaciones){
	return casas.filter(objeto => objeto.habitaciones === parseInt(habitaciones))
}

function filtroRuedas(casas,ruedas){
	return casas.filter(objeto => objeto.ruedas === ruedas)
}

function listaCasas(modelos){
	let lista=''
	for(const Modelo of modelos){
		  lista=lista + 'El modelo ' + Modelo.nombre + ' cuenta con ' + Modelo.metraje + ' m2' +', ' + Modelo.habitaciones + ' habitacion(es), ' + Modelo.ruedas + ' y tiene un valor de ' + Modelo.precio + ' USD' + '\n'
	}
	return lista
}


// Comienzo del programa //

let opcion=prompt('Desea cotizar un modelo predefinido o personalizado? \n 1-Predefinido \n 2-Personalizado')

while(opcion!=1 & opcion!=2){
	alert('Ingrese una respuesta válida')
	opcion=prompt('Desea cotizar un modelo predefinido o personalizado? \n 1-Predefinido \n 2-Personalizado')
}

if(opcion==1){
	let filtrado=prompt('Desea filtrar por metraje, cantidad de habitaciones o si la casa tiene ruedas? \n 1-Metraje \n 2-Cantidad de habitaciones \n 3-Ruedas')
	while(filtrado!=1 & filtrado!=2 & filtrado!=3){
	alert('Ingrese una respuesta válida')
	filtrado=prompt('Desea filtrar por metraje, cantidad de habitaciones o si la casa tiene ruedas? \n 1-Metraje \n 2-Cantidad de habitaciones \n 3-Ruedas')
	}
	if(filtrado==1){
		let metraje=prompt('Elija una opción de metraje: \n 1-25m3 \n 2-30m2 \n 3-40m2 \n 4-60m2 ')
		while(metraje!=1 & metraje!=2 & metraje!=3 & metraje!=4){
			alert('Ingrese una respuesta válida')
			metraje=prompt('Elija una opción de metraje: \n 1-25m3 \n 2-30m2 \n 3-40m2 \n 4-60m2 ')
		}
		if(metraje==1){
			let metros=25			 
		  	let filtro=filtroMetraje(modelos, metros)
			alert(listaCasas(filtro))
		}else if(metraje==2){
			let metros=30			 
			let filtro=filtroMetraje(modelos, metros)
			alert(listaCasas(filtro))
		}else if(metraje==3){
			let metros=40			 
			let filtro=filtroMetraje(modelos, metros)
			alert(listaCasas(filtro))
		}else if(metraje==4){
			let metros=60			 
			let filtro=filtroMetraje(modelos, metros)
			alert(listaCasas(filtro))
		}
	}else if(filtrado==2){
		let habitaciones=prompt('Elija cantidad de habitaciones: \n 1 \n 2 \n 3')
		while(habitaciones!=1 & habitaciones!=2 & habitaciones!=3 & habitaciones!=4){
			alert('Ingrese una respuesta válida')
			metraje=prompt('Elija cantidad de habitaciones: \n 1 \n 2 \n 3')
		}
		if(habitaciones==1){		 
		  	let filtro=filtroHabitaciones(modelos, habitaciones)
			alert(listaCasas(filtro))
		}else if(habitaciones==2){
			let filtro=filtroHabitaciones(modelos, habitaciones)
			alert(listaCasas(filtro))
		}else if(habitaciones==3){
			let filtro=filtroHabitaciones(modelos, habitaciones)
			alert(listaCasas(filtro))
		}
	}else if(filtrado==3){
		let ruedas=prompt('Desea la casa con o sin ruedas? \n 1- con ruedas \n 2- sin ruedas')
		while(ruedas!=1 & ruedas!=2){
			alert('Ingrese una respuesta válida')
			ruedas=prompt('Desea la casa con o sin ruedas? \n 1- con ruedas \n 2- sin ruedas')
		}
		if(ruedas==1){
			let ruedass='con ruedas'		 
		  	let filtro=filtroRuedas(modelos, ruedass)
			alert(listaCasas(filtro))
		}else if(ruedas==2){
			let ruedass='sin ruedas'	
			let filtro=filtroRuedas(modelos, ruedass)
			alert(listaCasas(filtro))
		}
	}
}else if(opcion==2){
	let metrosCuadrados=ingresoDatos('Ingrese los metros cuadrados que desea cotizar',60,15) //15 a 60
	let cantidadHabitaciones=ingresoDatos('Ingrese cantidad de habitaciones',3,0) // 0 a 3
	let ruedas=prompt('Desea que la casa tenga ruedas? \n (Si/No)').toLowerCase()

	while(ruedas!='si' & ruedas!='no'){
		alert('Ingrese si o no')
		ruedas=prompt('Desea que la casa tenga ruedas? \n (Si/No)')
	}
	if(ruedas=='si'){
		rueda=1
		conOsin='con'
	} else {
		rueda=0
		conOsin='sin'
	}
	alert('El precio de una Tiny House de ' + metrosCuadrados + ' m2, ' + cantidadHabitaciones + ' habitaciones' + ' y ' + conOsin + ' ruedas, es de ' + valor(metrosCuadrados, valorMetroCuadrado, cantidadHabitaciones, valorHabitacion, rueda, valorRuedas) + ' USD')
}



