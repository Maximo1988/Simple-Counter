import React from "react";
import PropTypes from "prop-types";

//create your first component

const Home = (props) => {
	return <div>{props.numSecs}</div>;
};

Home.propTypes = {
	numSecs: PropTypes.number,
};
export default Home;
