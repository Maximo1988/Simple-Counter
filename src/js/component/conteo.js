import React from "react";
import PropType from "prop-types";

const SecondsCounter = (props) => {
	return <div>{props.seconds}</div>;
};

SecondsCounter.propTypes = {
	seconds: PropType.number,
};
export default SecondsCounter;
