function handShake (total) {


let count = 0;

for(let i = 0; i < total; i++){

	for(let j = i; j < total; j++){

		if(i !== j){
			count++
		}
	}
}

return count

}

console.log(handShake(3));
console.log(handShake(6));