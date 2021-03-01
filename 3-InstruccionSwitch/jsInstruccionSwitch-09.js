function mostrar()
{
	var estacionIngresada = document.getElementById("txtIdEstacion").value;
	var destino = document.getElementById("txtIdDestino").value;
	
	var tarifaBase = 15000
	var valorModificado;
	var resultado;

	switch (estacionIngresada)
	{
		case "Invierno":
		{
			switch (destino)
			{
				case "Bariloche":
				{
					valorModificado = (tarifaBase * 20) / 100;
					resultado = tarifaBase + valorModificado;
					alert(resultado);
					break;
				}
				case "Cataratas":
				case "Cordoba":
				{
					valorModificado = (tarifaBase * 10) / 100;
					resultado = tarifaBase - valorModificado;
					alert(resultado);
					break;
				}
				case "Mar del plata":
				{
					valorModificado = (tarifaBase * 20) / 100;
					resultado = tarifaBase - valorModificado;
					alert(resultado);
					break;
				}
			}
			break;
		}
		case "Verano":
		{
			switch (destino)
			{
				case "Bariloche":
				{
					valorModificado = (tarifaBase * 20) / 100;
					resultado = tarifaBase - valorModificado;
					alert(resultado);
					break;
				}
				case "Cataratas":
				case "Cordoba":
				{
					valorModificado = (tarifaBase * 10) / 100;
					resultado = tarifaBase + valorModificado;
					alert(resultado);
					break;
				}
				case "Mar del plata":
				{
					valorModificado = (tarifaBase * 20) / 100;
					resultado = tarifaBase + valorModificado;
					alert(resultado);
					break;
				}
			}
			break;
		}
		case "Otoño":
		case "Primavera":
		{
			switch (destino)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
				{
					valorModificado = (tarifaBase * 10) / 100;
					resultado = tarifaBase + valorModificado;
					alert(resultado);
					break;
				}
				case "Cordoba":
				{
					alert(tarifaBase);
					break;
				}
			}
		}
		break;
	}
}//FIN DE LA FUNCIÓN