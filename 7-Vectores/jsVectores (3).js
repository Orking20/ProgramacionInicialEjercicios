function mostrar()
{
	var numeros = [];
	var numerosIngresados;

	for(var i = 1; i <= 10; i++)
	{
		numerosIngresados = parseInt(prompt("Ingrese un número: "));
		numeros.push(numerosIngresados);
	}
	for(var i = 0; i < numeros.length; i++)
	{
		document.write(numeros[i] + "<br>");
	}
}//FIN DE LA FUNCIÓN