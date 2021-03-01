function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho = prompt("Ingrese el ancho del rectángulo");
	largo = prompt("Ingrese el largo del rectángulo");

	perimetro = 2 * largo + 2 * ancho;

	alert("El perímetro del rectángulo es: " + perimetro);
}