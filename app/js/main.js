window.addEventListener("load", function(event) {
	// Ac� va lo que se va a hacer despu�sn de que se cargue la p�gina
	TweenMax.to("#preloader", 3, {
		ease: Power2.easeOut,
		delay: 1,
		opacity: 0,
		scaleY: "5",
		scaleX: "5",
		display: "none" //Este atributo sirve para ocultar el elemento
	});
});

var saludo = "hola";