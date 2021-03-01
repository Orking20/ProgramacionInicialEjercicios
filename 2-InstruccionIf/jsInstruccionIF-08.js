function mostrar()
{
	var edad;
	var estCivil;

	edad = document.getElementById("txtIdEdad").value;
	estCivil = document.getElementById("estadoCivil").value;

	edad = parseInt(edad);

	if (edad >= 18 && estCivil == "Soltero")
	{
		alert("Es soltero y no es menor");
	}
}//FIN DE LA FUNCIÓN