/**
 * Aqui dentro probar el codigo que quieran
 */
function probarEjercicio()
{
	var continente;
	var pais;
	var cantHabitantes;
	var nivelPobreza;
	var temperatura;
	var tempPares = 0;
	var tempImparesEuropa = 0;
	var cantHabitantesMinimos;
	var paisMenosHabitantes;
	var paisesTempAltas = 0;
	var paisesTempBajasAmerica = 0;
	var habitantesTotales = 0;
	var habitantesIngresados = 0;
	var promedioHabitantes;
	var habitantesTempAltas = 0;
	var habitantesTempAltasIngresados = 0;
	var promedioHabitantesTempAltas;
	var tempMinima;
	var paisTempMinima;
	var habitantesMaximos;
	var continenteMasHabitantes;
	var contador = 1;

	for(var i = 0; i < 5; i++)
	{
		do
		{
			continente = prompt("Ingrese el continente (america/asia/europa/africa/oceania): ")
		}while(continente != "america" && continente != "asia" && continente != "europa" && continente != "africa" && continente != "oceania");
		do
		{
			pais = prompt("Ingrese el nombre del país: ");
		}while(!isNaN(pais));
		do
		{
			cantHabitantes = parseInt(prompt("Ingrese la cantidad de habitantes en millones (entre 1 y 7000): "));
		}while(isNaN(cantHabitantes) || cantHabitantes < 1 || cantHabitantes > 7000);
		do
		{
			nivelPobreza = prompt("Ingrese el nivel de pobreza (pobre/rico/muy rico): ");
		}while(nivelPobreza != "pobre" && nivelPobreza != "rico" && nivelPobreza != "muy rico" || continente == "europa" && nivelPobreza == "pobre");
		do
		{
			temperatura = parseInt(prompt("Ingrese la temperatura mínima en el territorio (entre -50 y 50): "));
		}while(isNaN(temperatura) || temperatura < -50 || temperatura > 50);

		if(contador == 1)
		{
			habitantesMaximos = cantHabitantes;
			tempMinima = temperatura;
			cantHabitantesMinimos = cantHabitantes;

			contador--;
		}

		if(temperatura % 2 == 0)
		{
			tempPares++;
		}

		if(continente == "europa")
		{
			if(temperatura % 2 != 0)
			{
				tempImparesEuropa++;
			}
		}

		if(cantHabitantes <= cantHabitantesMinimos)
		{
			cantHabitantesMinimos = cantHabitantes;
			paisMenosHabitantes = pais;
		}

		if(temperatura > 40)
		{
			paisesTempAltas++;
			habitantesTempAltas += cantHabitantes;
			habitantesTempAltasIngresados++;
		}
		else if(temperatura < 0)
		{
			if(continente == "america")
			{
				paisesTempBajasAmerica++;
			}
		}

		if(temperatura <= tempMinima)
		{
			tempMinima = temperatura;
			paisTempMinima = pais;
		}

		if(cantHabitantes >= habitantesMaximos)
		{
			habitantesMaximos = cantHabitantes;
			continenteMasHabitantes = pais;
		}

		habitantesIngresados++;
		habitantesTotales += cantHabitantes;
	}

	promedioHabitantes = habitantesTotales / habitantesIngresados;
	promedioHabitantesTempAltas = habitantesTempAltas / habitantesTempAltasIngresados;

	document.write("Cantidad de temperaturas pares: " + tempPares + "<br>");
	document.write("Cantidad de temperaturas impares en Europa: " + tempImparesEuropa + "<br>");
	document.write("Pais con menos habitantes: " + paisMenosHabitantes + " con " + cantHabitantesMinimos + " millones de habitantes" + "<br>");
	document.write("Cantidad de paises con temperaturas mayores a 40 grados: " + paisesTempAltas + "<br>");
	document.write("Cantidad de paises con temperaturas abajo de los 0 grados en América: " + paisesTempBajasAmerica + "<br>");
	document.write("Promedio de habitantes entre los paises ingresados: " + promedioHabitantes + "<br>");
	document.write("Promedio de habitantes entre los paises que superan los 40 grados: " + promedioHabitantesTempAltas + "<br>");
	document.write("El pais con menor temperatura es " + paisTempMinima + " con una temperatura de " + tempMinima + " grados" + "<br>");
	document.write("El continente con más habitantes es " + continenteMasHabitantes + " con " + habitantesMaximos + " millones de habitantes" + "<br>");
}