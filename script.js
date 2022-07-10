var color1 = document.querySelector('.firstColor');
var color2 = document.querySelector('.secondColor');
var css = document.querySelector('h3');
var body = document.getElementById("colorHex")

function setGradient(){
	body.style.background = "linear-gradient(to right, "
	+ color1.value
	+ ", " 
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

function logColors(){
	console.log("Color 1 is: "+ color1.value);
	console.log("Color 2 is: "+ color2.value);
	console.log("linear-gradient(to right," + color1.value + "," + color2.value+")");	
}

color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);


