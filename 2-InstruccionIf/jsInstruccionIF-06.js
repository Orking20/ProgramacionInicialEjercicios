function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad >= 18)
	{
		alert("Eres mayor de edad");
	}
	else if (edad >= 13 && edad <= 17)
	{
		alert("Eres adolescente");
	}
	else
	{
		alert("Eres niño/a");
	}
}//FIN DE LA FUNCIÓN