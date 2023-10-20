
/* Deberá contener la funcionalidad en Javascript, al momento de 
presionar el botón “Resumen”, deberá mostrar en la sección 
“Total a Pagar: $”, el monto correspondiente a la cantidad de 
tickets a comprar con el descuento correspondiente dependiendo la 
categoría seleccionada, existen 3 categorías, Estudiante, Trainee,
 Junior*/

const categoria = document.getElementById("categoria");
const totalPagar = document.getElementById("totalPagar");
const cantTicket = document.querySelector('#cantidad');

categoria.addEventListener("change", function(){
	
	// Defino las varables internas
	const valor= 200;
	const cat=categoria.value;
	let cant=cantTicket.value;
	// Evaluo el valor de cantidad si es vacio le asigno 1
	if(cant=='') {
		cant=1;
	}

	// Variables para calcular los descuentos y los pongo en 0
	let descEstudiante=0;
	let descTrainer=0;
	let descJunior =0;

	// calculo cada descuento
	descEstudiante= (valor - valor * 0.8) * cant;
	descTrainer=(valor - valor * 0.5) * cant;
	descJunior= (valor - valor * 0.15) * cant;
	
	// Depoendiendo que elige el usuario agrego el descuento a la etiqueta
	if (categoria.value == "estudiante"){
		totalPagar.innerText=`Total a Pagar: $${descEstudiante}`;
	} else if( categoria.value == "trainer"){
		totalPagar.innerText=`Total a Pagar: $${descTrainer}`;
	} else if (categoria.value == "junior"){
		totalPagar.innerText=`Total a Pagar: $${descJunior}`;
	}
});
// mismo evento por si el usuario cambia la cantidad se actualiza el precio
cantTicket.addEventListener("change", function(){
	// Defino las varables internas
	const valor= 200;
	const cat=categoria.value;
	let cant=cantTicket.value;
	// Evaluo el valor de cantidad si es vacio le asigno 1
	if(cant=='') {
		cant=1;
	}

	// Variables para calcular los descuentos y los pongo en 0
	let descEstudiante=0;
	let descTrainer=0;
	let descJunior =0;

	// calculo cada descuento
	descEstudiante= (valor - valor * 0.8) * cant;
	descTrainer=(valor - valor * 0.5) * cant;
	descJunior= (valor - valor * 0.15) * cant;
	
	// Depoendiendo que elige el usuario agrego el descuento a la etiqueta
	if (categoria.value == "estudiante"){
		totalPagar.innerText=`Total a Pagar: $${descEstudiante}`;
	} else if( categoria.value == "trainer"){
		totalPagar.innerText=`Total a Pagar: $${descTrainer}`;
	} else if (categoria.value == "junior"){
		totalPagar.innerText=`Total a Pagar: $${descJunior}`;
	}
});


// BOTON BORRAR

const borrar = document.getElementById("borrar");
borrar.addEventListener("click", limpiar);
function limpiar(){
	const miFormulario= document.getElementById("formulario");
	miFormulario.reset();	
}