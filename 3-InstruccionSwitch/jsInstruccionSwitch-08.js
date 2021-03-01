function mostrar()
{
	var destinoIngresado = document.getElementById("txtIdDestino").value;
	
	switch (destinoIngresado)
	{
		case "Bariloche":
		{
			alert("FRÍO");
			break;
		}
		case "Cataratas":
		{
			alert("CALOR");
			break;
		}
		case "Mar del plata":
		{
			alert("CALOR")
			break;
		}
		case "Ushuaia":
		{
			alert ("FRÍO");
			break;
		}
	}
}//FIN DE LA FUNCIÓN