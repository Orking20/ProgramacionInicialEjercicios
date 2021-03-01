/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("Ingrese el número clave.");
	
	while (claveIngresada != "utn750")
	{
		claveIngresada = prompt("Número incorrecto. Ingrese el número clave.")
	}
}//FIN DE LA FUNCIÓN