function mostrar()
{
	var numeros = [];
	var numerosIngresados;
	var resultado = 0;

	for(var i = 0; i < 10; i++)
	{
		numerosIngresados = parseInt(prompt("Ingrese un número: "));
		numeros.push(numerosIngresados);
	}
	for(var i = 0; i < numeros.length; i++)
	{
		document.write(numeros[i] + "<br>");
		resultado += numeros[i];
	}
	document.write("<br>La suma de todos los números es: " + resultado);
}//FIN DE LA FUNCIÓN