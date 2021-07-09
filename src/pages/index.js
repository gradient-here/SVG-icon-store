import React, { Component } from "react";
import Icon from "../components/Icon";
import ReactDOM from "react-dom";
import style from "./index.css";

class PageOne extends Component {
	constructor(props) {
		super(props);
		this.state =
		{
			icons: [
				"report",
				"check",
				"chevron",
				"calendar",
				"arrow",
				"clock",
				"stop"
			]
		}
	}

	clickHandler() {
		window.location.href = './page2.html';
	}

	render() {
		return (
			<div className={style.pageCont}>
				<div className={style.title}>SVG Icon Store</div>
				<div className={style.subtitle}>dynamically store all your projects SVG icons in one place</div>

				<div className={style.iconCont}>
					{this.state.icons.map((icon) => (
						<Icon icon={icon}/>
					))}
				</div>

			</div>
		)
	}
}

ReactDOM.render(<PageOne/>, document.getElementById('pageOne'));