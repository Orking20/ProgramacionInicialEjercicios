function mostrar()
{
	var numero;
	var cantDivisores = 0;

	numero = prompt("Ingrese un número.");

	for (var i = 1; i <= numero; i++)
	{
		if (numero % i == 0)
		{
			alert(i);
			cantDivisores++;
		}
	}
	alert("Números divisores encontrados: " + cantDivisores);
}//FIN DE LA FUNCIÓN


//Otro ejercicio que dió el profe
/*
	var numeros = [];
	var numerosIngresados;
	var numeroMaximo;
	var numeroMinimo;
	var suma = 0;
	var promedio;
	var continuar;

	do
	{
		numerosIngresados = parseInt(prompt("Ingrese un número: "));
		numeros.push(numerosIngresados);

		continuar = confirm("Desea continuar? ");
	}while(continuar == true);

	numeroMaximo = numeros[0];
	for(var i = 1; i < numeros.length; i++)
	{
		if(numeros[i] > numeroMaximo)
		{
			numeroMaximo = numeros[i];
		}
	}
	alert("El número máximo es: " + numeroMaximo);

	numeroMinimo = numeros[0];
	for (var i = 1; i < numeros.length; i++)
	{
		if(numeros[i] < numeroMinimo)
		{
			numeroMinimo = numeros[i];
		}
	}
	alert("El número mínimo es: " + numeroMinimo);

	for(var i = 0; i < numeros.length; i++)
	{
		suma += numeros[i];
	}
	promedio = suma / numeros.length;
	alert("El promedio de todos los números es: " + promedio);
*/