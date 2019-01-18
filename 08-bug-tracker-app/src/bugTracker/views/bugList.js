import React, { Component } from 'react';
import BugItem from './bugItem';

class BugList extends Component{
	render(){
		let { bugs, toggle, removeClosed } = this.props;
		let bugItems = bugs.map((bug, index) => (
			<BugItem key={index} bug={bug} toggle={toggle}/>
		));
		return(
			<section className="list">
				<ol>
					{bugItems}
				</ol>
				<input type="button" value="Remove Closed" onClick={() => removeClosed(bugs)}/>
			</section>
		)
	}
}

export default BugList;