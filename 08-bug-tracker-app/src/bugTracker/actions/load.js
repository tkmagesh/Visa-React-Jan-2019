import bugApi from '../services/bugApi';

export function load(){
	let bugs = bugApi.getAll();
	let action = { type : 'REPLACE_ALL', payload : bugs};
	return action;
}

