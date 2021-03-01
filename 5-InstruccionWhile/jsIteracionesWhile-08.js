/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;

	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;

	do
	{
		contador = prompt("Ingrese un número.");
		contador = parseInt(contador);

		if (contador >= 0)
		{
			sumaPositivos += contador;
		}
		else
		{
			multiplicacionNegativos *= contador;
		}

		respuesta = confirm("¿Querés ingresar otro número?");
	}while (respuesta == true)
	
	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;
}//FIN DE LA FUNCIÓN