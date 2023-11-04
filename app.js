
//Selecciono los elementos HTML que necesito para manipular.-

const categoria = document.getElementById("categoria");
const totalPagar = document.getElementById("totalPagar");
const cantTicket = document.querySelector('#cantidad');
const formulario = document.getElementById("formulario");


//Cuando se dispara el evento del formulario lo detengo, lo valido
formulario.addEventListener("submit", function(e){
	e.preventDefault();
	let error=validar();
	if(error[0]){
		alert(error[1]);
	} else{
		alert("Gracias!!! Se enviarán sus datos ingresados...");
		limpiar();
	}
});

//Si el ususario selecciona una categoria automaticamnete y si coloco una cantidad realizo el calculo y lo muestro
categoria.addEventListener("change", function(e){
	
	// Defino las varables internas
	const valor= 200;
	const cat=categoria.value;
	let cant=cantTicket.value;

	// Variables para calcular los descuentos y los pongo en 0
	let descEstudiante=0;
	let descTrainer=0;
	let descJunior =0;

	// calculo cada descuento segun la categoria
	descEstudiante= (valor - valor * 0.8) * cant;
	descTrainer=(valor - valor * 0.5) * cant;
	descJunior= (valor - valor * 0.15) * cant;
	
	//Agrego al lbl de total a pagar el texto con el valor de los calculos anteriores
	if (categoria.value == "estudiante"){
		totalPagar.innerText=`Total a Pagar: $${descEstudiante}`;
	} else if( categoria.value == "trainer"){
		totalPagar.innerText=`Total a Pagar: $${descTrainer}`;
	} else if (categoria.value == "junior"){
		totalPagar.innerText=`Total a Pagar: $${descJunior}`;
	}
});

//Si el ususario coloca una cantidad automaticamnete y si ya selecciono una categoria hago el calculo y muestro.-
cantTicket.addEventListener("change", function(){

	const valor= 200;
	const cat=categoria.value;
	let cant=cantTicket.value;
	
	// Variables para calcular los descuentos y los pongo en 0
	let descEstudiante=0;
	let descTrainer=0;
	let descJunior =0;

	// calculo cada descuento segun la categoria
	descEstudiante= (valor - valor * 0.8) * cant;
	descTrainer=(valor - valor * 0.5) * cant;
	descJunior= (valor - valor * 0.15) * cant;
	
	//Agrego al lbl de total a pagar el texto con el valor de los calculos anteriores
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

//VALIDACION de campos Nombre Apellido y de el email.-

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