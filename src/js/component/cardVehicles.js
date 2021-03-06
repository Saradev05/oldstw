import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/card.scss";
import { Context } from "../store/appContext";

export const CardVehicles = props => {
	const { store, actions } = useContext(Context);

	const [cardDetails, setCardDetails] = useState({});
	useEffect(() => {
		fetch(props.url)
			.then(res => res.json())
			.then(data => {
				setCardDetails(data.result);
				console.log(data.result.properties);
			})
			.catch(err => console.error(err));
	}, []);

	return (
		<div className="card">
			<img
				src="https://images.pexels.com/photos/3019977/pexels-photo-3019977.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				className="card-img-cap"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{cardDetails.description ? cardDetails.description : "description"}</p>
				<p className="card-text">{cardDetails.properties ? cardDetails.properties.name : "name"}</p>
				<a href={"/vehicles/" + cardDetails.uid} className="btn btn-primary">
					Learn More!
				</a>
				<button
					type="button"
					className="btn btn-outline-warning ml-4"
					onClick={() => actions.setFavorites(props.name)}
					data-toggle="button">
					<i className="far fa-heart" />
				</button>
			</div>
		</div>
	);
};
CardVehicles.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string,
	url: PropTypes.string
};
