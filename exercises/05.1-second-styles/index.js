import React from "react";
import ReactDOM from "react-dom";
import PropTypes, { nominalTypeHack } from "prop-types";

const buttonStyles = {
	//write button styles here
	backgroundColor: "yellow",
	borderRadius: "5px",
	border: "none",
	color: "black",
	fontWeight: "bold"
};

const badgeStyles = {
	//write the span styles here
	backgroundColor: "red",
	borderRadius: "10px",
	color: "white",
	marginLeft: "2px"
};

const Badge = props => {
	return (
		<button style={buttonStyles} type="button" className="btn btn-primary">
			{props.label}
			<span style={badgeStyles} className="badge badge-light">
				{props.number}
			</span>
		</button>
	);
};
Badge.propTypes = {
	label: PropTypes.string,
	number: PropTypes.string
};
//dont forget to change the label
ReactDOM.render(<Badge label="Alerts" number="2" />, document.querySelector("#myDiv"));
