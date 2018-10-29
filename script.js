var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButtom = document.querySelector("#random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomColor () {
	var number = Math.floor((Math.random() * 16777215) + 0); //random number form 0 to #ffffff
	return "#"+number.toString(16);
}

function assignRandomColors() {
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
}

color1.value = "#ff0000"; // get current colors
color2.value = "#ffff00";

setGradient(); // RE-assign body background colors
css.textContent = body.style.background + ";"; // show the current background text

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButtom.addEventListener("click", assignRandomColors);