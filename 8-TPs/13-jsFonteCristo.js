/*El departamento de NUMEROS ESPECIALES  del instituto matemático FonteCristo 
 nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares ()
{
	var numeroIngresado;

	numeroIngresado = document.getElementById("txtIdNumero").value;
	numeroIngresado = parseInt(numeroIngresado);

	if(isNaN(numeroIngresado))
	{
		alert("Esto no es un número");
	}
	else
	{
		while(numeroIngresado != 0)
		{
			if(numeroIngresado % 2 == 0)
			{
				alert(numeroIngresado);
				numeroIngresado -= 2;
			}
			else
			{
				numeroIngresado -= 1
			}
		}
		
		alert(numeroIngresado);
	}
}

function NumerosImpares()
{
	var numeroIngresado;

	numeroIngresado = document.getElementById("txtIdNumero").value;
	numeroIngresado = parseInt(numeroIngresado);

	if(isNaN(numeroIngresado))
	{
		alert("Esto no es un número");
	}
	else
	{
		while(numeroIngresado >= 0)
		{
			if(numeroIngresado % 2 == 0)
			{
				numeroIngresado -= 1;
			}
			else
			{
				alert(numeroIngresado);
				numeroIngresado -= 2;
			}
		}

		numeroIngresado += 1;
		alert(numeroIngresado);
	}
}

function NumerosDivisibles()
{
	var numeroIngresado;
	var cantidadNumeros;
	var divisor;
	var contador = 0;

	cantidadNumeros = 0;
	divisor = 1;

	numeroIngresado = document.getElementById("txtIdNumero").value;
	numeroIngresado = parseInt(numeroIngresado);

	if(isNaN(numeroIngresado))
	{
		alert("Esto no es un número");
	}
	else
	{
		while(contador < 100)
		{
			if(numeroIngresado % divisor == 0)
			{
				cantidadNumeros++;
			}

			divisor++;
			contador++;
		}

		alert(cantidadNumeros);
	}
}

function VerificarPrimo()
{
	var numeroIngresado;
	var contador = 1;
	var acumulador = 0;

	numeroIngresado = document.getElementById("txtIdNumero").value;
	numeroIngresado = parseInt(numeroIngresado);

	if(isNaN(numeroIngresado))
	{
		alert("Esto no es un número");
	}
	else
	{
		while(contador <= numeroIngresado)
		{
			if(numeroIngresado % contador == 0)
			{
				acumulador++;
			}
			contador++;
		}
		if(acumulador == 2)
		{
			alert("Es un número primo");
		}
		else
		{
			alert("No es un número primo");
		}
	}
}

function NumerosPrimos()
{
	var numeroIngresado;
	var cantPrimos;
	var contador = 1;
	var acumulador = 0;

	cantPrimos = 0;

	numeroIngresado = document.getElementById("txtIdNumero").value;
	numeroIngresado = parseInt(numeroIngresado);

	if(isNaN(numeroIngresado))
	{
		alert("Esto no es un número");
	}
	else
	{
		while(numeroIngresado >= 0)
		{
			while(contador <= numeroIngresado)
			{
				if(numeroIngresado % contador == 0)
				{
					acumulador++;
				}
				contador++;
			}
			if(acumulador == 2)
			{
				cantPrimos++;
			}

			acumulador = 0;
			contador = 1;
			numeroIngresado--;
		}

		alert("La cantidad de numeros primos es: " + cantPrimos);
	}
}