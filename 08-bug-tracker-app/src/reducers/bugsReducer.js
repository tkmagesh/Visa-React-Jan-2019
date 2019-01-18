function bugsReducer(currentState = [], action){
	if (action.type === 'ADD_NEW'){
		let newBug = action.payload;
		let newState = [...currentState, newBug];
		return newState;
	}
	if (action.type === 'REPLACE'){
		let { newBug, oldBug } = action.payload;
		let newState = currentState.map(bug => bug === oldBug ? newBug : bug);
		return newState;
	}
	if (action.type === 'REMOVE_ALL'){
		let bugsToRemove = action.payload;
		let newState = currentState.filter(bug => bugsToRemove.indexOf(bug) === -1);
		return newState;
	}
	if (action.type === 'REPLACE_ALL'){
		return action.payload;
	}
	return currentState;
}
export default bugsReducer;