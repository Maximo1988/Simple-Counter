//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
//import Home from "./component/home.jsx";

//render your react application
function SimpleCounter(props) {
	return (
		<div className="Icono-de-Reloj container-fluid bg-black">
			<div className="Reloj">
				<i
					className="fa fa-solid fa-clock"
					style={{ height: "25px" }}></i>
			</div>
			<div className="six m-2">{props.digitsix % 10}</div>
			<div className="five m-2">{props.digitfive % 10}</div>
			<div className="four m-2">{props.digitfour % 10}</div>
			<div className="three m-2">{props.digitthree % 10}</div>
			<div className="two m-2">{props.digittwo % 10}</div>
			<div className="one m-2">{props.digitone % 10}</div>
		</div>
	);
}

SimpleCounter.prototype = {
	digitsix: propTypes.number,
	digitfive: propTypes.number,
	digitfour: propTypes.number,
	digitthree: propTypes.number,
	digittwo: propTypes.number,
	digitone: propTypes.number,
};

let numeracion = 0;
setInterval(() => {
	const six = Math.floor(numeracion / 100000);
	const five = Math.floor(numeracion / 10000);
	const four = Math.floor(numeracion / 1000);
	const three = Math.floor(numeracion / 100);
	const two = Math.floor(numeracion / 10);
	const one = Math.floor(numeracion / 1);
	ReactDOM.render(
		<SimpleCounter
			digitsix={six}
			digitfive={five}
			digitfour={four}
			digitthree={three}
			digittwo={two}
			digitone={one}
		/>,

		//<Home numSecs={numeracion} />,
		document.querySelector("#app")
	);
	numeracion++;
}, 1000);
