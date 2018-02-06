var soluzione = new String("");
var utente = new String ("");
var posizione = 0;
var visibile = new String("");
var appVisibile = new String ("");
	
function mostraCaratteri(){
	visibile = new String ("");
	utente = new String ("");
	posizione = 0;
	if(document.getElementById("img").getAttribute('src') == "img/rebus_imballaggi.png"){
        appVisibile = "IMBALLAGGI NON NECESSARI";
		soluzione = "IMBALLAGGINONNECESSARI";
	}else if (document.getElementById("img").getAttribute('src') == "img/rebus_laboratorio.png"){
        appVisibile = "LABORATORIO DI ANALISI CHIMICHE";
		soluzione = "LABORATORIODIANALISICHIMICHE";
	}else if(document.getElementById("img").getAttribute('src') == "img/rebus_cogenerazione.png"){
        appVisibile = "CENTRALE DI COGENERAZIONE";
		soluzione = "CENTRALEDICOGENERAZIONE";
	}else if(document.getElementById("img").getAttribute('src') == "img/rebus_ambiente.png"){
        appVisibile = "TUTELARE L'AMBIENTE E' IMPORTANTE";
		soluzione = "TUTELARELAMBIENTEEIMPORTANTE";
	}
	setVisibile();
}

function setVisibile(){
	var i = 0;
	for (i = 0; i < appVisibile.length; i++){	
		if (appVisibile[i] == " "){
			visibile += "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
		}else{
			if (appVisibile[i] == "'"){
				visibile += "'";
			}else{
				visibile += "_ ";	
			}
		}
	}	
	document.getElementById("lettere").innerHTML = visibile;
}

function setCharAt(str,index,chr) {
	if(index > str.length-1) return str;
	return str.substr(0,index) + chr + str.substr(index+1);
}

function inserisciLettera(lettera){
	if (posizione >= soluzione.length){
		return;
	}
	utente += lettera;	
    //window.alert(utente);
	visibile = visibile.replace('_', lettera);
	document.getElementById("lettere").innerHTML = visibile;
	posizione++;
	if (utente == soluzione){
		soluzioneCorretta();
	}
}

function cancellaLettera(){
    if (posizione >= 0){
        utente = setCharAt(utente, posizione - 1, "");
        //window.alert(utente);
		var i;
		for (i = visibile.length; i >= 0; i--){
			if (visibile.charCodeAt(i) >= 65 && visibile.charCodeAt(i) <= 90){
				visibile = setCharAt(visibile, i, "_");
				break; 
			}
		}
		document.getElementById("lettere").innerHTML = visibile;
        posizione--;
    }
}

function controlla(){
	var colorePresente;
    colorePresente = document.getElementById("tabella").style.border;
	if(utente == soluzione){
		soluzioneCorretta();
	}else{
		var modal = document.getElementById('myModal');
		var span = document.getElementsByClassName("close")[0];
		modal.style.display = "block";
		document.getElementById("risultato").src = "img/sconfitta.png"; 
		document.getElementById("scritta").innerHTML = "La soluzione e' errata! Riprova!";
		mostraCaratteri();
		span.onclick = function() {
			modal.style.display = "none";
		}
		setTimeout(function(){
			modal.style.display = "none";
		}, 3000);
    }
}

function soluzioneCorretta(){
	var modal = document.getElementById('myModal');
	var span = document.getElementsByClassName("close")[0];
	modal.style.display = "block";
	document.getElementById("risultato").src = "img/vittoria.png"; 
	document.getElementById("scritta").innerHTML = "Complimenti! Ora puoi passare al gioco successivo";
	span.onclick = function() {
		modal.style.display = "none";
	}	
	setTimeout(function(){
		modal.style.display = "none";
		swapRebus();
	}, 3000);
}

function swapRebus(){
	if (document.getElementById("img").getAttribute('src') == "img/rebus_imballaggi.png"){
		document.getElementById("img").src = "img/rebus_laboratorio.png";
		document.getElementById("titolo").innerHTML = "Rebus n. 2 <br> (11 2 7 8)";
		document.getElementById("titolo").style.fontSize = "2.5em";
		document.getElementById("titolo").style.color = "#ffd100";
		document.getElementById("foot").style.backgroundImage = "url(img/onda_gialla.png)";
		document.getElementById("avanti").src = "img/freccia_gialla.png";
		document.getElementById("indice").src = "img/indice_giallo.png";
	}else if (document.getElementById("img").getAttribute('src') == "img/rebus_laboratorio.png"){
		document.getElementById("img").src = "img/rebus_cogenerazione.png";
		document.getElementById("titolo").innerHTML = "Rebus n. 3 <br> (8 2 13)";
		document.getElementById("titolo").style.fontSize = "2.5em";
		document.getElementById("titolo").style.color = "#da291c";
		document.getElementById("foot").style.backgroundImage = "url(img/onda_rossa.png)";
		document.getElementById("avanti").src = "img/freccia_rossa.png";
		document.getElementById("indice").src = "img/indice_rosso.png";
	}else if(document.getElementById("img").getAttribute('src') == "img/rebus_cogenerazione.png"){
		document.getElementById("img").src = "img/rebus_ambiente.png";
		document.getElementById("titolo").innerHTML = "Rebus n. 4 <br> (8 1'8 1 10)";
		document.getElementById("titolo").style.fontSize = "2.5em";
		document.getElementById("titolo").style.color = "#00b140";
		document.getElementById("foot").style.backgroundImage = "url(img/onda_verde.png)";
		document.getElementById("avanti").src = "img/freccia_verde.png";
		document.getElementById("indice").src = "img/indice_verde.png";
	}else if(document.getElementById("img").getAttribute('src') == "img/rebus_ambiente.png"){
		document.getElementById("img").src = "img/rebus_imballaggi.png";
		document.getElementById("titolo").innerHTML = "Rebus n. 1 <br> (10 3 9)";
		document.getElementById("titolo").style.fontSize = "2.5em";
		document.getElementById("titolo").style.color = "#0033A0";
		document.getElementById("foot").style.backgroundImage = "url(img/onda_blu.png)";
		document.getElementById("avanti").src = "img/freccia_blu.png";
		document.getElementById("indice").src = "img/indice_blu.png";
	}
	mostraCaratteri();
}