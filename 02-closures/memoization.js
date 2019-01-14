
var isPrime = (function(){
	var cache = {};

	function checkPrime(n){
		console.log('Processing ', n);
		for(var index = 2; index <= (n/2); index++)
			if (n % index === 0)
				return false;
		return true;
	}

	return function(n){
		if (typeof cache[n] === 'undefined')
			cache[n] = checkPrime(n);
		return cache[n];
	}
})();


var isEvenOrOdd = (function(){
	var cache = {};

	function checkEvenOrOdd(n){
		console.log('Processing ', n);
		return n % 2 === 0 ? 'even' : 'odd';
	}

	return function(n){
		if (typeof cache[n] === 'undefined')
			cache[n] = checkEvenOrOdd(n);
		return cache[n];
	}
})();


function memoize(fn){
	var cache = {};

	return function(n){
		if (typeof cache[n] === 'undefined')
			cache[n] = fn(n);
		return cache[n];
	}
}

var isPrime = memoize(function checkPrime(n){
	console.log('Processing ', n);
	for(var index = 2; index <= (n/2); index++)
		if (n % index === 0)
			return false;
	return true;
});

var isOddOrEven = memoize(function checkEvenOrOdd(n){
	console.log('Processing ', n);
	return n % 2 === 0 ? 'even' : 'odd';
});

function memoize(fn){
	var cache = {};

	return function(){
		var key = JSON.stringify(arguments);
		if (typeof cache[key] === 'undefined')
			cache[key] = fn.apply(this, arguments);
		return cache[key];
	}
}


