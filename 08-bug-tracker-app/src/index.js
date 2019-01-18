import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import BugTracker from './bugTracker';
import Spinner from './spinner';

import appStore from './store';

ReactDOM.render(
	<Provider store={appStore}>
		<div>
			<Spinner />
			<hr/>
			<BugTracker />
		</div>
	</Provider>,
document.getElementById('root'));
