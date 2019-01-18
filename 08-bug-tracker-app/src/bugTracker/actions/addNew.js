export function addNew(bugName){
	let newBug = { name : bugName, isClosed : false};
	let action = { type : 'ADD_NEW', payload : newBug};
	return action;
}