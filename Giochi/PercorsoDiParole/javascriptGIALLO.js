var frasig = "FONTE MONTE ROSA ARSO ARIO MARIO MARINO RAMINO CAMINO CAMION MOTRICE MATRICE TERMICA ENERGIA";
var introduzioni = "Partendo da FONTE devi arrivare a ENERGIA, cambiando la sequenza delle parole sottoelencate. Nel percorso ogni parola deve essere collegata a quella che precede o segue con criteri diversi: aggiunta o scarto di una lettera, anagramma, associazione di idee.";

var frasi = "FONTE ARIO ARSO CAMINO CAMION MARINO MARIO MATRICE MONTE MOTRICE RAMINO ROSA TERMICA ENERGIA";

var immagini="Immagini/Giallo.png";

var frase = "";
var fraseg = "";
var c;

var a = new Array();
var b = new Array();

function separa(){
	frase = frasi;
	fraseg = frasig;
	document.body.style.backgroundImage = 'url('+immagini+')';
	document.getElementById("intro").innerHTML = introduzioni;
	var i,s,s2,ultima, prima,i2;
	a = frase.split(" ");
	b = fraseg.split(" ");
	ultima = a.length-1; //alla riga 36: se si usa a.length-1 non funziona
	s2 = "";
	s = '<div  class="draggable2" id="b'+0+'"> <p class="testo"  id="ti'+0+'">'+a[0]+'</p> </div>';
	s2 = s2 + s;
	for(i=0;i<a.length-2;i++){
		i2 = i+1;
		s = '<div  class="draggable" ondrop="drop('+i2+')" ondragover="allowDrop(event)" "id="b'+i2+'"> <p class="testo"  id="ti'+i2+'">'+ " " +'</p></div>';
		s2 = s2 + s;
	}
	s = '<div  class="draggable2" id="b'+ultima+'"><p class="testo"  id="ti'+ultima+'">'+a[ultima]+'</p> </div>';
	s2 = s2 + s;
	
	s2 = s2 + "<br>" + "<br>";
	
	var div = document.createElement('div');
	div.innerHTML = s2;
	div.id = "bottoni";
	var clone = div.cloneNode(true);
	document.body.appendChild(clone);
	separa2();
}

function separa2(){
	var i,s,s2,i2;
	s2 = '';
	for(i=0;i<a.length-2;i++){
		i2 = i+1;
		s = '<div  class="draggable" draggable="true" ondragstart="drag('+i2+')" " id="b2'+i2+'"><p class="testo"  id="ti2'+i2+'">'+a[i2]+'</p></div>';
		s2 = s2 + s;
	}
	s2 = s2 + "<br>";
	
	var div = document.createElement('div');
	div.innerHTML = s2;
	div.id = "bottoni";
	var clone = div.cloneNode(true);
	document.body.appendChild(clone);
	document.getElementById("img-fondo").src = immagini[1];
}

function check(){
	var tent = new Array();

	for(var i=0;i<a.length;i++){
		tent[i] = document.getElementById("ti"+i).innerHTML;
	}
	var s = tent.join(" "); //inserisce un array in una stringa, separando ogni valore da uno spazio (in questo caso)
	if(s == fraseg){
		//window.alert("Hai vinto");
		vittoria();
	}
}

function allowDrop(ev) {
    ev.preventDefault();
}

var stringa1 = "";
var stringa2 = "";
var indice = "";
var posizioneStringa1;

function drag(ev) {
    stringa1 = document.getElementById("ti2"+ev).innerHTML;
	indice = "ti2"+ev;
	posizioneStringa1 = ev;
	
}

function drop(ev) {
	if(stringa1 == b[ev]){
		stringa2 = document.getElementById("ti"+ev).innerHTML;
		document.getElementById("ti"+ev).innerHTML = stringa1;
		document.getElementById(indice).innerHTML = stringa2;

		document.getElementById("b2"+posizioneStringa1).style.display = "none";	
		check();

	}
}


function vittoria(){
	document.getElementById("introduzione").style.display = "none";
	document.getElementById("vittoria").style.display = "block";
    for(i=0;i<a.length;i++){
    document.getElementById("b2"+i).style.display = "none"; //questi ultimi due non funzionano
    document.getElementById("b"+i).style.display = "none";		
	}
}