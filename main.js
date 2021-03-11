//cliccando le frecce cambia immagine
//frecce sono : fa-angle-left, fa-angle-right
//cambiano i cerchietti
//le immagini vanno a rotazione


//creo evento click sulle frecce
//dichiaro variabili e ci metto le classi delle frecce
var nextArrow = $(".fa-angle-right");
var prevArrow = $(".fa-angle-left");
var currentImage = $(".images img");
//eventi click
nextArrow.click(function () {

	currentImage.removeClass("active");




});

prevArrow.click(function () {
	
});

