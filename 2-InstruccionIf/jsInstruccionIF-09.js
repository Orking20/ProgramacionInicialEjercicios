function mostrar()
{
	var numRandom;
	numRandom = Math.round(Math.random() * 100);

	if (numRandom >= 1 && numRandom <= 10) //Solo muestra el numero si se encuentra entre 1 y 10
	{
		alert(numRandom);
	}
	else
	{
		console.log("El número es: " + numRandom); //Muestro por consola el número
	}
}//FIN DE LA FUNCIÓN