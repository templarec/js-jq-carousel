//cliccando le frecce cambia immagine
//frecce sono : fa-angle-left, fa-angle-right
//cambiano i cerchietti
//le immagini vanno a rotazi
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

