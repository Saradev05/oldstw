import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardSingle } from "../component/cardSingle.js";
import { CardSinglePlanets } from "../component/cardSinglePlanets.js";
import { CardSingleVehicles } from "../component/cardSingleVehicles.js";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	let myCard = null;

	if (props.path == "single") {
		myCard = <CardSingle />;
	} else if (props.path == "planets") {
		myCard = <CardSinglePlanets />;
	} else if (props.path == "vehicles") {
		myCard = <CardSingleVehicles />;
	}

	return (
		<div>
			{myCard}
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object,
	path: PropTypes.string
};
