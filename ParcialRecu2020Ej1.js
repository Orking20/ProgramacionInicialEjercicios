function mostrar()
{
	var producto;
	var precio;
	var cantUnidades;
	var marca;
	var fabricante;

	var jabonMasCaro = 0;
	var cantUnidadesJabonMasCaro;
	var fabricanteJabonMasCaro;

	var unidadesMaxBarbijo = 0;
	var unidadesMaxJabon = 0;
	var unidadesMaxAlcohol = 0;
	var sumaPrecioBarbijo = 0;
	var sumaPrecioJabon = 0;
	var sumaPrecioAlcohol = 0;
	var promedio;
	var divisorBarbijo = 0;
	var divisorJabon = 0;
	var divisorAlcohol = 0;

	for(var i = 0; i < 5; i++)
	{
		do
		{
			producto = prompt("Ingrese el producto (barbijo, jabon, alcohol): ");
		}while(producto != "barbijo" && producto != "jabon" && producto != "alcohol");
		do
		{
			precio = parseInt(prompt("Ingrese el precio (entre 100 y 300): "));
		}while(isNaN(precio) || precio < 100 || precio > 300);
		do
		{
			cantUnidades = parseInt(prompt("Ingrese la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades): "));
		}while(isNaN(cantUnidades) || cantUnidades < 0 || cantUnidades > 1000);
		do
		{
			marca = prompt("Ingrese la marca: ");
		}while(!isNaN(marca));
		do
		{
			fabricante = prompt("Ingrese el fabricante: ");
		}while(!isNaN(fabricante));

		if(producto == "jabon")
		{
			if(precio > jabonMasCaro)
			{
				jabonMasCaro = precio;
				cantUnidadesJabonMasCaro = cantUnidades;
				fabricanteJabonMasCaro = fabricante;
			}
		}
		if(producto == "barbijo")
		{
			unidadesMaxBarbijo += cantUnidades;
			sumaPrecioBarbijo += precio;
			divisorBarbijo++;
		}
		else if(producto == "jabon")
		{
			unidadesMaxJabon += cantUnidades;
			sumaPrecioJabon += precio;
			divisorJabon++;
		}
		else if(producto == "alcohol")
		{
			unidadesMaxAlcohol += cantUnidades;
			sumaPrecioAlcohol += precio;
			divisorAlcohol++;
		}
	}

	document.write("Del jabón más caro hay " + cantUnidadesJabonMasCaro + " unidades del fabricante " + fabricanteJabonMasCaro + "<br>");

	if(unidadesMaxBarbijo > unidadesMaxJabon)
	{
		if(unidadesMaxBarbijo > unidadesMaxAlcohol)
		{
			promedio = sumaPrecioBarbijo / divisorBarbijo;
			document.write("El promedio del producto con más unidades (Barbijo) es: " + promedio + "<br>");
		}
		else
		{
			promedio = sumaPrecioAlcohol / divisorAlcohol;
			document.write("El promedio del producto con más unidades (Alcohol) es: " + promedio + "<br>");
		}
	}
	else if(unidadesMaxJabon > unidadesMaxBarbijo)
	{
		if(unidadesMaxJabon > unidadesMaxAlcohol)
		{
			promedio = sumaPrecioJabon / divisorJabon;
			document.write("El promedio del producto con más unidades (Jabón) es: " + promedio + "<br>");
		}
		else
		{
			promedio = sumaPrecioAlcohol / divisorAlcohol;
			document.write("El promedio del producto con más unidades (Alcohol) es: " + promedio + "<br>");
		}
	}
	else
	{
		promedio = sumaPrecioAlcohol / divisorAlcohol;
		document.write("El promedio del producto con más unidades (Alcohol) es: " + promedio + "<br>");
	}

	document.write("En total se compraron " + unidadesMaxBarbijo + " unidades de barbijos" + "<br>");
}