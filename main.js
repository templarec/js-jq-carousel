//cliccando le frecce cambia immagine
//frecce sono : fa-angle-left, fa-angle-right
//cambiano i cerchietti
//le immagini vanno a rotazione
//creo evento click sulle frecce
//dichiaro variabili e ci metto le classi delle frecce
var nextArrow = $(".fa-angle-right");
var prevArrow = $(".fa-angle-left");
var currentImage = $(".images img");
var currentCircle = $(".fa-circle");
var indice = 0;

//eventi click
nextArrow.click(function () {
		if (currentImage.hasClass("active")) {
			if (indice < 3){
				indice++;
			} else {
				indice = 0;
			}
			currentImage.removeClass("active");
			currentCircle.removeClass("active");
			currentImage.eq(indice).addClass("active");
			currentCircle.eq(indice).addClass("active");
			console.log(indice);
		}
	});

prevArrow.click(function () {
	if (currentImage.hasClass("active")) {
		if (indice > 0) {
			indice--;
		} else {
			indice = 3;
		}
		currentImage.removeClass("active");
		currentCircle.removeClass("active");
		currentImage.eq(indice).addClass("active");
		currentCircle.eq(indice).addClass("active");
		console.log(indice);
	}
});
//eventi press tastiera arrows
$(document).keydown(function (evento) {
	if (evento.keyCode == 39){
		if (currentImage.hasClass("active")) {
			if (indice < 3){
				indice++;
			} else {
				indice = 0;
			}
			currentImage.removeClass("active");
			currentCircle.removeClass("active");
			currentImage.eq(indice).addClass("active");
			currentCircle.eq(indice).addClass("active");
			console.log(indice);
		}
	}
});

$(document).keydown(function (evento) {
	if (evento.keyCode == 37){
		if (currentImage.hasClass("active")) {
			if (indice > 0) {
				indice--;
			} else {
				indice = 3;
			}
			currentImage.removeClass("active");
			currentCircle.removeClass("active");
			currentImage.eq(indice).addClass("active");
			currentCircle.eq(indice).addClass("active");
			console.log(indice);
		}
	}
});

//bonus
var nav = $(".nav i");

nav.click(function (){
	currentImage.removeClass("active"); //tolgo la classe active a tutti gli <img>
	currentCircle.removeClass("active"); //tolgo la classe active a tutti gli <i>
	//prendo l'iesimo elemento immagine in base all'iesimo elemento icona pallino cliccato(this)
	//e assegno active a quell'img e icona pallino
	currentImage.eq(nav.index(this)).addClass("active");
	currentCircle.eq(nav.index(this)).addClass("active");

});
