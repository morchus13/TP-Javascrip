
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
	const valor= 1000;
	let cat=categoria.value;
	let cant= cantTicket.value;
	console.log("opcion: " + cat);	
	
	let descEstudiante= valor * 80/100 * cant + valor;
	let descTrainer= valor * 50 / 100 * cant + valor;
	let descJunior= valor * 15 / 100 * cant + valor;



	if (categoria.value == "estudiante"){
		totalPagar.innerText=`Total a Pagar: $${descEstudiante}`;
	} else if( categoria.value == "trainer"){
		totalPagar.innerText=`Total a Pagar: $${descTrainer}`;
	} else if (categoria.value == "junior"){
		totalPagar.innerText=`Total a Pagar: $${descJunior}`;
	}

});

cantTicket.addEventListener("change", function(){
	const valor= 1000;
	let cat=categoria.value;
	let cant= cantTicket.value;
	console.log("opcion: " + cat);	
	
	let descEstudiante= valor * 80/100 * cant;
	let descTrainer= valor * 50 / 100 * cant;
	let descJunior= valor * 15 / 100 * cant;



	if (categoria.value == "estudiante"){
		totalPagar.innerText=`Total a Pagar: $${descEstudiante}`;
	} else if( categoria.value == "trainer"){
		totalPagar.innerText=`Total a Pagar: $${descTrainer}`;
	} else if (categoria.value == "junior"){
		totalPagar.innerText=`Total a Pagar: $${descJunior}`;
	}

});
