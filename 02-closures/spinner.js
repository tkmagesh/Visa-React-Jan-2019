function spinnerFactory(){
	var counter = 0;


	function up(){
		return ++counter;
	}

	function down(){
		return --counter;
	}

	var spinner = {
		up : up,
		down : down
	};

	return spinner;
}



var spinner = spinnerFactory();

spinner.up() //=> 1
spinner.up() //=> 2
spinner.up() //=> 3

spinner.down() //=> 2
spinner.down() //=> 1
spinner.down() //=> 0
spinner.down() //=> -1

