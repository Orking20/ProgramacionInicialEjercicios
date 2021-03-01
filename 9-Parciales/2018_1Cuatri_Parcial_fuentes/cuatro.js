function mostrar()
{
	var numero1;
	var numero2;
	var resultado;

	numero1 = prompt("Ingrese un número: ")
	numero2 = prompt("Ingrese otro número: ")

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	if (numero1 == numero2)
	{
		numero1 = numero1 + ""; //Lo hago string para así se concatenan

		resultado = numero1 + numero2;
		alert(resultado);
	}
	else if (numero1 > numero2)
	{
		resultado = numero1 - numero2;
		alert(resultado);
	}
	else
	{
		resultado = numero1 + numero2;
		alert(resultado);

		if (resultado > 10)
		{
			alert("La suma es " + resultado + " y superó el 10");
		}
	}
}