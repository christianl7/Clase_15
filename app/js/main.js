window.addEventListener("load", function(event) {
	// Acá va lo que se va a hacer despuésn de que se cargue la página
	TweenMax.to("#preloader", 1, {
		ease: Power2.easeOut,
		delay: 1, //Este atributo retarda la animacion
		opacity: 0, //Le da transparencia al elemento
		scaleY: "5", // Escala en Y
		scaleX: "5", // Escala en X
		display: "none" //Este atributo sirve para ocultar el elemento
	});
});

var saludo = "hola";

var button = document.getElementById('toggle-menu');  //Los parentesis invocan una funcion REGLA DIORO
	button.addEventListener("click", function(event){
		TweenMax.to("#nav_container", 1, {
		x: "0%", //se manda a 0 para que sea el punto de origen, 100% seria hasta el otro lado
	});
});

var buttonClose = document.getElementById('close_button');  //Los parentesis invocan una funcion REGLA DIORO
	buttonClose.addEventListener("click", function(event){
		TweenMax.to("#nav_container", 1, {
		x: "-100%", //se manda a 0 para que sea el punto de origen, 100% seria hasta el otro lado
	});
});