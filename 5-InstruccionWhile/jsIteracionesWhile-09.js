/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	numeroIngresado = prompt("Ingrese un número.");
	numeroIngresado = parseInt(numeroIngresado);
	numeroMinimo = numeroIngresado;
	numeroMaximo = numeroIngresado;

	do
	{
		numeroIngresado = prompt("Ingrese un número.");
		numeroIngresado = parseInt(numeroIngresado);
		if (numeroIngresado < numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
		}
		else if (numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}

		respuesta = confirm("Desea continuar?");
	}while (respuesta == true);

	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}//FIN DE LA FUNCIÓN