window.addEventListener("load", function(event) {
	// Acá va lo que se va a hacer despuésn de que se cargue la página
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