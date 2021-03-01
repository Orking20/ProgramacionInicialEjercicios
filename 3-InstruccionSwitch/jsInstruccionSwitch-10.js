function mostrar()
{
	var estacionIngresada = document.getElementById("txtIdEstacion").value;
	var destino = document.getElementById("txtIdDestino").value;

	switch (estacionIngresada)
	{
		case "Invierno":
		{
			switch (destino)
			{
				case "Bariloche":
				{
					alert("Se viaja");
					break;
				}
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
				{
					alert("No se viaja");
					break;
				}
			}
			break;
		}
		case "Verano":
		{
			switch (destino)
			{
				case "Mar del plata":
				case "Cataratas":
				{
					alert("Se viaja");
					break;
				}
				case "Bariloche":
				case "Cordoba":
				{
					alert("No se viaja");
					break;
				}
			}
			break;
		}
		case "Otoño":
		{
			switch (destino)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
				{
					alert("Se viaja");
					break;
				}
			}
			break;
		}
		case "Primavera":
		{
			switch (destino)
			{
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
				{
					alert("Se viaja");
					break;
				}
				case "Bariloche":
				{
					alert("No se viaja");
					break;
				}
			}
			break;
		}
	}
}//FIN DE LA FUNCIÓN

//Duda: Si tengo un default al final para poner todos los "No se viaja" no me lo toma