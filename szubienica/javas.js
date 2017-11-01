var haslo = "W Ruhu CICHO albo TAK lub NIE";
var dlugosc = haslo.length;
var ok = new Audio("ok.mp3");
var no = new Audio("no.mp3");

var haslo1 ="";
var dupa = 1;

for(i=0; i<dlugosc; i++){
	if(haslo.charAt(i) ==" ")haslo1 = haslo1 + " ";
	else haslo1 = haslo1 + "-";
	
}
  function wypisz_haslo(){


/*podmien();*/
	document.getElementById("plansza").innerHTML = haslo1;
	
   }
/*function podmien(){
 var zmi = haslo1.charAt(3);
    if(haslo1.charAt(0) == "W"){
      haslo1.charAt(7) = "j";
        
    }
}*/
window.onload = start;

var litery = new Array(36);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I"; 
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";
litery[35] = "u";


 function start(){
	 
 ok.play();
    var tresc ="";
	for (i=0; i<=35; i++)
	{
		var element = "lit" + i;
		tresc = tresc + '<div class="literki" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
		if ((i+1)%7 == 0) tresc = tresc + '<div style="clear:both;"></div>';
	}
     
	document.getElementById("alfabet").innerHTML = tresc;
	wypisz_haslo();
	

   
 }
   String.prototype.ustawZnak = function(miejsce, znak, ch)
   {
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + ch + this.substr(miejsce+1);
   }
       String.prototype.stawZnak = function(miejsce, ch)
   {
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + ch + this.substr(miejsce+1);
   }
   function sprawdz(nr){
	var trafiona = false;
	
	for(i=0; i<dlugosc; i++){
		
		
		
	if (haslo.charAt(i).toUpperCase()== litery[nr].toUpperCase()){
	
		haslo1 = haslo1.ustawZnak(i,litery[nr],haslo.charAt(i));
		
	
	    var trafiona = true;
       
	}
	}
      /* for(i=0; i<dlugosc; i++){
        if (haslo.charAt(0) == litery[29]){
            alert("gowno");
       	haslo1 = haslo1.stawZnak(i,litery[nr]);
     var trafionaa = true;
       
   }
   }*/
  /* if (trafionaa == true){
       var element = "lit" + nr;
       
       
   }   */

	if (trafiona == true){
       ok.play();
		var element = "lit" + nr;
		document.getElementById(element).style.color = "#115511";
       document.getElementById(element).style.background = "#229922";
        document.getElementById(element).style.border = "#115511";
		 // $("#plansza").addClass("blue");
		 //haslo.charAt(i).addClass("blue");   Czemu po dodaniu addClass nie chce działać????????????
		 
		 wypisz_haslo();
	}else{
       no.play();
       var element = "lit" + nr;
		document.getElementById(element).style.color = "black";
      dupa++;
		var obraz = "img/"+ dupa + ".jpg";
		document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" />';
       
		
	}
		if (haslo == haslo1)
	document.getElementById("alfabet").innerHTML  = "Tak jest! Podano prawidłowe hasło: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
       
		if (dupa>=8)
	document.getElementById("alfabet").innerHTML  = "Przegrana! Prawidłowe hasło: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';

	
}
// function trafienie(){
	// if (haslo.charAt(i) == "C"){
		// charAt(0) = "B";
	// }else{
		// alert("Gosh");
	
// }