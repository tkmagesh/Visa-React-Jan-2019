import bugApi from '../services/bugApi';

export function toggle(bugToToggle){
	return function(dispatch){
		let toggledBugData = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
		bugApi
			.save(toggledBugData)
			.then(toggledBug => {
				let action = { type : 'REPLACE', payload : toggledBug};
				dispatch(action);
			});
	};
}