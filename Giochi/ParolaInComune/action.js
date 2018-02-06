var daindovinare= new String();
var f=0;
var b=0;

function confirmDialog()
{
	//alert("Qui");
	var risp = true;
	var str=document.getElementById("field2").value;
	
	var lung = str.length;
	
	
	var lung2 = daindovinare.length;//alert(lung2);
	
	
	if (lung != lung2)
		risp = false;
	else{
		for (var i=0; i < lung; i++)
			if (str.charAt(i)!=daindovinare.charAt(i)){
				risp = false;
				break;
			}
		
	}
	if (risp)
		alert("Complimenti hai vinto");
	else
		alert("hai perso");
	
		
	
	
}

function Main(lettera) 
{	
  f++;
  
	
	if(f==1)
	{
	  document.getElementById("field2").value = "";
	}
	
    document.getElementById("field2").value += lettera;
	b++;
	
	
	

	if(b==daindovinare.length)
	{
		confirmDialog();
	}
	
	
}

 
 function cancella() {
var br=document.getElementById("field2").value;
 document.getElementById("field2").value=br.substr(0,br.length-1);
 b--;

} 
var img;
function estrai() {
	
	var a;
	a=Math.round(7*Math.random());
	var parole = new Array(["BIANCA","PARATI","ZUCCHERO","CREDITO","MENU","TIGRE"],["OCCHIALI","SCACCHI","LUCE","RE","24ORE","RAGGI"],["PETROLIO","LUNA","NERO","FONDO","SCIENZA","DESIDERI"],["LANA","TEMPERATO","SOFFIATO","CAMPANA","PALAZZO","FIBRA"],["LETTO","CADERE","DISTRIBUZIONE","SEGNARE","SENZA","PESCA"],["BIANCO","VEGETALE","DOLCE","FOSSILE","ATTIVO","CARTA"],["BIANCO","STUFA","COLPO","SPECIFICO","ARDORE","CONDUTTORE"],["SAPONE","DOLCE","PASSATA","GOLA","ALTA","BOCCA"]);
	var risultati= new Array("CARTA", "SOLE", "POZZO", "VETRO", "RETE","CARBONE","CALORE","ACQUA");	
	
    parole[a].toString();
	
	if (a==0)
	{
     daindovinare=risultati[0];
    document.getElementById("demo").innerHTML = parole[a][0];	
	document.getElementById("demo1").innerHTML = parole[a][1];
	document.getElementById("demo2").innerHTML = parole[a][2];
	document.getElementById("demo3").innerHTML = parole[a][3];
	document.getElementById("demo4").innerHTML = parole[a][4];	
	document.getElementById("demo5").innerHTML = parole[a][5];	
	img='Onda piccola verde.jpg';

    }

    else if(a==1)
	{
     daindovinare=risultati[1];
    document.getElementById("demo").innerHTML = parole[a][0];	
	document.getElementById("demo1").innerHTML = parole[a][1];
	document.getElementById("demo2").innerHTML = parole[a][2];
	document.getElementById("demo3").innerHTML = parole[a][3];
	document.getElementById("demo4").innerHTML = parole[a][4];	
	document.getElementById("demo5").innerHTML = parole[a][5];
	img='Onda piccola gialla.jpg';
    
	
    }

   else if(a==2) 
    {
	 daindovinare=risultati[2];	
    document.getElementById("demo").innerHTML = parole[a][0];	
	document.getElementById("demo1").innerHTML = parole[a][1];
	document.getElementById("demo2").innerHTML = parole[a][2];
	document.getElementById("demo3").innerHTML = parole[a][3];
	document.getElementById("demo4").innerHTML = parole[a][4];	
	document.getElementById("demo5").innerHTML = parole[a][5];	
	img='Onda piccola blu.jpg';
	
	
   }
   
   
    else if(a==3) 
    {
	daindovinare=risultati[3];	
    document.getElementById("demo").innerHTML = parole[a][0];	
	document.getElementById("demo1").innerHTML = parole[a][1];
	document.getElementById("demo2").innerHTML = parole[a][2];
	document.getElementById("demo3").innerHTML = parole[a][3];
	document.getElementById("demo4").innerHTML = parole[a][4];	
	document.getElementById("demo5").innerHTML = parole[a][5];
	img='Onda piccola verde.jpg';
	
	
   }
   
   
    else if(a==4) 
    {
	 daindovinare=risultati[4];	
    document.getElementById("demo").innerHTML = parole[a][0];	
	document.getElementById("demo1").innerHTML = parole[a][1];
	document.getElementById("demo2").innerHTML = parole[a][2];
	document.getElementById("demo3").innerHTML = parole[a][3];
	document.getElementById("demo4").innerHTML = parole[a][4];	
	document.getElementById("demo5").innerHTML = parole[a][5];	
	img='Onda piccola blu.jpg';
	 
   }
   
     else if(a==5) 
    {
	 daindovinare=risultati[5];	
    document.getElementById("demo").innerHTML = parole[a][0];	
	document.getElementById("demo1").innerHTML = parole[a][1];
	document.getElementById("demo2").innerHTML = parole[a][2];
	document.getElementById("demo3").innerHTML = parole[a][3];
	document.getElementById("demo4").innerHTML = parole[a][4];	
	document.getElementById("demo5").innerHTML = parole[a][5];	
	img='Onda piccola arancione.jpg';
	
	
	
   }
   
     else if(a==6) 
    {
	 daindovinare=risultati[6];	
    document.getElementById("demo").innerHTML = parole[a][0];	
	document.getElementById("demo1").innerHTML = parole[a][1];
	document.getElementById("demo2").innerHTML = parole[a][2];
	document.getElementById("demo3").innerHTML = parole[a][3];
	document.getElementById("demo4").innerHTML = parole[a][4];	
	document.getElementById("demo5").innerHTML = parole[a][5];	
	img='Onda piccola gialla.jpg';

	
   }
   
     else if(a==7) 
    {
	 daindovinare=risultati[7];	
    document.getElementById("demo").innerHTML = parole[a][0];	
	document.getElementById("demo1").innerHTML = parole[a][1];
	document.getElementById("demo2").innerHTML = parole[a][2];
	document.getElementById("demo3").innerHTML = parole[a][3];
	document.getElementById("demo4").innerHTML = parole[a][4];	
	document.getElementById("demo5").innerHTML = parole[a][5];	
	img="Onda piccola gialla.jpg";


   }
   
   nascosta = asterischi(daindovinare);

   document.getElementById("field2").value = nascosta;
   
   }
   
function onda(){
	estrai();
	document.write("<img src='\Onde definitive\\" + img + "'>");
	}

function asterischi(m) {


   nascosta = "";

   nrLettere = m.length;

   for (var i = 0; i < nrLettere; i ++)
   {
	   nascosta += "*";
   }

   return nascosta;

 }


