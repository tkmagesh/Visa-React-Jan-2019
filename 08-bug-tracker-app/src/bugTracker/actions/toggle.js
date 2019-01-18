import bugApi from '../services/bugApi';

export function toggle(bugToToggle){
	let toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
	bugApi.save(toggledBug);
	let action = { type : 'REPLACE', payload : { oldBug : bugToToggle, newBug : toggledBug}};
	return action;
}