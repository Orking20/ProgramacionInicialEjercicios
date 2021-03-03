/**
 * Aqui dentro probar el codigo que quieran
 */
function probarEjercicio()
{
	var mascota;
	var pelaje;
	var edadMascota;
	var nombre;
	var raza;
	var peso;
	var estadoClinico;
	var temperaturaCorporal;

	var perroMasPesado;

	var nombrePerroMasPesado;
	var mascotasTotales = 0;
	var porcentajeEnfermos;
	var sinPeloMenorTemp;
	var nombreMenorTemp;
	var sumaTempGato = 0;
	var sumaTempPerro = 0;
	var sumaTempOtro = 0;
	var cantGatos = 0;
	var cantPerros = 0;
	var cantOtros = 0;
	var promedioTempGato;
	var promedioTempPerro;
	var promedioTempOtro;
	var gatosYPerros = 0;
	var porcentajeGatosYPerros;
	var cantEnfermos = 0;
	var cantInternados = 0;
	var cantAdopcion = 0;
	var sumaPeso = 0;
	var promedioPeso;
	var cantMascotas = 0;
	var nombreMascotaUltima;

	var gatoMasLiviando;

	var nombreGatoMasLiviano;
	var razaGatoMasLiviano;
	var contador = 1;
	var continuar;

	do
	{
		do
		{
			mascota = prompt("Ingrese la mascota (gato/perro/otro): ");
		}while(mascota != "gato" && mascota != "perro" && mascota != "otro");
		do
		{
			pelaje = prompt("Ingrese el pelaje (corto/largo/sin pelo): ");
		}while(pelaje != "corto" && pelaje != "largo" && pelaje != "sin pelo");
		do
		{
			edad = parseInt(prompt("Ingrese la edad: "));
		}while(edad <= 0);
		do
		{
			nombre = prompt("Ingrese el nombre: ");
		}while(!isNaN(nombre));
		do
		{
			raza = prompt("Ingrese la raza: ");
		}while(!isNaN(raza));
		do
		{
			peso = parseInt(prompt("Ingrese el peso: "));
		}while(peso <= 0);
		do
		{
			estadoClinico = prompt("Ingrese el estado clínico (enfermo/internado/adopcion): ");
		}while(estadoClinico != "enfermo" && estadoClinico != "internado" && estadoClinico != "adopcion");
		do
		{
			temperaturaCorporal = parseInt(prompt("Ingrese la temperatura corporal: "));
		}while(isNaN(temperaturaCorporal));

		mascotasTotales++;

		if(contador == 1)
		{
			sinPeloMenorTemp = temperaturaCorporal;
			gatoMasLiviando = peso;
			perroMasPesado = peso;

			contador--;
		}

		if(mascota == "perro")
		{
			if(peso >= perroMasPesado)
			{
				perroMasPesado = peso;
				nombrePerroMasPesado = nombre
			}
			sumaTempPerro += temperaturaCorporal;
			cantPerros++;
			gatosYPerros++;
		}
		else if(mascota == "gato")
		{
			sumaTempGato += temperaturaCorporal;
			cantGatos++;
			gatosYPerros++;
		}
		else if(mascota == "otro")
		{
			sumaTempOtro += temperaturaCorporal;
			cantOtros++;
		}

		if(pelaje == "sin pelo")
		{
			if(temperaturaCorporal <= sinPeloMenorTemp)
			{
				sinPeloMenorTemp = temperaturaCorporal;
				nombreMenorTemp = nombre;
			}

			if(mascota == "gato")
			{
				if(peso <= gatoMasLiviando)
				{
					gatoMasLiviando = peso;
					nombreGatoMasLiviano = nombre;
					razaGatoMasLiviano = raza;
				}
			}
		}

		if(estadoClinico == "enfermo")
		{
			cantEnfermos++;
		}
		else if(estadoClinico == "internado")
		{
			cantInternados++;
		}
		else if(estadoClinico == "adopcion")
		{
			cantAdopcion++;
		}

		if(mascota == "otro")
		{
			nombreMascotaUltima = nombre;
		}

		sumaPeso += peso;
		cantMascotas++;

		continuar = confirm("¿Desea continuar?");
	}while(continuar == true);

	porcentajeEnfermos = cantEnfermos * mascotasTotales / 100;
	porcentajeGatosYPerros = gatosYPerros * mascotasTotales / 100;

	promedioTempPerro = sumaTempPerro / cantPerros;
	promedioTempGato = sumaTempGato / cantGatos;
	promedioTempOtro = sumaTempOtro / cantOtros;
	promedioPeso = sumaPeso / cantMascotas;

	document.write("Peso del perro mas pesado: " + perroMasPesado + " <br>");
	document.write("Porcentaje de mascotas enfermas: " + porcentajeEnfermos + " <br>");
	document.write("Nombre de la última mascota que no sea ni perro ni gato: " + nombreMascotaUltima + " <br>");
	document.write("La mascota sin pelo con menor temperatura corporal es " + nombreMenorTemp + " con una temperatura de " + sinPeloMenorTemp + " <br>");

	if(promedioTempPerro > promedioTempGato)
	{
		if(promedioTempPerro > promedioTempOtro)
		{
			document.write("El tipo de mascota con mayor promedio de temperatura corporal es el perro con " + promedioTempPerro + " de promedio" + " <br>");
		}
		else
		{
			document.write("El tipo de mascota con mayor promedio de temperatura corporal es otro con " + promedioTempOtro + " de promedio" + " <br>");
		}
	}
	else if(promedioTempGato > promedioTempPerro)
	{
		if(promedioTempGato > promedioTempOtro)
		{
			document.write("El tipo de mascota con mayor promedio de temperatura corporal es el gato con " + promedioTempGato + " de promedio" + " <br>");
		}
		else
		{
			document.write("El tipo de mascota con mayor promedio de temperatura corporal es otro con " + promedioTempOtro + " de promedio" + " <br>");
		}
	}
	else
	{
		document.write("El tipo de mascota con mayor promedio de temperatura corporal es otro con " + promedioTempOtro + " de promedio" + " <br>");
	}

	document.write("Porcentaje de gatos y perros del total: " + porcentajeGatosYPerros + " <br>");

	if(cantEnfermos < cantInternados)
	{
		if(cantEnfermos < cantAdopcion)
		{
			document.write("El estado clínico con menor cantidad de mascotas es enfermo con " + cantEnfermos + " mascotas" + " <br>");
		}
		else
		{
			document.write("El estado clínico con menor cantidad de mascotas es adopcion con " + cantAdopcion + " mascotas" + " <br>");
		}
	}
	else if(cantInternados < cantEnfermos)
	{
		if(cantInternados < cantAdopcion)
		{
			document.write("El estado clínico con menor cantidad de mascotas es internado con " + cantInternados + " mascotas" + " <br>");
		}
		else
		{
			document.write("El estado clínico con menor cantidad de mascotas es adopcion con " + cantAdopcion + " mascotas" + " <br>");
		}
	}
	else
	{
		document.write("El estado clínico con menor cantidad de mascotas es adopcion con " + cantAdopcion + " mascotas" + " <br>");
	}

	document.write("Promedio del peso de todas las mascotas: " + promedioPeso + " <br>");
	document.write("Nombre del gato sin pelos más liviano: " + nombreGatoMasLiviano + " <br>");
	document.write("Raza del gato sin pelos más liviano: " + razaGatoMasLiviano + " <br>");
}