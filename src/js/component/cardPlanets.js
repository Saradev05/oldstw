import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/card.scss";
import { Context } from "../store/appContext";

export const CardPlanets = props => {
	const { store, actions } = useContext(Context);

	const [cardDetails, setCardDetails] = useState({});
	useEffect(() => {
		fetch(props.url)
			.then(res => res.json())
			.then(data => {
				setCardDetails(data.result);
				console.log(data.result);
			})
			.catch(err => console.error(err));
	}, []);

	return (
		<div className="card">
			<img
				className="card-img-cap"
				src="https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{cardDetails.description ? cardDetails.description : "description"}</p>
				<p className="card-text">{cardDetails.properties ? cardDetails.properties.name : "name"}</p>
				<a href={"/planets/" + cardDetails.uid} className="btn btn-primary">
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
CardPlanets.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string,
	url: PropTypes.string
};
