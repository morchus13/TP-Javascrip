
/* Deberá contener la funcionalidad en Javascript, al momento de 
presionar el botón “Resumen”, deberá mostrar en la sección 
“Total a Pagar: $”, el monto correspondiente a la cantidad de 
tickets a comprar con el descuento correspondiente dependiendo la 
categoría seleccionada, existen 3 categorías, Estudiante, Trainee,
 Junior*/


const categoria = document.getElementById("categoria");
const totalPagar = document.getElementById("totalPagar");
const cantTicket = document.querySelector('#cantidad');

console.log(categoria.value);
console.log(totalPagar.innerText);
console.log("Ticket:"+ cantTicket.value);


categoria.addEventListener("change", function(){
	const valor= 200;
	
	const cat=categoria.value;
	const cant=parseInt(cantTicket.value);
	if(cant==NaN){
		cant=1;
	}
	
	console.log("opcion: " + cat);	
	console.log("Cantidad Ticket: " + cant);
	
	let descEstudiante=0
	let descTrainer=0;
	let descJunior =0;

	descEstudiante= (valor - valor * 0.8) * cant;
	descTrainer=(valor - valor * 0.5) * cant;
	descJunior= (valor - valor * 0.15) * cant;
	
	

	if (categoria.value == "estudiante"){
		totalPagar.innerText=`Total a Pagar: $${descEstudiante}`;
	} else if( categoria.value == "trainer"){
		totalPagar.innerText=`Total a Pagar: $${descTrainer}`;
	} else if (categoria.value == "junior"){
		totalPagar.innerText=`Total a Pagar: $${descJunior}`;
	}
});

cantTicket.addEventListener("change", function(){
	const valor= 200;
	
	const cat=categoria.value;
	const cant=parseInt(cantTicket.value);
	if(cant==NaN){
		cant=1;
	}
	
	console.log("opcion: " + cat);	
	console.log("Cantidad Ticket: " + cant);
	
	let descEstudiante=0
	let descTrainer=0;
	let descJunior =0;

	descEstudiante= (valor - valor * 0.8) * cant;
	descTrainer=(valor - valor * 0.5) * cant;
	descJunior= (valor - valor * 0.15) * cant;
	
	

	if (categoria.value == "estudiante"){
		totalPagar.innerText=`Total a Pagar: $${descEstudiante}`;
	} else if( categoria.value == "trainer"){
		totalPagar.innerText=`Total a Pagar: $${descTrainer}`;
	} else if (categoria.value == "junior"){
		totalPagar.innerText=`Total a Pagar: $${descJunior}`;
	}
});
