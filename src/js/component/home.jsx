import React from "react";
import PropType from "prop-types";
import SecondsCounter from "./conteo";

//create your first component

const Home = (props) => {
	return (
		<div>
			<SecondsCounter seconds={props.numSecs} />
		</div>
	);
};
Home.propTypes = {
	numSecs: PropType.number,
};
export default Home;
