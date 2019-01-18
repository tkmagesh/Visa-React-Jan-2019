import bugApi from '../services/bugApi';

export function load(){
	return function(dispatch){
		bugApi
			.getAll()
			.then(bugs => {
				let action = { type : 'REPLACE_ALL', payload : bugs};
				dispatch(action);	
			})
			
	};
	
}

