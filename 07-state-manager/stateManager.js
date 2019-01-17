var SM = (function(){
	var _currentState = undefined,
		_subscribers = [],
		_reducer = function(){},
		_init_action = '@@INIT_ACTION';

	function getState(){
		return _currentState;
	}

	function subscribe(listenerFn){
		if (typeof listenerFn === 'function')
			_subscribers.push(listenerFn);
	}

	function triggerChange(){
		_subscribers.forEach(listenerFn => listenerFn());
	}

	function dispatch(action){
		var newState = _reducer(_currentState, action);
		if (newState === _currentState) return;
		_currentState = newState;
		triggerChange();
	}

	function createStore(reducer){
		if (typeof reducer !== 'function') 
			throw new Error('a reducer is mandatory to create a store');
		_reducer = reducer;
		_currentState = _reducer(_currentState, _init_action);
		return { getState, subscribe, dispatch };
	}

	return { createStore };
})();