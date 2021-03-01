/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("Ingrese un número entre 0 y 9.");

	if(isNaN(numeroIngresado))
	{
		alert("Esto no es un número");
	}
	else
	{
		while (numeroIngresado < 0 || numeroIngresado > 9)
		{
			numeroIngresado = prompt("Ingrese un número entre 0 y 9.");
		}

		document.getElementById("txtIdNumero").value = numeroIngresado;
	}
}//FIN DE LA FUNCIÓN