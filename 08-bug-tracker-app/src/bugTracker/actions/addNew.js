import bugApi from '../services/bugApi';

export function addNew(bugName){
	let newBug = { id : 0, name : bugName, isClosed : false};
	bugApi.save(newBug);
	let action = { type : 'ADD_NEW', payload : newBug};
	return action;
}