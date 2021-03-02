function mostrar()
{
	var producto;
	var cantBolsas;
	var precioBolsa;
	var bolsasTotales = 0;
	var precioTotal = 0;
	var precioSinDescuento;
	var precioConDescuento;
	var descuento;
	var cantBolsasArena = 0;
	var cantBolsasCal = 0;
	var cantBolsasCemento = 0;
	var arenaPrecio = 0;
	var calPrecio = 0;
	var cementoPrecio = 0;
	var continuar;

	do
	{
		do
		{
			producto = prompt("Ingrese un producto (arena, cal, cemento): ");
		}while(producto != "arena" && producto != "cal" && producto != "cemento");
		do
		{
			cantBolsas = parseInt(prompt("Ingrese cuantas bolsas desea comprar: "));
		}while(isNaN(cantBolsas) || cantBolsas <= 0);
		do
		{
			precioBolsa = parseInt(prompt("Ingrese el precio por bolsa: "));
		}while(isNaN(precioBolsa) || precioBolsa <= 0);

		precioTotal += precioBolsa;
		bolsasTotales += cantBolsas;

		if(producto == "arena")
		{
			cantBolsasArena++;
		}
		else if(producto == "cal")
		{
			cantBolsasCal++;
		}
		else
		{
			cantBolsasCemento++;
		}

		if(producto == "arena" && precioBolsa > arenaPrecio)
		{
			arenaPrecio = precioBolsa;
		}
		else if(producto == "cal" && precioBolsa > calPrecio)
		{
			calPrecio = precioBolsa;
		}
		else if(producto == "cemento" && precioBolsa > cementoPrecio)
		{
			cementoPrecio = precioBolsa;
		}

		continuar = confirm("¿Quiere seguir comprando?");
	}while(continuar == true);

	if(bolsasTotales > 30)
	{
		descuento = 25;
	}
	else if(bolsasTotales > 10)
	{
		descuento = 15;
	}

	precioSinDescuento = bolsasTotales * precioTotal;
	precioConDescuento = precioSinDescuento * descuento / 100

	if(bolsasTotales > 10)
	{
		document.write("Importe total a pagar con descuento: " + precioConDescuento + "<br>");
	}
	else
	{
		document.write("Importe total a pagar sin descuento: " + precioSinDescuento + "<br>");
	}

	if(cantBolsasArena > cantBolsasCal)
	{
		if(cantBolsasArena > cantBolsasCemento)
		{
			document.write("El tipo con mas cantidad de bolsas es de arena con " + cantBolsasArena + " bolsas<br>");
		}
		else
		{
			document.write("El tipo con mas cantidad de bolsas es de cemento con " + cantBolsasCemento + " bolsas<br>");
		}
	}
	else if(cantBolsasCal > cantBolsasArena)
	{
		if(cantBolsasCal > cantBolsasCemento)
		{
			document.write("El tipo con mas cantidad de bolsas es de cal con " + cantBolsasCal + " bolsas<br>");
		}
		else
		{
			document.write("El tipo con mas cantidad de bolsas es de cemento con " + cantBolsasCemento + " bolsas<br>");
		}
	}
	else
	{
		document.write("El tipo con mas cantidad de bolsas es de cemento con " + cantBolsasCemento + " bolsas<br>");
	}

	if(arenaPrecio > calPrecio)
	{
		if(arenaPrecio > cementoPrecio)
		{
			document.write("El tipo de producto mas caro es arena con " + arenaPrecio + "<br>");
		}
		else
		{
			document.write("El tipo de producto mas caro es cal cemento con " + cementoPrecio + "<br>");
		}
	}
	else if(calPrecio > arenaPrecio)
	{
		if(calPrecio > cementoPrecio)
		{
			document.write("El tipo de producto mas caro es cal con " + calPrecio + "<br>");
		}
		else
		{
			document.write("El tipo de producto mas caro es cemento con " + cementoPrecio + "<br>");
		}
	}
	else
	{
		document.write("El tipo de producto mas caro es cemento con " + cementoPrecio + "<br>");
	}
}