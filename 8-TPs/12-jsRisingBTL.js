/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada
e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos.
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
*/
function ComenzarIngreso ()
{
	//definicion de variables
	var edad;
	var sexo;
	var estadoCivil;
	var sueldoBruto;
	var legajo;
	var nacionalidad;

	do
	{
		edad = prompt("Ingrese su edad: ");
	}while(isNaN(edad) || edad < 18 || edad > 90);
	do
	{
		sexo = prompt("Ingrese su sexo ('m' o 'f'): ");
	}while(sexo != "m" && sexo != "f");
	do
	{
		estadoCivil = prompt("Ingrese su estado civíl (1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos): ");
	}while(estadoCivil < 1 || estadoCivil > 4);
	do
	{
		sueldoBruto = prompt("Ingrese su saldo en bruto (No menor a 8000): ");
	}while(sueldoBruto < 8000);
	do
	{
		legajo = prompt("Ingrese su número de legajo (numérico de 4 cifras, sin ceros a la izquierda): ")
	}while(legajo < 1000 || legajo > 9999);
	do
	{
		nacionalidad = prompt("Ingrese su nacionalidad ('a' para argentinos, 'e' para extranjeros, 'n' para nacionalizados)");
	}while(nacionalidad != "a" && nacionalidad != "e" && nacionalidad != "n");

	if(sexo == "m")
	{
		sexo = "Masculino";
	}
	else
	{
		sexo = "Femenino";
	}

	if(nacionalidad == "a")
	{
		nacionalidad = "Argentino/a";
	}
	else if(nacionalidad == "e")
	{
		nacionalidad = "Extranjero/a";
	}
	else
	{
		nacionalidad = "Nacionalizado/a";
	}

	document.getElementById("txtIdEdad").value = edad;
	document.getElementById("txtIdSexo").value = sexo;
	document.getElementById("txtIdEstadoCivil").value = estadoCivil;
	document.getElementById("txtIdSueldo").value = sueldoBruto;
	document.getElementById("txtIdLegajo").value = legajo;
	document.getElementById("txtIdNacionalidad").value = nacionalidad;
}