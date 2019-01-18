import React, { Component } from 'react';

class BugSort extends Component{
	selectAttrNameRef = React.createRef();
	chkIsDescending = React.createRef();

	onSortChange = () => {
		let { bugs, sort } = this.props;
		sort(bugs, this.selectAttrNameRef.current.value, this.chkIsDescending.current.checked);
	}
	render(){
		
		return(
			<section className="sort">
				<label htmlFor="">Order By :</label>
				<select ref={this.selectAttrNameRef} onChange={this.onSortChange}>
					<option value="name">Name</option>
					<option value="isClosed">Status</option>
				</select>
				<label htmlFor="">Descending ? :</label>
				<input ref={this.chkIsDescending} type="checkbox" onChange={this.onSortChange} />
			</section>
		)
	}
}

export default BugSort;