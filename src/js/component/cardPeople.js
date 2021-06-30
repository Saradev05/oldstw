import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/card.scss";
import { Context } from "../store/appContext";

export const CardPeople = props => {
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
		<div className="card ">
			<p>
				<img
					className="card-img-top"
					src="https://cdn.pixabay.com/photo/2019/12/27/05/26/christmas-stocking-4721704_960_720.jpg"
					alt="Card image top"
				/>
			</p>
			<div className="card-body">
				<h5 className="card-title p-0">{props.name}</h5>
				<p className="card-text">{cardDetails.description ? cardDetails.description : "description"}</p>
				<p className="card-text">{cardDetails.properties ? cardDetails.properties.name : "name"}</p>
				<a href={"/single/" + cardDetails.uid} className="btn btn-primary">
					Learn More!
				</a>
				<button
					type="button"
					className="btn btn-outline-warning ml-4"
					onClick={() => {
						if (store.favorites.includes(props.name)) {
							actions.deleteFavorites(store.favorites.indexOf(props.name));
						} else {
							actions.setFavorites(props.name);
						}
					}}
					data-toggle="button">
					<i className="far fa-heart " />
				</button>
			</div>
		</div>
	);
};
CardPeople.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string,
	url: PropTypes.string
};
