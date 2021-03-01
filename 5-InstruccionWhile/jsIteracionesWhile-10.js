/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	var respuesta;
	var numeroIngresado;
	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var contPositivos = 0;
	var contNegativos = 0;
	var contCeros = 0;
	var contPares = 0;
	var promPositivos;
	var promNegativos;
	var diferenciaPosNeg;

	do
	{
		numeroIngresado = prompt("Ingrese un número.");
		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado < 0)
		{
			sumaNegativos += numeroIngresado;
			contNegativos++;
		}
		else if (numeroIngresado > 0)
		{
			sumaPositivos += numeroIngresado;
			contPositivos++;
		}
		else
		{
			contCeros++;
		}

		if (numeroIngresado % 2 == 0)
		{
			contPares++;
		}

		respuesta = confirm("Desea continuar?");
	}while(respuesta == true);

	promPositivos = sumaPositivos / contPositivos;
	promNegativos = sumaNegativos / contNegativos;
	diferenciaPosNeg = sumaNegativos + sumaPositivos;

	alert("Suma negativos: " + sumaNegativos);
	alert("Suma positivos: " + sumaPositivos);
	alert("Cantidad de positivos: " + contPositivos);
	alert("Cantidad de negativos: " + contNegativos);
	alert("Cantidad de ceros: " + contCeros);
	alert("Cantidad de numeros pares: " + contPares);
	alert("Promedio de positivos: " + promPositivos);
	alert("Promedio de negativos: " + promNegativos);
	alert("Diferencia entre negativos y poditivos: " + diferenciaPosNeg);
}//FIN DE LA FUNCIÓN