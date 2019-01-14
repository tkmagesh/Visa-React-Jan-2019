invoked using 'new'

1. this -> new object
2. this -> returned by default

function Spinner(){

	if (!(this instanceof Spinner))
		return new Spinner();

	var counter = 0;
	
	this.up = function(){
		return ++counter;
    };

	this.down = function(){
		return --counter;
    };
}

forEach, map, reduce, filter