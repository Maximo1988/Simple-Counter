//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let numeracion = 0;
setInterval(() => {
	ReactDOM.render(
		<Home numSecs={numeracion} />,
		document.querySelector("#app")
	);
	numeracion++;
}, 1000);
