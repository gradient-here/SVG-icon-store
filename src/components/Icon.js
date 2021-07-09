import { getIcon, getIconViewbox } from '../images/icons';
import React, { Component } from 'react';
import style from "./Icon.css"

export default class Icon extends Component {
	constructor(props) {
		super(props);
		this.state = 
		{}
	}

	fixedIcons(i) {
		return (
			<svg className={style.icon} viewBox={getIconViewbox(i)} fill="none" xmlns="http://www.w3.org/2000/svg">
			{getIcon(i)}
			</svg>
		)
	}

	render() {
		return (
			<div className={style.iconDiv}>
			{this.fixedIcons(this.props.icon)}
			</div>
		)
	}
}