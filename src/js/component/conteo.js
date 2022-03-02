import React from "react";
import propTypes from "prop-types";

const SecondsCounter = (props) => {
	return <div>{props.seconds}</div>;
};

SecondsCounter.propTypes = {
	seconds: propTypes.number,
};
export default SecondsCounter;
