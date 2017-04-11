
var soccer= document.getElementById("soccer");
soccer.addEventListener("click", mostrarSoccer);

function mostrarSoccer(){
	var canchaSoccer= document.getElementById("canchaSoccer");
	canchaSoccer.style.display="block";
}

var basketball= document.getElementById("basketball");
 	basketball.addEventListener("click", mostrarBasketball);

 function mostrarBasketball(){
 	var canchaBasketball= document.getElementById("canchaBasketball");
 	canchaBasketball.style.display="block";
 }	

 var tennis= document.getElementById("tennis");
 tennis.addEventListener("click", mostrarTennis);

 function mostrarTennis(){
 	var canchaTennis=document.getElementById("canchaTennis");
 	canchaTennis.style.display= "block";
 }
