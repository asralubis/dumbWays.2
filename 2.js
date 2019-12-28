function cetak (count) {

	let characters = 'abcdefghijklmnopqrstuvwxyz1234567890';

	let result = '';

	for(let i = 0; i < count; i++){

		for (let j = 0; j < 28; j++){
			
			result += characters.charAt(Math.floor(Math.random() * characters.length));
		}
		result += '\n'
	}
	return result
}

console.log(cetak(3));
console.log(cetak(5));
console.log(cetak());