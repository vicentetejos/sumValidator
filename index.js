/*##############################################
 * Actividad 1
 * TEL335 Diseño de Aplicaciones Web y Moviles
 * Profesor: Francisco Cabezas
 * ##########
 * Estudiante
 * ##########
 * Nombre: Vicente Tejos Medel 
 * Rol: 201930017-2
 *##############################################
 * */
function twoNumberSum(array, targetSum){
	let result=[] // arreglo para guardar resultado en variable local
	for (let i=0; i < array.length; i++){ // se recorre primer valor para la suma
		if (result.length!=0){ // si se ha encontrado un resultado se finaliza
			break 
		}
		for(let j=0; j < array.length;j++){ // se recorre segundo valor para la realizar la suma
			var sum=0; // se inicializa variable auxiliar
	                sum=array[i]+array[j];
//  	        console.log(array[i],"+",array[j],":",sum) probar errores
			if(sum==targetSum){ // si el valor es igual al buscado 
				if(array[i]!=array[j]){ // los numeros sumados no deben ser el mismo
                		        result.push(array[i]); // valor en posicion i se guarda
        	                	result.push(array[j]); // valor en posicion j se guarda
		                        break // se finaliza la busqueda
				}
			}

		}
		
	}
	return result
}
const array = [3,5,-4,8,11,1,-1,6]; // arreglo de numeros a sumar
const targetSum = 10; // objetivo de suma a encontrar
const result= twoNumberSum(array,targetSum); // Se guarda resultado de la función implementada en result 

if (result.length==0){ // se indica que no hubo resultado favorables
	console.log("No hay coincidencias")
}else{ // se indican los valores que cumplen
	console.log("El array resultante es:",result)
}
