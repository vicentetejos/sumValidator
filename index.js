function twoNumberSum(array, targetSum){
	var result=[]
	for (let i=0; i < array.length; i++){
		if (result.length!=0){
			break
		}
		for(let j=0; j < array.length;j++){
			var sum=0;
	                sum=array[i]+array[j];
        	        console.log(array[i],"+",array[j],":",sum)
			if(sum==targetSum){
				if(array[i]!=array[j]){
                		        result.push(array[i]);
        	                	result.push(array[j]);
		                        break
				}
				else{
					break
				}
			}else{
				continue
			}

		}
		
	}
	if (result.length==0){
		console.log("No hay coincidencias")
	}else{
		console.log("El array resultante es:",result)
	}
}
const array = [3,5,-4,8,11,1,-1,6];
const targetSum = 10;

const result= twoNumberSum(array,targetSum);
