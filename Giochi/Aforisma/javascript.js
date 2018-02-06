var frasi = ["Non ereditiamo la terra dai nostri antenati ma la prendiamo in prestito dai nostri figli", "Non conosciamo mai il valore dell' acqua fino a quando il pozzo è asciutto", "Cambia prima di essere costretto a farlo"];
var suggerimenti = ["3 – 10 – 2 – 5 – 3 – 6 – 8 – 2 – 2 – 9 – 2 – 8 – 3 – 6 – 5.", "3 – 10 – 3 – 2 – 6 – 4'5 – 4 – 1 – 6 – 2 – 5 – 1 – 8.", "6 – 5 – 2 – 6 – 9 – 1 – 5."];
var introduzioni = [
"Devi ricostruire questo antico proverbio navajo, utilizzando le parole elencate sotto e sapendo che il diagramma corretto è:",
"Devi ricostruire questo aforisma dello scrittore inglese del ‘700 Thomas Fuller, utilizzando le parole elencate sotto e sapendo che il diagramma corretto è:",
"Devi ricostruire questa considerazione di Jack Welck, ex CEO della General Electric, utilizzando le parole elencate sotto e sapendo che il diagramma corretto è:"];
var autori = [
"-Antico proverbio Navajo",
"-Thomas Fuller",
"-Jack Welck"];

var immaginiSfondo=[
"Immagini/OndaVerde.jpg",
"Immagini/OndaBlu.jpg",
"Immagini/OndaGialla.jpg"
];

var immaginiIndietro=[
"Immagini/IndietroVerde.png",
"Immagini/IndietroBlu.png",
"Immagini/IndietroGialla.png"
];
var immaginiAvanti=[
"Immagini/AvantiVerde.png",
"Immagini/AvantiBlu.png",
"Immagini/AvantiGialla.png"
];
var immaginiHome=[
"Immagini/HomeVerde.png",
"Immagini/HomeBlu.png",
"Immagini/HomeGialla.png"
];
var immaginiIndex=[
"Immagini/IndexVerde.png",
"Immagini/IndexBlu.png",
"Immagini/IndexGialla.png"
];

var colori=[
"#1f9900",
"#035085",
"#ffcc00"
];

var frase = "";

var a = new Array();
var posizioni = new Array();


function separa(){
	var c = Math.floor(Math.random() * 3);
	//var c = 2;
	frase = frasi[c];
	document.body.style.backgroundImage = 'url('+immaginiSfondo[c]+')';
	document.getElementById("intro").innerHTML = introduzioni[c];
	document.getElementById("sugg").innerHTML = suggerimenti[c];
	document.getElementById("frase-vittoria").innerHTML = frase+".";
	document.getElementById("buondio").style.borderColor = colori[c];
	document.getElementById("imgHome").src = immaginiHome[c];
	document.getElementById("imgIndex").src = immaginiIndex[c];
	document.getElementById("imgPrev").src = immaginiIndietro[c];
	document.getElementById("imgNext").src = immaginiAvanti[c];

	frase = frase.toUpperCase();
	var i,s,s2;
	a = frase.split(" ");
	a = a.sort();
	s2 = '';
	for(i=0;i<a.length;i++){
		s = '<div  class="draggable" draggable="true" ondragstart="drag('+i+')" ondrop="drop('+i+')" ondragover="allowDrop(event)" id="b'+i+'"><p class="testo"  id="ti'+i+'">'+a[i]+'</p></div>';
		s2 = s2 + s;
	}
	s2 = s2 + "<br>";
	
	var div = document.createElement('div');
	div.innerHTML = s2;
	div.id = "bottoni";
	var clone = div.cloneNode(true);
	document.body.appendChild(clone);
	document.getElementById("bottoni").style.align = "center";
	//document.getElementById("img-fondo").src = immagini[c];
}

function check(){
	var tent = new Array();
	for(var i=0;i<a.length;i++){
		tent[i] = document.getElementById("ti"+i).innerHTML;
	}
	var s = tent.join(" ");
	if(s == frase)
		vittoria();
}

function allowDrop(ev) {
    ev.preventDefault();
}


var stringa1 = "";
var stringa2 = "";
var indice = "";

function drag(ev) {
    stringa1 = document.getElementById("ti"+ev).innerHTML;
	indice = "ti"+ev;
	
}

function drop(ev) {
    stringa2 = document.getElementById("ti"+ev).innerHTML;
	document.getElementById("ti"+ev).innerHTML = stringa1;
	document.getElementById(indice).innerHTML = stringa2;
	check();
}

function vittoria(){
	var modal = document.getElementById('myModal');
	var span = document.getElementsByClassName("close")[0];
	modal.style.display = "block";
	span.onclick = function() {
	modal.style.display = "none";
	}

	window.onclick = function(event) {
	if (event.target == modal) {
	modal.style.display = "none";
		}
	}
}