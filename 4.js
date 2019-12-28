function urutKata (kalimat) {

let temp = '';
let array = [];

let urutArr = [];


for (let i = 0; i < kalimat.length; i++) {

	temp += kalimat[i]

	if(kalimat[i] == ' ' || i == kalimat.length-1){
		array.push(temp);
		temp = '';
	}
}

for(let j = 1; j <= 9; j++){

	for(let k = 0; k < array.length; k++){

		for(let l = 0; l < array[k].length; l++){

			if(array[k][l] == j){

				urutArr.push(array[k])
			}
		}
	}
}
let result = urutArr.join('');

return result

}

console.log(urutKata("ib2u in1i b3udi"));
console.log(urutKata("se1lamat menjela2ng ta3hun b4aru"));
console.log(urutKata(""));