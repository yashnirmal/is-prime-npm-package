function isPrime(num){
	if(num<=1) return false;
	if(!Number.isInteger(num)) return false;

	let sqrt = Math.floor(Math.sqrt(num))
	for(let i=2;i<sqrt+1;i++){
		if(num%i===0){
			return false;
		}
	}

	return true;
}

module.exports = isPrime