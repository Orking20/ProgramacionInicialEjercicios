function mostrar()
{
	var numero;
	var primo;

	numero = prompt("Ingrese un número.");

	if (numero == 2)
	{
		alert("Es un número primo.")
	}
	else if (numero > 1)
	{
		for (var i = 2; i < numero; i++)
		{
			if (numero % i == 0)
			{
				primo = false;
				break;
			}
			else
			{
				primo = true;
			}
		}
		if (primo == true)
		{
			alert("Es un número primo.")
		}
		else
		{
			alert("No es un número primo.")
		}
	}
	else
	{
		alert("No es un número primo.");
	}
}//FIN DE LA FUNCIÓN