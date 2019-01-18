import React, { Component } from 'react';

class BugItem extends Component{

	onBugNameClick = () => {
		this.props.toggle(this.props.bug);
	}
	render(){
		let { bug } = this.props;
		let bugStyle = 'bugname ' + (bug.isClosed ? 'closed' : '');
		return(
			<li>
				<span className={bugStyle} onClick={this.onBugNameClick}>
					{JSON.stringify(bug)}
				</span>
			</li>	
		);
	}
}

export default BugItem;