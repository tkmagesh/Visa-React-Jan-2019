import bugApi from '../services/bugApi';

export function removeClosed(bugs){
	let closedBugs = bugs.filter(bug => bug.isClosed);
	closedBugs.forEach(closedBug => bugApi.remove(closedBug));
	let action = { type : 'REMOVE_ALL', payload : closedBugs};
	return action;
}