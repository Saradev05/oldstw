import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/cardSingle.scss";
import { Context } from "../store/appContext";

export const CardSingleVehicles = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params);

	const [cardDetails, setCardDetails] = useState({});
	useEffect(() => {
		fetch("https://www.swapi.tech/api/Vehicles/" + params.uid)
			.then(res => res.json())
			.then(data => {
				setCardDetails(data.result);
				console.log(data.result.properties);
			})
			.catch(err => console.error(err));
	}, []);

	return (
		<div className="card cardSingle d-flex flex-row  ">
			<img
				src="https://images.pexels.com/photos/6499004/pexels-photo-6499004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				className="card-img-top imgsingle"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{cardDetails.properties ? cardDetails.properties.name : "name"}</h5>
				<p className="card-text">{cardDetails.properties ? cardDetails.properties.crew : "crew"}</p>
				<p className="card-text">
					{cardDetails.properties ? cardDetails.properties.consumables : "consumables"}
				</p>
				<p className="card-text">{cardDetails.properties ? cardDetails.properties.model : "model"}</p>
				<p className="card-text">{cardDetails.properties ? cardDetails.properties.pilots : "pilots"}</p>
				<p className="card-text">
					{cardDetails.properties ? cardDetails.properties.vehicle_class : "vehicle-class"}
				</p>
			</div>
		</div>
	);
};
CardSingleVehicles.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string,
	url: PropTypes.string
};
