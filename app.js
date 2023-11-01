
/* Deberá contener la funcionalidad en Javascript, al momento de 
presionar el botón “Resumen”, deberá mostrar en la sección 
“Total a Pagar: $”, el monto correspondiente a la cantidad de 
tickets a comprar con el descuento correspondiente dependiendo la 
categoría seleccionada, existen 3 categorías, Estudiante, Trainee,
 Junior*/

const categoria = document.getElementById("categoria");
const totalPagar = document.getElementById("totalPagar");
const cantTicket = document.querySelector('#cantidad');

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){
	console.log(e);
	e.preventDefault();
	//aca creo que deberia validar antes de mandar todo al servidor.-
	let error=validar();
	if(error[0]){
		alert(error[1]);
	} else{
		alert("Gracias!!! Se enviarán sus datos ingresados...");
		limpiar();
	}

	
	
});


categoria.addEventListener("change", function(e){
	
	// Defino las varables internas
	const valor= 200;
	const cat=categoria.value;
	let cant=cantTicket.value;
	// Evaluo el valor de cantidad si es vacio le asigno 1
	if(cant=='') {
		cant=1;
		//podria poner un alert q avise que no hay cantidad seleccionada.-
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
	console.log("Formulario limpio.");
	totalPagar.innerText=`Total a Pagar:`;	
}

//validaciond de campos

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");

function validar(){
	let error=[]; 
	if (nombre.value.length < 4 || nombre.value.length > 20){
		error[0]=true;
		error[1]='El nombre es incorrecto';
		return error;
	} else if(email.value.length < 4 || email.value.length>20 || email.value.indexOf('@')==-1 || email.value.indexOf('.') == -1){
		error[0]=true;
		error[1]='El e-mail es incorrecto';
		return error;
	} else if(apellido.value.length < 4 || apellido.value.length > 20){
		error[0]=true;
		error[1]='El apellido es incorrecto';
		return error;
	} else if(categoria.value =="seleccionar"){
		error[0]=true;
		error[1]='Debe ingresar una categoria de ticket';
		return error;
	}

	error[0]=false;
	return error;
}