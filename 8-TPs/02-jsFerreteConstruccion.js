/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo ()
{
	var largo;
	var ancho;
	var cantAlambre;

	largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	cantAlambre = ((largo * 2) + (ancho * 2)) * 3;

	alert("La cantidad de alambre a comprar es: " + cantAlambre);
}

function Circulo ()
{
	var radio;
	var cantAlambre; //Igual a la circunsferencia

	radio = document.getElementById("txtIdRadio").value;

	radio = parseInt(radio);

	cantAlambre = ((radio * 2) * Math.PI) * 3;

	alert("La cantidad de alambre a comprar es: " + cantAlambre);
}

function Materiales ()
{
	var largo;
	var ancho;
	var cemento = 2;
	var cal = 3;
	var totalCemento;
	var totalCal;

	largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	totalCemento = cemento * largo * ancho;
	totalCal = cal * largo * ancho;

	alert("Se necesitarán " + totalCemento + " bolsas de cemento\nSe necesitarán " + totalCal + " bolsas de cal.")
}