function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador = 0;
	acumulador = 0;
	
	numeroIngresado = prompt("Ingrese un número");
	numeroIngresado = parseInt(numeroIngresado);
	acumulador += numeroIngresado;

	while (contador != 4)
	{
		numeroIngresado = prompt("Ingrese otro número");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador += numeroIngresado;
		contador ++;
	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / 5;
}//FIN DE LA FUNCIÓN