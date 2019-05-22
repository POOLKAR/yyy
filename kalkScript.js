function hindKokku(){
	var kogus=document.getElementById("kogus");
	var vastus=document.getElementById("hind");
	var jook=document.getElementById("jook").value;
	vastus.innerHTML="Sa valisid" + kogus.value + "saia ja "+
	jook.value + "jook";
	
	vastus.innerHTML="Palun maksa "+(kogus.value*1.2+1).toFixed(2)+ " euro "+ "." + " Sa valisid " + jook + " jook ";

}

function valutakogus() {
	var valutakogus = document.getElementById("sumkalk"); 
	var eur = document.getElementById("eur"); 
	var valuta = document.getElementById("valuta"); 
	var kurs = 0.0; 
	var vatext = ""; 
}
	
	
	
	
	switch(valuta.value)
	{
		case "rub": kurs = 77.0113772; vatext = "rublid"; break;
		case "eur": kurs = 1.0; vatext = "euro"; break;
		case "usd": kurs = 1.157481; vatext = "dollar"; break;
		case "sek": kurs = 10.3898479; vatext = "kronid"; break;
		
	}
	
	summaaaa = parseFloat((eur.value * kurs).toFixed(6));
	valutakogus.innerHTML = summaaaa + " " + vatext;
	
}
