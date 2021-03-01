function mostrar()
{
	edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad >= 18)
	{
		alert("Eres mayor de edad");
	}
	else
	{
		alert("Eres menor de edad");
	}
}//FIN DE LA FUNCIÓN