import { createStore , applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

let appStore = createStore(rootReducer, applyMiddleware(thunk));
/*
var oldDispatch = appStore.dispatch;
appStore.dispatch = function(action){
	if (typeof action === 'function'){
		action(oldDispatch);
	} else {
		oldDispatch(action);
	}
}
*/
export default appStore;