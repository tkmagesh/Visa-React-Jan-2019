import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

let spinnerActionCreators = {
	down(delta){
		let action = { type : 'DOWN', payload : delta };
		return action;
	},
	up(delta){
		let action = { type : 'UP', payload : delta };
		return action;
	},
	doubleUp(){
		let action = { type : 'DOUBLE_UP'};
		return action;
	},
	doubleDown(){
		let action = { type : 'DOUBLE_DOWN'};
		return action;
	}
};

class Spinner extends Component{
	state : {
		delta : 1
	};
	onDownClick = () => {
		this.props.down(this.state.delta);
	}
	onUpClick = () => {
		this.props.up(this.state.delta);
	}
	onDoubleUpClick = () => {
		this.props.doubleUp();
	}
	onDoubleDownClick = () => {
		this.props.doubleDown();
	}
	render(){
		let { value } = this.props;
		return(
			<div>
				<input type="button" value="Double Down" onClick={this.onDoubleDownClick} />
				<input type="button" value="Down" onClick={this.onDownClick}/>
				<input type="number" onChange={ evt => this.setState({delta : evt.target.valueAsNumber}) }/>
				<span> [ {value} ] </span>
				<input type="button" value="Up"  onClick={this.onUpClick}/>
				<input type="button" value="Double Up" onClick={this.onDoubleUpClick} />
			</div>
		)
	}
}

function mapStateToSpinnerProps(appState){
	let value = appState.spinnerData;
	return { value : value };
}

function mapDispatchToSpinnerProps(dispatch){
	let spinnerActions = bindActionCreators(spinnerActionCreators, dispatch);	
	return spinnerActions;
}

export default connect(
		mapStateToSpinnerProps,
		mapDispatchToSpinnerProps
	)(Spinner);