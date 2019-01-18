

/*
import React, { Component } from 'react';
class BugItem extends Component{
	render(){
		let { bug, toggle } = this.props;
		let bugStyle = 'bugname ' + (bug.isClosed ? 'closed' : '');
		return(
			<li>
				<span className={bugStyle} onClick={() => toggle(bug)}>
					{JSON.stringify(bug)}
				</span>
			</li>	
		);
	}
}
*/

import React from 'react';

//Higher Order Components


/*let BugItem = function(props){
	let { bug, toggle } = props
	let bugStyle = 'bugname ' + (bug.isClosed ? 'closed' : '');
	return(
		<li>
			<span className={bugStyle} onClick={() => toggle(bug)}>
				{JSON.stringify(bug)}
			</span>
		</li>	
	);
}*/

/*let BugItem = function({ bug, toggle }){
	return(
		<li>
			<span className={'bugname ' + (bug.isClosed ? 'closed' : '')} onClick={() => toggle(bug)}>
				{JSON.stringify(bug)}
			</span>
		</li>	
	);
}*/


let BugItem = ({ bug, toggle }) => (
	<li>
		<span className={'bugname ' + (bug.isClosed ? 'closed' : '')} onClick={() => toggle(bug)}>
			{JSON.stringify(bug)}
		</span>
	</li>	
);


export default BugItem;